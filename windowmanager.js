let snapPreview = null;
let isDraggingWindow = false;
let draggedWindow = null;

let shakeStartTime = 0;
let shakeCount = 0;
let shakeTimer = null;

function initWindowManagement() {
    snapPreview = document.getElementById('snap-preview');

    document.addEventListener('mousemove', handleAeroSnap);
    document.addEventListener('mouseup', applyAeroSnap);
}

function handleAeroSnap(e) {
    if (!isDraggingWindow || !draggedWindow) return;

    const threshold = 10;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight - 40;
    if (e.clientX < threshold) {
        showSnapPreview(0, 0, screenWidth / 2, screenHeight);
        draggedWindow.snapPosition = 'left';
    }
    else if (e.clientX > screenWidth - threshold) {
        showSnapPreview(screenWidth / 2, 0, screenWidth / 2, screenHeight);
        draggedWindow.snapPosition = 'right';
    }
    else if (e.clientY < threshold) {
        showSnapPreview(0, 0, screenWidth, screenHeight);
        draggedWindow.snapPosition = 'maximize';
    }
    else {
        hideSnapPreview();
        draggedWindow.snapPosition = null;
    }
}

function showSnapPreview(left, top, width, height) {
    if (!snapPreview) return;

    snapPreview.style.left = left + 'px';
    snapPreview.style.top = top + 'px';
    snapPreview.style.width = width + 'px';
    snapPreview.style.height = height + 'px';
    snapPreview.classList.add('active');
}

function hideSnapPreview() {
    if (snapPreview) {
        snapPreview.classList.remove('active');
    }
}

function applyAeroSnap() {
    if (!isDraggingWindow || !draggedWindow || !draggedWindow.snapPosition) {
        hideSnapPreview();
        isDraggingWindow = false;
        draggedWindow = null;
        return;
    }

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight - 40;

    switch (draggedWindow.snapPosition) {
        case 'left':
            draggedWindow.style.left = '0px';
            draggedWindow.style.top = '0px';
            draggedWindow.style.width = (screenWidth / 2) + 'px';
            draggedWindow.style.height = screenHeight + 'px';
            draggedWindow.classList.remove('maximized');
            break;
        case 'right':
            draggedWindow.style.left = (screenWidth / 2) + 'px';
            draggedWindow.style.top = '0px';
            draggedWindow.style.width = (screenWidth / 2) + 'px';
            draggedWindow.style.height = screenHeight + 'px';
            draggedWindow.classList.remove('maximized');
            break;
        case 'maximize':
            draggedWindow.classList.add('maximized');
            break;
    }

    hideSnapPreview();
    isDraggingWindow = false;
    draggedWindow.snapPosition = null;
    draggedWindow = null;
}

function enhancedMinimize(windowEl, appName) {
    windowEl.classList.add('minimizing');

    setTimeout(() => {
        windowEl.classList.remove('minimizing');
        windowEl.classList.add('minimized');

        const taskbarApp = document.querySelector(`.taskbar-app[data-app="${appName}"]`);
        if (taskbarApp) {
            taskbarApp.classList.remove('active');
            taskbarApp.classList.add('minimized-glow');

            setTimeout(() => {
                taskbarApp.classList.remove('minimized-glow');
            }, 500);
        }
    }, 300);
}

function enhancedRestore(windowEl, appName) {
    windowEl.classList.add('restoring');
    windowEl.classList.remove('minimized');

    setTimeout(() => {
        windowEl.classList.remove('restoring');
    }, 300);

    const taskbarApp = document.querySelector(`.taskbar-app[data-app="${appName}"]`);
    if (taskbarApp) {
        taskbarApp.classList.add('active');
    }
}

function initAeroShake(windowEl, titlebar) {
    let shakeStartX = 0;
    let shakeStartY = 0;
    let shakeMovements = [];

    titlebar.addEventListener('mousedown', (e) => {
        shakeStartX = e.clientX;
        shakeStartY = e.clientY;
        shakeMovements = [];
        shakeStartTime = Date.now();
    });

    document.addEventListener('mousemove', (e) => {
        if (shakeStartTime > 0) {
            const deltaX = Math.abs(e.clientX - shakeStartX);
            const deltaY = Math.abs(e.clientY - shakeStartY);

            if (deltaX > 20 || deltaY > 20) {
                shakeMovements.push({ x: e.clientX, y: e.clientY, time: Date.now() });

                shakeMovements = shakeMovements.filter(m => Date.now() - m.time < 500);

                if (shakeMovements.length > 6) {
                    const isShaking = detectShakePattern(shakeMovements);
                    if (isShaking) {
                        performAeroShake(windowEl);
                        shakeMovements = [];
                        shakeStartTime = 0;
                    }
                }
            }
        }
    });

    document.addEventListener('mouseup', () => {
        shakeStartTime = 0;
        shakeMovements = [];
    });
}

function detectShakePattern(movements) {
    if (movements.length < 6) return false;

    let directionChanges = 0;
    let lastDirection = null;

    for (let i = 1; i < movements.length; i++) {
        const dx = movements[i].x - movements[i - 1].x;
        const currentDirection = dx > 0 ? 'right' : 'left';

        if (lastDirection && currentDirection !== lastDirection) {
            directionChanges++;
        }
        lastDirection = currentDirection;
    }

    return directionChanges >= 3;
}

function performAeroShake(activeWindow) {
    const allWindows = document.querySelectorAll('.window');
    let minimizedCount = 0;

    allWindows.forEach(win => {
        if (win !== activeWindow && !win.classList.contains('minimized')) {
            const appName = Object.keys(openWindows).find(key => openWindows[key] === win);
            if (appName) {
                enhancedMinimize(win, appName);
                minimizedCount++;
            }
        }
    });

    if (minimizedCount > 0) {
        showSystemToast('🪟 Aero Shake', `Minimized ${minimizedCount} window(s)`);
    }
}

function updateWindowFocus(focusedWindow) {
    document.querySelectorAll('.window').forEach(win => {
        if (win === focusedWindow) {
            win.classList.add('focused');
            win.classList.remove('unfocused');
        } else {
            win.classList.remove('focused');
            win.classList.add('unfocused');
        }
    });
}

function makeWindowDraggable(windowEl) {
    const titlebar = windowEl.querySelector('.window-titlebar');
    let isDragging = false;
    let currentX, currentY, initialX, initialY;
    let wasMaximized = false;
    let maxRestoreOffset = 0;

    titlebar.addEventListener('mousedown', (e) => {
        if (e.target.closest('.window-control')) return;

        wasMaximized = windowEl.classList.contains('maximized');

        if (wasMaximized) {
            const rect = windowEl.getBoundingClientRect();
            maxRestoreOffset = e.clientX / rect.width;
            windowEl.classList.remove('maximized');

            const newWidth = 800;
            windowEl.style.width = newWidth + 'px';
            windowEl.style.height = '600px';
            windowEl.style.left = (e.clientX - newWidth * maxRestoreOffset) + 'px';
            windowEl.style.top = e.clientY + 'px';
        }

        isDragging = true;
        isDraggingWindow = true;
        draggedWindow = windowEl;
        initialX = e.clientX - windowEl.offsetLeft;
        initialY = e.clientY - windowEl.offsetTop;
        windowEl.style.zIndex = ++zIndexCounter;

        shakeStartTime = Date.now();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        windowEl.style.left = currentX + 'px';
        windowEl.style.top = Math.max(0, currentY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    titlebar.addEventListener('dblclick', () => {
        if (windowEl.classList.contains('maximized')) {
            windowEl.classList.remove('maximized');
        } else {
            windowEl.classList.add('maximized');
        }
    });

    initAeroShake(windowEl, titlebar);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes minimized-glow {
        0%, 100% { box-shadow: 0 0 0 rgba(74, 144, 226, 0); }
        50% { box-shadow: 0 0 20px rgba(74, 144, 226, 0.8); }
    }
    
    .taskbar-app.minimized-glow {
        animation: minimized-glow 0.5s ease-out;
    }
`;
document.head.appendChild(style);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWindowManagement);
} else {
    initWindowManagement();
}

window.enhancedMinimize = enhancedMinimize;
window.enhancedRestore = enhancedRestore;
window.makeWindowDraggable = makeWindowDraggable;
window.updateWindowFocus = updateWindowFocus;
window.isDraggingWindow = isDraggingWindow;
