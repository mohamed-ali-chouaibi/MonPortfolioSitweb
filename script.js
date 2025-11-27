let zIndexCounter = 100;
let openWindows = {};
let screensaverTimeout;
let lastActivity = Date.now();
let revealedCards = 0;

const portfolioFacts = [
    "💻 Built 50+ websites",
    "🎨 Expert in Figma",
    "⚡ 5 years experience",
    "🚀 Fast learner",
    "🌟 Award winner",
    "📱 Mobile-first design",
    "🔧 Full-stack capable",
    "🎯 Detail-oriented",
    "🤝 Team player",
    "📚 Always learning",
    "🌐 10+ languages",
    "✨ Creative problem solver"
];

document.addEventListener('DOMContentLoaded', () => {
    initBootSequence();
});

function initBootSequence() {
    setTimeout(() => {
        const bootScreen = document.getElementById('boot-screen');
        bootScreen.classList.add('fade-out');

        setTimeout(() => {
            bootScreen.style.display = 'none';
            showLoginScreen();
        }, 500);
    }, 3000);
}

function showLoginScreen() {
    const loginScreen = document.getElementById('login-screen');
    loginScreen.classList.remove('hidden');

    const passwordInput = document.getElementById('password-input');
    const loginButton = document.getElementById('login-button');

    document.querySelectorAll('.login-icon[data-icon], .footer-icon[data-icon]').forEach(iconEl => {
        const iconName = iconEl.getAttribute('data-icon');
        const size = iconEl.classList.contains('footer-icon') ? 24 : 20;
        const svg = createIcon(iconName, size);
        if (svg) {
            iconEl.innerHTML = '';
            iconEl.appendChild(svg);
        }
    });

    function updateLoginClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const timeEl = document.getElementById('login-clock-time');
        const dateEl = document.getElementById('login-clock-date');

        if (timeEl) timeEl.textContent = `${hours}:${minutes}`;
        if (dateEl) dateEl.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
    }

    updateLoginClock();
    const loginClockInterval = setInterval(updateLoginClock, 1000);

    setTimeout(() => {
        passwordInput.focus();
    }, 500);

    function handleLogin() {
        const password = passwordInput.value;

        if (password === '' || password.toLowerCase() === 'portfolio' || password) {
            clearInterval(loginClockInterval);
            loginScreen.classList.add('fade-out');

            setTimeout(() => {
                loginScreen.style.display = 'none';
                initDesktop();
            }, 500);
        } else {
            passwordInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                passwordInput.style.animation = '';
            }, 500);
        }
    }

    loginButton.addEventListener('click', handleLogin);

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });
}

function initDesktop() {
    initClock();
    initStartMenu();
    initDesktopIcons();
    initDesktopClick();
    initContextMenu();
    initSystemTray();
    initTaskbarPreviews();
    initScreenSaver();
    initThemeSwitcher();
    initErrorDialog();
    initDesktopSelection();
    initKeyboardShortcuts();
    initEasterEggs();
    optimizePerformance();

    setTimeout(() => {
        showWelcomeNotification();
        startRandomNotifications();
    }, 2000);
}

function initClock() {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        const month = (now.getMonth() + 1).toString();
        const day = now.getDate().toString();
        const year = now.getFullYear();
        const clockEl = document.getElementById('clock');
        if (clockEl) {
            clockEl.innerHTML = `${hours}:${minutes} ${ampm}<br><span style="font-size: 10px;">${month}/${day}/${year}</span>`;
        }
    }
    updateClock();
    setInterval(updateClock, 1000);
}

function initStartMenu() {
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');

    document.querySelectorAll('.item-icon[data-icon], .user-avatar[data-icon], .search-icon[data-icon]').forEach(iconEl => {
        const iconName = iconEl.getAttribute('data-icon');
        const size = iconEl.classList.contains('user-avatar') ? 32 : 16;
        const svg = createIcon(iconName, size);
        if (svg) {
            iconEl.innerHTML = '';
            iconEl.appendChild(svg);
        }
    });

    startButton.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        startMenu.classList.add('hidden');
    });

    startMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.querySelectorAll('.start-menu-item[data-app]').forEach(item => {
        item.addEventListener('click', () => {
            const app = item.getAttribute('data-app');
            if (app) {
                openApplication(app);
                startMenu.classList.add('hidden');
            }
        });
    });

    const searchInput = document.querySelector('.start-menu-search input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.start-menu-programs .start-menu-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? 'flex' : 'none';
            });
        });
    }
}

function initDesktopIcons() {
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        const iconName = icon.getAttribute('data-icon');
        const iconContainer = icon.querySelector('.icon-container');
        if (iconContainer && WindowsIcons && WindowsIcons[iconName]) {
            iconContainer.innerHTML = WindowsIcons[iconName];
        }

        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
            icon.classList.add('selected');
        });

        icon.addEventListener('dblclick', () => {
            const app = icon.getAttribute('data-app');
            openApplication(app);
        });
    });
}

function initDesktopClick() {
    document.getElementById('desktop').addEventListener('click', () => {
        document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
    });
}


function openApplication(appName) {
    if (openWindows[appName]) {
        focusWindow(openWindows[appName]);
        return;
    }

    const getIcon = (name) => getAppIcon ? getAppIcon(name) : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3C/svg%3E';

    const apps = {
        myportfolio: {
            title: 'My Portfolio',
            icon: getIcon('computer'),
            content: createPortfolioContent()
        },
        aboutme: {
            title: 'About Me.txt - Notepad',
            icon: getIcon('notepad'),
            content: createNotepadContent()
        },
        projects: {
            title: 'Projects Explorer - Internet Explorer',
            icon: getIcon('browser'),
            content: createProjectsContent()
        },
        resume: {
            title: 'Resume.pdf - Adobe Reader',
            icon: getIcon('pdf'),
            content: createResumeContent()
        },
        contact: {
            title: 'Contact Me - Windows Live Mail',
            icon: getIcon('mail'),
            content: createContactContent()
        },
        recycle: {
            title: 'Recycle Bin',
            icon: getIcon('recycleBin'),
            content: createRecycleContent()
        },
        documents: {
            title: 'Documents - Windows Explorer',
            icon: getIcon('folder'),
            content: createDocumentsContent()
        },
        pictures: {
            title: 'Pictures - Windows Photo Viewer',
            icon: getIcon('photoViewer'),
            content: createPicturesContent()
        },
        music: {
            title: 'Music - Windows Media Player',
            icon: getIcon('music'),
            content: createMusicContent()
        },
        settings: {
            title: 'Control Panel',
            icon: getIcon('settings'),
            content: createSettingsContent()
        },
        help: {
            title: 'Help and Support',
            icon: getIcon('question'),
            content: createHelpContent()
        },
        paint: {
            title: 'Paint',
            icon: getIcon('paint'),
            content: createPaintContent()
        },
        mediaplayer: {
            title: 'Windows Media Player',
            icon: getIcon('mediaPlayer'),
            content: createMediaPlayerContent()
        },
        game: {
            title: 'Portfolio Facts Game',
            icon: getIcon('game'),
            content: createGameContent()
        },
        codeeditor: {
            title: 'Code Editor - Visual Studio Code',
            icon: getIcon('code'),
            content: createCodeEditorContent()
        }
    };

    const app = apps[appName];
    if (!app) return;

    const windowEl = createWindow(appName, app.title, app.icon, app.content);
    openWindows[appName] = windowEl;
    createTaskbarApp(appName, app.title, app.icon);
}

function createWindow(appName, title, icon, content) {
    const windowEl = document.createElement('div');
    windowEl.className = 'window';
    windowEl.style.top = `${50 + Object.keys(openWindows).length * 30}px`;
    windowEl.style.left = `${100 + Object.keys(openWindows).length * 30}px`;
    windowEl.style.width = '800px';
    windowEl.style.height = '600px';
    windowEl.style.zIndex = ++zIndexCounter;

    const hasMenuBar = ['aboutme', 'projects', 'documents', 'paint', 'mediaplayer', 'codeeditor'].includes(appName);
    const hasStatusBar = ['aboutme', 'projects', 'documents', 'pictures', 'paint', 'codeeditor'].includes(appName);

    windowEl.innerHTML = `
        <div class="window-titlebar">
            <div class="window-title">
                <img src="${icon}" alt="">
                <span>${title}</span>
            </div>
            <div class="window-controls">
                <button class="window-control minimize">−</button>
                <button class="window-control maximize">□</button>
                <button class="window-control close">×</button>
            </div>
        </div>
        ${hasMenuBar ? `
        <div class="window-menubar">
            <span class="menu-item">File</span>
            <span class="menu-item">Edit</span>
            <span class="menu-item">View</span>
            <span class="menu-item">Help</span>
        </div>
        ` : ''}
        <div class="window-content">${content}</div>
        ${hasStatusBar ? `
        <div class="window-statusbar">
            <span class="status-text">Ready</span>
        </div>
        ` : ''}
    `;

    document.getElementById('windows-container').appendChild(windowEl);

    windowEl.querySelector('.minimize').addEventListener('click', () => minimizeWindow(windowEl, appName));
    windowEl.querySelector('.maximize').addEventListener('click', () => toggleMaximize(windowEl));
    windowEl.querySelector('.close').addEventListener('click', () => closeWindow(windowEl, appName));

    if (typeof makeWindowDraggable === 'function') {
        makeWindowDraggable(windowEl);
    } else {
        makeDraggable(windowEl);
    }

    makeResizable(windowEl);

    windowEl.addEventListener('mousedown', () => focusWindow(windowEl));

    if (hasMenuBar) {
        initMenuBar(windowEl, appName);
    }

    windowEl.classList.add('focused');

    return windowEl;
}

function makeDraggable(windowEl) {
    const titlebar = windowEl.querySelector('.window-titlebar');
    let isDragging = false;
    let currentX, currentY, initialX, initialY;

    titlebar.addEventListener('mousedown', (e) => {
        if (windowEl.classList.contains('maximized')) return;
        isDragging = true;
        initialX = e.clientX - windowEl.offsetLeft;
        initialY = e.clientY - windowEl.offsetTop;
        windowEl.style.zIndex = ++zIndexCounter;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        windowEl.style.left = currentX + 'px';
        windowEl.style.top = currentY + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    titlebar.addEventListener('dblclick', () => toggleMaximize(windowEl));
}

function focusWindow(windowEl) {
    windowEl.style.zIndex = ++zIndexCounter;

    if (typeof updateWindowFocus === 'function') {
        updateWindowFocus(windowEl);
    }

    document.querySelectorAll('.taskbar-app').forEach(app => app.classList.remove('active'));
    const appName = Object.keys(openWindows).find(key => openWindows[key] === windowEl);
    if (appName) {
        const taskbarApp = document.querySelector(`.taskbar-app[data-app="${appName}"]`);
        if (taskbarApp) taskbarApp.classList.add('active');
    }
}

function minimizeWindow(windowEl, appName) {
    if (typeof enhancedMinimize === 'function') {
        enhancedMinimize(windowEl, appName);
    } else {
        windowEl.classList.add('minimized');
        const taskbarApp = document.querySelector(`.taskbar-app[data-app="${appName}"]`);
        if (taskbarApp) taskbarApp.classList.remove('active');
    }
}

function toggleMaximize(windowEl) {
    windowEl.classList.toggle('maximized');
}

function closeWindow(windowEl, appName) {
    windowEl.remove();
    delete openWindows[appName];
    const taskbarApp = document.querySelector(`.taskbar-app[data-app="${appName}"]`);
    if (taskbarApp) taskbarApp.remove();
}


function createTaskbarApp(appName, title, icon) {
    const taskbarApp = document.createElement('div');
    taskbarApp.className = 'taskbar-app active';
    taskbarApp.setAttribute('data-app', appName);
    taskbarApp.innerHTML = `
        <img src="${icon}" alt="">
        <span>${title}</span>
    `;

    taskbarApp.addEventListener('click', () => {
        const windowEl = openWindows[appName];
        if (windowEl.classList.contains('minimized')) {
            if (typeof enhancedRestore === 'function') {
                enhancedRestore(windowEl, appName);
            } else {
                windowEl.classList.remove('minimized');
            }
            focusWindow(windowEl);
        } else if (windowEl.style.zIndex == zIndexCounter) {
            minimizeWindow(windowEl, appName);
        } else {
            focusWindow(windowEl);
        }
    });

    taskbarApp.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showTaskbarContextMenu(e.clientX, e.clientY, appName);
    });

    document.getElementById('taskbar-apps').appendChild(taskbarApp);
}

function showTaskbarContextMenu(x, y, appName) {
    const contextMenu = document.getElementById('context-menu');
    contextMenu.innerHTML = `
        <div class="context-menu-item" onclick="closeWindow(openWindows['${appName}'], '${appName}'); hideContextMenu();">Close window</div>
    `;
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = (y - 60) + 'px';
    contextMenu.classList.remove('hidden');
}

let contextMenuTarget = null;

function initContextMenu() {
    const contextMenu = document.getElementById('context-menu');

    document.getElementById('desktop').addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showContextMenu(e.clientX, e.clientY, 'desktop');
    });

    document.querySelectorAll('.desktop-icon').forEach(icon => {
        icon.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            contextMenuTarget = icon;
            showContextMenu(e.clientX, e.clientY, 'icon');
        });
    });

    document.querySelectorAll('.context-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.getAttribute('data-action');
            handleContextAction(action);
            hideContextMenu();
        });
    });

    document.addEventListener('click', hideContextMenu);
}

function showContextMenu(x, y, type) {
    const contextMenu = document.getElementById('context-menu');
    contextMenu.innerHTML = `
        <div class="context-menu-item" data-action="open">Open</div>
        <div class="context-menu-item" data-action="properties">Properties</div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" data-action="refresh">Refresh</div>
    `;

    contextMenu.querySelectorAll('.context-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.getAttribute('data-action');
            handleContextAction(action);
            hideContextMenu();
        });
    });

    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.classList.remove('hidden');
}

function hideContextMenu() {
    document.getElementById('context-menu').classList.add('hidden');
}

function handleContextAction(action) {
    if (action === 'open' && contextMenuTarget) {
        const app = contextMenuTarget.getAttribute('data-app');
        openApplication(app);
    } else if (action === 'properties' && contextMenuTarget) {
        showSystemToast('Properties', contextMenuTarget.querySelector('span').textContent);
    } else if (action === 'refresh') {
        location.reload();
    }
}

function initSystemTray() {
    document.querySelectorAll('.tray-icon[data-icon]').forEach(icon => {
        const iconName = icon.getAttribute('data-icon');
        if (WindowsIcons && WindowsIcons[iconName]) {
            icon.innerHTML = WindowsIcons[iconName];
        }
    });

    const volumeIcon = document.querySelector('.tray-icon[title="Volume"]');
    if (volumeIcon) {
        volumeIcon.addEventListener('click', () => {
            showSystemToast('Volume Control', 'Volume is set to 80%');
        });
    }

    const networkIcon = document.querySelector('.tray-icon[title="Network"]');
    if (networkIcon) {
        networkIcon.addEventListener('click', () => {
            showSystemToast('Network Status', 'Connected to Internet - Signal Strength: Excellent');
        });
    }

    const notifIcon = document.querySelector('.notification-icon');
    if (notifIcon) {
        notifIcon.addEventListener('click', () => {
            toggleNotificationPopup();
        });
    }

    const clockEl = document.getElementById('clock');
    if (clockEl) {
        clockEl.addEventListener('click', () => {
            showSystemToast('Date & Time', new Date().toLocaleString());
        });
    }
}

function initTaskbarPreviews() {
    let previewTimeout;

    document.addEventListener('mouseover', (e) => {
        const taskbarApp = e.target.closest('.taskbar-app');
        if (taskbarApp) {
            const appName = taskbarApp.getAttribute('data-app');
            previewTimeout = setTimeout(() => {
                showTaskbarPreview(taskbarApp, appName);
            }, 500);
        }
    });

    document.addEventListener('mouseout', (e) => {
        const taskbarApp = e.target.closest('.taskbar-app');
        if (taskbarApp) {
            clearTimeout(previewTimeout);
            hideTaskbarPreview();
        }
    });
}

function showTaskbarPreview(taskbarApp, appName) {
    const preview = document.getElementById('taskbar-preview');
    const rect = taskbarApp.getBoundingClientRect();
    const windowEl = openWindows[appName];

    if (!windowEl || !preview) return;

    const title = windowEl.querySelector('.window-title span').textContent;
    preview.querySelector('.preview-title').textContent = title;

    preview.style.left = (rect.left + rect.width / 2 - 140) + 'px';
    preview.classList.remove('hidden');

    const closeBtn = preview.querySelector('.preview-close');
    if (closeBtn) {
        closeBtn.onclick = () => {
            closeWindow(windowEl, appName);
            hideTaskbarPreview();
        };
    }
}

function hideTaskbarPreview() {
    const preview = document.getElementById('taskbar-preview');
    if (preview) {
        preview.classList.add('hidden');
    }
}

function showWelcomeNotification() {
    setTimeout(() => {
        toggleNotificationPopup();
        setTimeout(() => {
            toggleNotificationPopup();
        }, 5000);
    }, 2000);
}

function toggleNotificationPopup() {
    const popup = document.getElementById('notification-popup');
    if (!popup) return;

    popup.classList.toggle('hidden');

    const closeBtn = popup.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.onclick = () => {
            popup.classList.add('hidden');
        };
    }
}

function showSystemToast(title, message) {
    const toast = document.createElement('div');
    toast.className = 'system-toast';
    toast.innerHTML = `
        <div class="toast-header">
            <span>${title}</span>
        </div>
        <div class="toast-body">${message}</div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toast-slide-in 0.3s ease-out reverse';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}

function startRandomNotifications() {
    const notifications = [
        { title: '📧 New Message', message: 'You have a new contact form submission!' },
        { title: '✅ Project Updated', message: 'Portfolio website updated successfully!' },
        { title: '🎉 Achievement Unlocked', message: 'You explored all portfolio sections!' },
        { title: '💡 Tip', message: 'Try right-clicking on desktop icons for more options!' },
        { title: '🔔 Reminder', message: 'Don\'t forget to check out the projects section!' }
    ];

    setInterval(() => {
        if (Math.random() > 0.7) {
            const notification = notifications[Math.floor(Math.random() * notifications.length)];
            showSystemToast(notification.title, notification.message);
        }
    }, 45000);
}

function makeResizable(windowEl) {
    let isResizing = false;
    let currentX, currentY, currentWidth, currentHeight;

    windowEl.addEventListener('mousedown', (e) => {
        if (e.target === windowEl || !e.target.closest) return;

        const rect = windowEl.getBoundingClientRect();
        const isBottomRight = e.clientX > rect.right - 20 && e.clientY > rect.bottom - 20;

        if (isBottomRight && !windowEl.classList.contains('maximized')) {
            isResizing = true;
            currentX = e.clientX;
            currentY = e.clientY;
            currentWidth = rect.width;
            currentHeight = rect.height;
            e.preventDefault();
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;

        const dx = e.clientX - currentX;
        const dy = e.clientY - currentY;

        windowEl.style.width = Math.max(400, currentWidth + dx) + 'px';
        windowEl.style.height = Math.max(300, currentHeight + dy) + 'px';
    });

    document.addEventListener('mouseup', () => {
        isResizing = false;
    });
}


function initScreenSaver() {
    const screensaver = document.getElementById('screensaver');
    if (!screensaver) return;

    const IDLE_TIME = 60000;

    function resetTimer() {
        lastActivity = Date.now();
        screensaver.classList.add('hidden');
        clearTimeout(screensaverTimeout);
        screensaverTimeout = setTimeout(showScreenSaver, IDLE_TIME);
    }

    function showScreenSaver() {
        screensaver.classList.remove('hidden');
    }

    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, resetTimer, true);
    });

    screensaverTimeout = setTimeout(showScreenSaver, IDLE_TIME);
}

function initThemeSwitcher() {
    const themeSwitcher = document.getElementById('theme-switcher');
    if (!themeSwitcher) return;

    const themeClose = themeSwitcher.querySelector('.theme-close');
    const themeOptions = themeSwitcher.querySelectorAll('.theme-option');

    if (themeClose) {
        themeClose.addEventListener('click', () => {
            themeSwitcher.classList.add('hidden');
        });
    }

    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.getAttribute('data-theme');
            applyTheme(theme);

            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            showSystemToast('✅ Theme Applied', `Successfully changed to ${option.querySelector('span').textContent} theme!`);
        });
    });
}

function applyTheme(theme) {
    const themes = {
        default: {
            primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            taskbar: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
            accent: '#4A90E2'
        },
        green: {
            primary: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
            taskbar: 'linear-gradient(to bottom, rgba(20, 50, 20, 0.6), rgba(10, 30, 10, 0.8))',
            accent: '#56ab2f'
        },
        purple: {
            primary: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
            taskbar: 'linear-gradient(to bottom, rgba(50, 20, 80, 0.6), rgba(30, 10, 60, 0.8))',
            accent: '#8e2de2'
        },
        orange: {
            primary: 'linear-gradient(135deg, #f46b45 0%, #eea849 100%)',
            taskbar: 'linear-gradient(to bottom, rgba(80, 40, 20, 0.6), rgba(60, 30, 10, 0.8))',
            accent: '#f46b45'
        }
    };

    const selectedTheme = themes[theme];
    const taskbar = document.getElementById('taskbar');
    if (taskbar) {
        taskbar.style.background = selectedTheme.taskbar;
    }
}

function openControlPanel() {
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.classList.remove('hidden');
    }
}

function initErrorDialog() {
    const errorDialog = document.getElementById('error-dialog');
    if (!errorDialog) return;

    const errorClose = errorDialog.querySelector('.error-close');
    const errorButton = errorDialog.querySelector('.error-button');

    if (errorClose) {
        errorClose.addEventListener('click', () => {
            errorDialog.classList.add('hidden');
        });
    }

    if (errorButton) {
        errorButton.addEventListener('click', () => {
            errorDialog.classList.add('hidden');
        });
    }
}

function showErrorDialog(title, message) {
    const errorDialog = document.getElementById('error-dialog');
    if (!errorDialog) return;

    const titleEl = errorDialog.querySelector('.error-title');
    const textEl = errorDialog.querySelector('.error-text');

    if (titleEl) titleEl.textContent = title;
    if (textEl) textEl.textContent = message;

    errorDialog.classList.remove('hidden');
}

function initDesktopSelection() {
    const desktop = document.getElementById('desktop');
    let isSelecting = false;
    let startX, startY;
    let selectionBox;

    desktop.addEventListener('mousedown', (e) => {
        if (e.target !== desktop) return;

        isSelecting = true;
        startX = e.clientX;
        startY = e.clientY;

        selectionBox = document.createElement('div');
        selectionBox.className = 'selection-box';
        selectionBox.style.left = startX + 'px';
        selectionBox.style.top = startY + 'px';
        desktop.appendChild(selectionBox);
    });

    document.addEventListener('mousemove', (e) => {
        if (!isSelecting) return;

        const currentX = e.clientX;
        const currentY = e.clientY;

        const left = Math.min(startX, currentX);
        const top = Math.min(startY, currentY);
        const width = Math.abs(currentX - startX);
        const height = Math.abs(currentY - startY);

        selectionBox.style.left = left + 'px';
        selectionBox.style.top = top + 'px';
        selectionBox.style.width = width + 'px';
        selectionBox.style.height = height + 'px';

        document.querySelectorAll('.desktop-icon').forEach(icon => {
            const rect = icon.getBoundingClientRect();
            const boxRect = selectionBox.getBoundingClientRect();

            if (rect.left < boxRect.right && rect.right > boxRect.left &&
                rect.top < boxRect.bottom && rect.bottom > boxRect.top) {
                icon.classList.add('selected');
            } else {
                icon.classList.remove('selected');
            }
        });
    });

    document.addEventListener('mouseup', () => {
        if (isSelecting && selectionBox) {
            selectionBox.remove();
            isSelecting = false;
        }
    });
}

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'a') {
            e.preventDefault();
            document.querySelectorAll('.desktop-icon').forEach(icon => {
                icon.classList.add('selected');
            });
        }

        if (e.key === 'Escape') {
            document.querySelectorAll('.desktop-icon').forEach(icon => {
                icon.classList.remove('selected');
            });
            hideContextMenu();
            const startMenu = document.getElementById('start-menu');
            if (startMenu) startMenu.classList.add('hidden');
        }
    });
}

function initEasterEggs() {
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join(',') === konamiSequence.join(',')) {
            showSystemToast('🎮 Konami Code Activated!', 'You found the secret! Here\'s a special theme just for you!');
            applyTheme('purple');
            konamiCode = [];
        }
    });

    let desktopClickCount = 0;
    let desktopClickTimer;

    document.getElementById('desktop').addEventListener('click', (e) => {
        if (e.target.id === 'desktop') {
            desktopClickCount++;
            clearTimeout(desktopClickTimer);

            if (desktopClickCount === 3) {
                showSystemToast('⚡ Quick Tip', 'Triple-click detected! Try the Konami code for a surprise!');
                desktopClickCount = 0;
            }

            desktopClickTimer = setTimeout(() => {
                desktopClickCount = 0;
            }, 500);
        }
    });

    console.log('%c🎨 Portfolio OS v7.0', 'font-size: 20px; font-weight: bold; color: #4A90E2;');
    console.log('%cBuilt with ❤️ using HTML, CSS & JavaScript', 'font-size: 14px; color: #666;');
    console.log('%cTry the Konami Code for a surprise! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 'font-size: 12px; color: #2ECC71;');
}

function optimizePerformance() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            Object.values(openWindows).forEach(windowEl => {
                const rect = windowEl.getBoundingClientRect();
                if (rect.right > window.innerWidth) {
                    windowEl.style.left = (window.innerWidth - rect.width - 20) + 'px';
                }
                if (rect.bottom > window.innerHeight - 40) {
                    windowEl.style.top = (window.innerHeight - rect.height - 60) + 'px';
                }
            });
        }, 250);
    });
}

function revealCard(index) {
    const card = document.querySelector(`.game-card[data-index="${index}"]`);
    if (!card) return;

    const front = card.querySelector('.card-front');
    const back = card.querySelector('.card-back');

    if (back.style.display === 'block') return;

    front.style.display = 'none';
    back.textContent = portfolioFacts[index];
    back.style.display = 'block';
    card.style.background = 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)';

    revealedCards++;
    const counter = document.getElementById('cards-revealed');
    if (counter) counter.textContent = revealedCards;

    if (revealedCards === 12) {
        setTimeout(() => {
            showSystemToast('🎉 Congratulations!', 'You discovered all portfolio facts! Thanks for exploring!');
        }, 500);
    }
}

window.revealCard = revealCard;
window.openControlPanel = openControlPanel;
window.showErrorDialog = showErrorDialog;
window.showSystemToast = showSystemToast;
window.openWindows = openWindows;
window.closeWindow = closeWindow;
window.hideContextMenu = hideContextMenu;


function createPortfolioContent() {
    return `
        <div style="display: flex; flex-direction: column; height: 100%;">
            <!-- Toolbar -->
            <div style="background: linear-gradient(to bottom, #f8f8f8, #e8e8e8); padding: 8px; border-bottom: 1px solid #ccc; display: flex; gap: 5px; align-items: center;">
                <button onclick="navigateExplorer('back')" style="padding: 5px 12px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer; font-size: 16px;">←</button>
                <button onclick="navigateExplorer('forward')" style="padding: 5px 12px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer; font-size: 16px;">→</button>
                <button onclick="navigateExplorer('up')" style="padding: 5px 12px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer; font-size: 16px;">↑</button>
                <div style="flex: 1; display: flex; align-items: center; background: white; border: 1px solid #999; border-radius: 3px; padding: 5px 10px;">
                    <span id="explorer-path" style="font-size: 13px; color: #333;">Computer</span>
                </div>
                <button style="padding: 5px 12px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer; font-size: 12px;">🔍 Search</button>
            </div>
            
            <!-- Command Bar -->
            <div style="background: #f0f0f0; padding: 6px 10px; border-bottom: 1px solid #ccc; display: flex; gap: 15px; font-size: 12px;">
                <span style="cursor: pointer; color: #0066cc;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Organize ▼</span>
                <span style="cursor: pointer; color: #0066cc;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Views ▼</span>
                <span style="cursor: pointer; color: #0066cc;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">New folder</span>
            </div>
            
            <!-- Main Content Area -->
            <div style="flex: 1; display: flex; overflow: hidden;">
                <!-- Navigation Pane -->
                <div style="width: 200px; background: #f7f7f7; border-right: 1px solid #ccc; overflow-y: auto; padding: 10px;">
                    <div style="font-weight: 600; font-size: 11px; color: #666; margin-bottom: 8px; padding-left: 5px;">Favorites</div>
                    <div onclick="loadExplorerView('computer')" style="padding: 6px 10px; cursor: pointer; border-radius: 3px; font-size: 13px; display: flex; align-items: center; gap: 8px; margin-bottom: 2px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='transparent'">
                        <span>💻</span>
                        <span>Computer</span>
                    </div>
                    <div onclick="loadExplorerView('documents')" style="padding: 6px 10px; cursor: pointer; border-radius: 3px; font-size: 13px; display: flex; align-items: center; gap: 8px; margin-bottom: 2px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='transparent'">
                        <span>📁</span>
                        <span>Documents</span>
                    </div>
                    <div onclick="loadExplorerView('downloads')" style="padding: 6px 10px; cursor: pointer; border-radius: 3px; font-size: 13px; display: flex; align-items: center; gap: 8px; margin-bottom: 2px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='transparent'">
                        <span>⬇️</span>
                        <span>Downloads</span>
                    </div>
                    <div style="height: 1px; background: #ddd; margin: 10px 0;"></div>
                    <div style="font-weight: 600; font-size: 11px; color: #666; margin-bottom: 8px; padding-left: 5px;">Computer</div>
                    <div onclick="loadExplorerView('c-drive')" style="padding: 6px 10px; cursor: pointer; border-radius: 3px; font-size: 13px; display: flex; align-items: center; gap: 8px; margin-bottom: 2px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='transparent'">
                        <span>💿</span>
                        <span>C: Drive</span>
                    </div>
                    <div onclick="loadExplorerView('d-drive')" style="padding: 6px 10px; cursor: pointer; border-radius: 3px; font-size: 13px; display: flex; align-items: center; gap: 8px; margin-bottom: 2px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='transparent'">
                        <span>💿</span>
                        <span>D: Drive</span>
                    </div>
                    <div onclick="loadExplorerView('e-drive')" style="padding: 6px 10px; cursor: pointer; border-radius: 3px; font-size: 13px; display: flex; align-items: center; gap: 8px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='transparent'">
                        <span>💿</span>
                        <span>E: Drive</span>
                    </div>
                </div>
                
                <!-- File View Area -->
                <div style="flex: 1; display: flex; flex-direction: column;">
                    <div id="explorer-content" style="flex: 1; overflow-y: auto; padding: 20px; background: white;">
                        <!-- Computer View (Default) -->
                        <div class="explorer-section">
                            <h3 style="color: #333; margin-bottom: 15px; font-size: 14px; font-weight: 600;">Hard Disk Drives</h3>
                            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 15px;">
                                <div onclick="loadExplorerView('c-drive')" style="text-align: center; cursor: pointer; padding: 15px; border-radius: 5px; border: 1px solid transparent; transition: all 0.2s;" onmouseover="this.style.background='#e8f4ff'; this.style.borderColor='#99ccff'" onmouseout="this.style.background='transparent'; this.style.borderColor='transparent'">
                                    <div style="width: 64px; height: 64px; margin: 0 auto 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">C:</div>
                                    <div style="font-weight: 600; color: #333; font-size: 13px;">Web Development</div>
                                    <div style="font-size: 11px; color: #666; margin-top: 4px;">250 GB free of 500 GB</div>
                                </div>
                                <div onclick="loadExplorerView('d-drive')" style="text-align: center; cursor: pointer; padding: 15px; border-radius: 5px; border: 1px solid transparent; transition: all 0.2s;" onmouseover="this.style.background='#e8f4ff'; this.style.borderColor='#99ccff'" onmouseout="this.style.background='transparent'; this.style.borderColor='transparent'">
                                    <div style="width: 64px; height: 64px; margin: 0 auto 10px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">D:</div>
                                    <div style="font-weight: 600; color: #333; font-size: 13px;">Design & Creative</div>
                                    <div style="font-size: 11px; color: #666; margin-top: 4px;">180 GB free of 300 GB</div>
                                </div>
                                <div onclick="loadExplorerView('e-drive')" style="text-align: center; cursor: pointer; padding: 15px; border-radius: 5px; border: 1px solid transparent; transition: all 0.2s;" onmouseover="this.style.background='#e8f4ff'; this.style.borderColor='#99ccff'" onmouseout="this.style.background='transparent'; this.style.borderColor='transparent'">
                                    <div style="width: 64px; height: 64px; margin: 0 auto 10px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">E:</div>
                                    <div style="font-weight: 600; color: #333; font-size: 13px;">Professional</div>
                                    <div style="font-size: 11px; color: #666; margin-top: 4px;">95 GB free of 100 GB</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Details Pane -->
                    <div id="details-pane" style="height: 100px; background: #f7f7f7; border-top: 1px solid #ccc; padding: 15px; font-size: 12px; display: none;">
                        <div style="font-weight: 600; margin-bottom: 8px;">Details</div>
                        <div id="details-content" style="color: #666; line-height: 1.6;">
                            Select an item to view its details
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Status Bar -->
            <div style="background: #f0f0f0; padding: 4px 10px; border-top: 1px solid #ccc; font-size: 11px; color: #666; display: flex; justify-content: space-between;">
                <span id="status-items">3 items</span>
                <span id="status-space">425 GB free</span>
            </div>
        </div>
    `;
}

function createNotepadContent() {
    return `
        <textarea style="width: 100%; height: 100%; border: none; padding: 15px; font-family: 'Consolas', 'Courier New', monospace; font-size: 13px; resize: none; outline: none; box-sizing: border-box;" spellcheck="false">About Me - Welcome to My Digital World
========================================

Hello! I'm a passionate web developer and designer with a love for creating beautiful, functional digital experiences.

My Story:
I discovered my passion for web development during college when I built my first website. What started as a curiosity quickly became a career path. I love the intersection of creativity and logic that web development offers.

Skills & Expertise:
• Front-end Development (HTML, CSS, JavaScript)
• Modern Frameworks (React, Vue.js, Node.js)
• UI/UX Design & Prototyping
• Responsive Web Design
• Version Control (Git)
• Performance Optimization

Background:
I've been working in web development for several years, constantly learning and adapting to new technologies. My approach combines technical expertise with creative problem-solving. I believe in writing clean, maintainable code that others can understand and build upon.

Philosophy:
I believe in clean code, intuitive design, and user-centered development. Every project is an opportunity to create something meaningful that makes a difference in people's lives. The best interfaces are invisible - they just work.

What Drives Me:
The web is constantly evolving, and I love being part of that evolution. Whether it's learning a new framework, optimizing performance, or crafting the perfect user experience, I'm always excited to tackle new challenges.

Interests:
When I'm not coding, you can find me:
• Exploring new design trends and technologies
• Contributing to open-source projects
• Enjoying a good cup of coffee while sketching interface ideas
• Reading about UX psychology and design patterns
• Attending tech meetups and conferences

Let's build something amazing together!

---
Last modified: Today
</textarea>
    `;
}

function createProjectsContent() {
    return `
        <div style="display: flex; flex-direction: column; height: 100%;">
            <div style="background: #f0f0f0; padding: 8px; border-bottom: 1px solid #ccc; display: flex; gap: 10px; align-items: center;">
                <button style="padding: 5px 15px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer;">← Back</button>
                <button style="padding: 5px 15px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer;">→ Forward</button>
                <button style="padding: 5px 15px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer;">🏠</button>
                <input type="text" value="https://myportfolio.com/projects" readonly style="flex: 1; padding: 5px; border: 1px solid #999; border-radius: 3px;">
                <button style="padding: 5px 15px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer;">🔍</button>
            </div>
            <div style="background: #e8e8e8; padding: 8px; border-bottom: 1px solid #ccc; font-size: 12px; display: flex; gap: 5px;">
                <span style="padding: 5px 10px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer; font-weight: 600;">All Projects</span>
                <span style="padding: 5px 10px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='transparent'">Web Apps</span>
                <span style="padding: 5px 10px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='transparent'">Designs</span>
                <span style="padding: 5px 10px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='transparent'">Open Source</span>
            </div>
            <div style="flex: 1; overflow: auto; padding: 30px; background: white;">
                <h1 style="color: #333; margin-bottom: 10px; font-size: 28px;">My Projects</h1>
                <p style="color: #666; margin-bottom: 30px;">Explore my latest work and creative endeavors</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px;">
                    <div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="height: 160px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                        <div style="padding: 20px;">
                            <h3 style="margin: 0 0 10px 0; color: #333;">E-Commerce Platform</h3>
                            <p style="color: #666; font-size: 14px; line-height: 1.6;">A full-featured online shopping platform with cart, checkout, and payment integration.</p>
                            <div style="margin-top: 15px; display: flex; gap: 8px; flex-wrap: wrap;">
                                <span style="background: #e8f4ff; color: #0066cc; padding: 4px 10px; border-radius: 12px; font-size: 11px;">React</span>
                                <span style="background: #e8f4ff; color: #0066cc; padding: 4px 10px; border-radius: 12px; font-size: 11px;">Node.js</span>
                            </div>
                        </div>
                    </div>
                    <div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="height: 160px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"></div>
                        <div style="padding: 20px;">
                            <h3 style="margin: 0 0 10px 0; color: #333;">Portfolio Website</h3>
                            <p style="color: #666; font-size: 14px; line-height: 1.6;">A creative portfolio showcasing design work with smooth animations and interactions.</p>
                            <div style="margin-top: 15px; display: flex; gap: 8px; flex-wrap: wrap;">
                                <span style="background: #ffe8f0; color: #cc0066; padding: 4px 10px; border-radius: 12px; font-size: 11px;">HTML/CSS</span>
                                <span style="background: #ffe8f0; color: #cc0066; padding: 4px 10px; border-radius: 12px; font-size: 11px;">JavaScript</span>
                            </div>
                        </div>
                    </div>
                    <div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="height: 160px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);"></div>
                        <div style="padding: 20px;">
                            <h3 style="margin: 0 0 10px 0; color: #333;">Task Management App</h3>
                            <p style="color: #666; font-size: 14px; line-height: 1.6;">A productivity tool for organizing tasks, projects, and team collaboration.</p>
                            <div style="margin-top: 15px; display: flex; gap: 8px; flex-wrap: wrap;">
                                <span style="background: #e8f9ff; color: #0099cc; padding: 4px 10px; border-radius: 12px; font-size: 11px;">Vue.js</span>
                                <span style="background: #e8f9ff; color: #0099cc; padding: 4px 10px; border-radius: 12px; font-size: 11px;">Firebase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function createResumeContent() {
    return '<div style="padding:40px;background:#525252;height:100%;overflow:auto;"><div style="width:600px;background:white;padding:60px;margin:0 auto;box-shadow:0 4px 20px rgba(0,0,0,0.3);"><h1 style="margin:0 0 5px 0;color:#333;">John Doe</h1><p style="margin:0 0 20px 0;color:#666;">Web Developer & Designer</p><div style="border-top:2px solid #4A90E2;padding-top:20px;"><p style="margin:0;color:#666;font-size:13px;">📧 john.doe@email.com | 📱 (555) 123-4567</p></div><h2 style="color:#4A90E2;margin:25px 0 10px 0;">Experience</h2><h3 style="margin:0 0 5px 0;color:#333;">Senior Web Developer</h3><p style="margin:0 0 5px 0;color:#666;font-size:13px;">Tech Company Inc. | 2020 - Present</p><ul style="color:#666;font-size:13px;"><li>Led development of responsive web applications</li><li>Collaborated with design team</li></ul><h2 style="color:#4A90E2;margin:25px 0 10px 0;">Skills</h2><div style="display:flex;flex-wrap:wrap;gap:8px;"><span style="background:#e8f4ff;color:#0066cc;padding:6px 12px;border-radius:4px;font-size:12px;">HTML/CSS</span><span style="background:#e8f4ff;color:#0066cc;padding:6px 12px;border-radius:4px;font-size:12px;">JavaScript</span><span style="background:#e8f4ff;color:#0066cc;padding:6px 12px;border-radius:4px;font-size:12px;">React</span></div></div></div>';
}

function createContactContent() {
    return '<div style="padding:20px;background:white;height:100%;"><div style="margin-bottom:15px;"><label style="display:block;font-weight:600;margin-bottom:5px;">From:</label><input type="email" placeholder="your.email@example.com" style="width:100%;padding:8px;border:1px solid #ccc;border-radius:3px;"></div><div style="margin-bottom:15px;"><label style="display:block;font-weight:600;margin-bottom:5px;">Subject:</label><input type="text" placeholder="Enter subject" style="width:100%;padding:8px;border:1px solid #ccc;border-radius:3px;"></div><div style="margin-bottom:10px;"><label style="display:block;font-weight:600;margin-bottom:5px;">Message:</label><textarea placeholder="Type your message here..." style="width:100%;height:300px;padding:10px;border:1px solid #ccc;border-radius:3px;resize:vertical;"></textarea></div><button style="padding:10px 30px;background:#4A90E2;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:600;">Send Message</button></div>';
}

function createRecycleContent() {
    return `
        <div style="display: flex; flex-direction: column; height: 100%;">
            <!-- Toolbar -->
            <div style="background: linear-gradient(to bottom, #f8f8f8, #e8e8e8); padding: 8px; border-bottom: 1px solid #ccc; display: flex; gap: 5px; align-items: center;">
                <button style="padding: 5px 12px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer; font-size: 12px;">Empty Recycle Bin</button>
                <button style="padding: 5px 12px; background: white; border: 1px solid #999; border-radius: 3px; cursor: pointer; font-size: 12px;">Restore all items</button>
            </div>
            
            <!-- Main Content -->
            <div style="flex: 1; display: flex; overflow: hidden;">
                <!-- Navigation Pane -->
                <div style="width: 180px; background: #f7f7f7; border-right: 1px solid #ccc; padding: 10px;">
                    <div style="font-weight: 600; font-size: 11px; color: #666; margin-bottom: 8px;">Recycle Bin</div>
                    <div style="padding: 6px 10px; background: #e8f4ff; border: 1px solid #99ccff; border-radius: 3px; font-size: 13px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 16px; height: 16px;">${WindowsIcons.recycleBin}</div>
                            <span>Deleted Items</span>
                        </div>
                    </div>
                </div>
                
                <!-- File List -->
                <div style="flex: 1; display: flex; flex-direction: column;">
                    <div style="flex: 1; overflow-y: auto; padding: 10px; background: white;">
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <div onclick="showSystemToast('Restore', 'Item restored to original location')" style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                                <div style="width: 32px; height: 32px;">${WindowsIcons.document}</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 600; color: #333; font-size: 13px;">Old_Project_Draft.txt</div>
                                    <div style="font-size: 11px; color: #666;">Original location: Desktop</div>
                                </div>
                                <div style="font-size: 11px; color: #666;">11/20/2024</div>
                            </div>
                            <div onclick="showSystemToast('Restore', 'Item restored to original location')" style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                                <div style="width: 32px; height: 32px;">${WindowsIcons.folder}</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 600; color: #333; font-size: 13px;">Unused_Assets</div>
                                    <div style="font-size: 11px; color: #666;">Original location: C:\\Projects</div>
                                </div>
                                <div style="font-size: 11px; color: #666;">11/15/2024</div>
                            </div>
                            <div onclick="showSystemToast('Restore', 'Item restored to original location')" style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                                <div style="width: 32px; height: 32px;">${WindowsIcons.document}</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 600; color: #333; font-size: 13px;">First_Website_Attempt.html</div>
                                    <div style="font-size: 11px; color: #666;">Original location: Documents</div>
                                </div>
                                <div style="font-size: 11px; color: #666;">10/05/2024</div>
                            </div>
                        </div>
                        
                        <!-- Fun Facts Section -->
                        <div style="margin-top: 30px; padding: 20px; background: #f9f9f9; border-radius: 8px;">
                            <h3 style="color: #333; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                                <div style="width: 20px; height: 20px;">${WindowsIcons.star}</div>
                                Easter Eggs & Fun Facts
                            </h3>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <div style="padding: 12px; background: white; border-left: 4px solid #4A90E2; border-radius: 4px;">
                                    <strong>First Website:</strong> Built when I was 14 using HTML tables!
                                </div>
                                <div style="padding: 12px; background: white; border-left: 4px solid #E74C3C; border-radius: 4px;">
                                    <strong>Coffee Count:</strong> Average of 3 cups per coding session
                                </div>
                                <div style="padding: 12px; background: white; border-left: 4px solid #2ECC71; border-radius: 4px;">
                                    <strong>Philosophy:</strong> "Simplicity is the ultimate sophistication"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Status Bar -->
            <div style="background: #f0f0f0; padding: 4px 10px; border-top: 1px solid #ccc; font-size: 11px; color: #666;">
                3 items in Recycle Bin
            </div>
        </div>
    `;
}

function createDocumentsContent() {
    return '<div style="padding:20px;"><h2 style="margin-bottom:20px;">Project Files</h2><div style="display:grid;gap:15px;"><div style="display:flex;align-items:center;gap:12px;padding:12px;border:1px solid #ddd;border-radius:4px;cursor:pointer;" onmouseover="this.style.background=\'#f0f8ff\'" onmouseout="this.style.background=\'white\'"><div style="font-size:32px;">📄</div><div><div style="font-weight:600;">Project_Proposal.docx</div><div style="font-size:12px;color:#666;">Microsoft Word Document • 245 KB</div></div></div><div style="display:flex;align-items:center;gap:12px;padding:12px;border:1px solid #ddd;border-radius:4px;cursor:pointer;" onmouseover="this.style.background=\'#f0f8ff\'" onmouseout="this.style.background=\'white\'"><div style="font-size:32px;">📊</div><div><div style="font-weight:600;">Portfolio_Analytics.xlsx</div><div style="font-size:12px;color:#666;">Excel Spreadsheet • 128 KB</div></div></div></div></div>';
}

function createPicturesContent() {
    return '<div style="background:#2d2d2d;height:100%;display:flex;flex-direction:column;"><div style="background:#1a1a1a;padding:12px;border-bottom:1px solid #000;"><button style="padding:6px 12px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;cursor:pointer;">◀ Previous</button> <button style="padding:6px 12px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;cursor:pointer;">Next ▶</button></div><div style="flex:1;display:flex;align-items:center;justify-content:center;padding:40px;"><div style="text-align:center;"><div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);aspect-ratio:16/10;width:600px;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;margin-bottom:20px;"><div style="font-size:80px;">🖼️</div><h3 style="margin:10px 0;">Project Screenshot Gallery</h3></div><div style="color:#999;font-size:13px;">Image 1 of 4 • 1920 x 1080</div></div></div></div>';
}

function createMusicContent() {
    return '<div style="background:#1a1a1a;height:100%;padding:30px;overflow:auto;"><h2 style="color:#fff;margin-bottom:20px;">🎵 Coding Playlist</h2><div style="display:flex;flex-direction:column;gap:12px;"><div style="background:#2d2d2d;padding:15px;border-radius:8px;display:flex;align-items:center;gap:15px;cursor:pointer;" onmouseover="this.style.background=\'#3d3d3d\'" onmouseout="this.style.background=\'#2d2d2d\'"><div style="width:50px;height:50px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:4px;display:flex;align-items:center;justify-content:center;color:white;font-size:24px;">🎹</div><div style="flex:1;"><div style="color:#fff;font-weight:600;">Lo-fi Hip Hop Beats</div><div style="color:#999;font-size:12px;">Chill • Focus • Productivity</div></div><div style="color:#4A90E2;font-size:24px;">▶</div></div><div style="background:#2d2d2d;padding:15px;border-radius:8px;display:flex;align-items:center;gap:15px;cursor:pointer;" onmouseover="this.style.background=\'#3d3d3d\'" onmouseout="this.style.background=\'#2d2d2d\'"><div style="width:50px;height:50px;background:linear-gradient(135deg,#f093fb 0%,#f5576c 100%);border-radius:4px;display:flex;align-items:center;justify-content:center;color:white;font-size:24px;">🎸</div><div style="flex:1;"><div style="color:#fff;font-weight:600;">Electronic Focus</div><div style="color:#999;font-size:12px;">Ambient • Concentration</div></div><div style="color:#4A90E2;font-size:24px;">▶</div></div></div></div>';
}

function createSettingsContent() {
    return '<div style="padding:30px;"><h2 style="margin-bottom:20px;">⚙️ Control Panel</h2><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:20px;"><div onclick="openControlPanel()" style="padding:20px;border:1px solid #ddd;border-radius:8px;text-align:center;cursor:pointer;" onmouseover="this.style.background=\'#f0f8ff\'" onmouseout="this.style.background=\'white\'"><div style="font-size:48px;margin-bottom:10px;">🎨</div><div style="font-weight:600;color:#333;">Appearance</div><div style="font-size:12px;color:#666;">Customize theme</div></div><div onclick="showSystemToast(\'🔔 Notifications\',\'Notifications are enabled\')" style="padding:20px;border:1px solid #ddd;border-radius:8px;text-align:center;cursor:pointer;" onmouseover="this.style.background=\'#f0f8ff\'" onmouseout="this.style.background=\'white\'"><div style="font-size:48px;margin-bottom:10px;">🔔</div><div style="font-weight:600;color:#333;">Notifications</div><div style="font-size:12px;color:#666;">Manage alerts</div></div><div onclick="showErrorDialog(\'Test Error\',\'This is a demo error dialog\')" style="padding:20px;border:1px solid #ddd;border-radius:8px;text-align:center;cursor:pointer;" onmouseover="this.style.background=\'#fff0f0\'" onmouseout="this.style.background=\'white\'"><div style="font-size:48px;margin-bottom:10px;">⚠️</div><div style="font-weight:600;color:#333;">Test Error</div><div style="font-size:12px;color:#666;">Demo dialog</div></div></div></div>';
}

function createHelpContent() {
    return '<div style="padding:30px;"><h1 style="color:#333;margin-bottom:30px;">❓ Help and Support</h1><div style="margin-bottom:25px;padding:20px;background:#f9f9f9;border-left:4px solid #4A90E2;"><h3 style="margin:0 0 10px 0;">How do I navigate?</h3><p style="margin:0;color:#666;">Double-click any desktop icon to open an application. Use the Start Menu to access all sections.</p></div><div style="margin-bottom:25px;padding:20px;background:#f9f9f9;border-left:4px solid #2ECC71;"><h3 style="margin:0 0 10px 0;">What technologies were used?</h3><p style="margin:0;color:#666;">Built entirely with HTML, CSS, and vanilla JavaScript!</p></div><div style="margin-bottom:25px;padding:20px;background:#f9f9f9;border-left:4px solid #E74C3C;"><h3 style="margin:0 0 10px 0;">How can I contact you?</h3><p style="margin:0;color:#666;">Click on the "Contact Me" icon on the desktop.</p></div></div>';
}

function createPaintContent() {
    return '<div style="padding:40px;text-align:center;"><h2 style="color:#333;margin-bottom:20px;">🎨 Design Portfolio</h2><p style="color:#666;margin-bottom:30px;">Showcasing UI/UX designs and digital artwork</p><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:20px;max-width:600px;margin:0 auto;"><div style="aspect-ratio:16/9;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;">Landing Page Design</div><div style="aspect-ratio:16/9;background:linear-gradient(135deg,#f093fb 0%,#f5576c 100%);border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;">Mobile App UI</div><div style="aspect-ratio:16/9;background:linear-gradient(135deg,#4facfe 0%,#00f2fe 100%);border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;">Dashboard Mockup</div><div style="aspect-ratio:16/9;background:linear-gradient(135deg,#43e97b 0%,#38f9d7 100%);border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;">Icon Set Design</div></div></div>';
}

function createMediaPlayerContent() {
    return '<div style="background:linear-gradient(to bottom,#1a1a1a,#000);height:100%;display:flex;flex-direction:column;"><div style="flex:1;display:flex;align-items:center;justify-content:center;padding:40px;"><div style="text-align:center;"><div style="width:120px;height:120px;margin:0 auto 30px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:60px;">🎬</div><h2 style="color:white;margin-bottom:15px;">Project Video Demos</h2><p style="color:#999;margin-bottom:40px;">Watch walkthroughs of my projects</p><div style="display:flex;flex-direction:column;gap:15px;"><div style="background:rgba(255,255,255,0.05);padding:20px;border-radius:8px;cursor:pointer;" onmouseover="this.style.background=\'rgba(255,255,255,0.1)\'" onmouseout="this.style.background=\'rgba(255,255,255,0.05)\'"><div style="color:white;font-weight:600;">E-Commerce Platform Demo</div><div style="color:#999;font-size:13px;">Full walkthrough • 5:32</div></div></div></div></div></div>';
}

function createGameContent() {
    return `<div style="background:linear-gradient(to bottom,#1a1a1a,#000);height:100%;display:flex;align-items:center;justify-content:center;padding:40px;"><div style="max-width:600px;text-align:center;"><h2 style="color:white;margin-bottom:20px;">🎮 Portfolio Facts Game</h2><p style="color:#999;margin-bottom:40px;">Click the cards to reveal interesting facts!</p><div id="game-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:15px;margin-bottom:30px;">${Array(12).fill(0).map((_, i) => `<div class="game-card" data-index="${i}" onclick="revealCard(${i})" style="aspect-ratio:1;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:32px;transition:all 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'"><span class="card-front">❓</span><span class="card-back" style="display:none;font-size:14px;padding:10px;color:white;text-align:center;"></span></div>`).join('')}</div><div style="color:#4A90E2;font-size:14px;"><span id="cards-revealed">0</span> / 12 facts revealed</div></div></div>`;
}

function createCodeEditorContent() {
    setTimeout(() => initCodeEditor(), 100);
    return `
        <div class="code-editor-container">
            <div class="code-editor-sidebar">
                <div class="sidebar-header">EXPLORER</div>
                <div class="file-tree" id="file-tree">
                    <div class="folder-item expanded" data-folder="src">
                        <div class="folder-header" onclick="toggleFolder(this)">
                            <span class="folder-arrow">▼</span>
                            <span class="folder-icon">📁</span>
                            <span class="folder-name">src</span>
                        </div>
                        <div class="folder-content">
                            <div class="file-item active" data-file="src/portfolio.js" onclick="loadCodeFile('src/portfolio.js')">
                                <span class="file-icon">📜</span> portfolio.js
                            </div>
                            <div class="file-item" data-file="src/index.html" onclick="loadCodeFile('src/index.html')">
                                <span class="file-icon">🌐</span> index.html
                            </div>
                        </div>
                    </div>
                    <div class="folder-item expanded" data-folder="styles">
                        <div class="folder-header" onclick="toggleFolder(this)">
                            <span class="folder-arrow">▼</span>
                            <span class="folder-icon">📁</span>
                            <span class="folder-name">styles</span>
                        </div>
                        <div class="folder-content">
                            <div class="file-item" data-file="styles/styles.css" onclick="loadCodeFile('styles/styles.css')">
                                <span class="file-icon">🎨</span> styles.css
                            </div>
                        </div>
                    </div>
                    <div class="file-item" data-file="README.md" onclick="loadCodeFile('README.md')">
                        <span class="file-icon">📝</span> README.md
                    </div>
                </div>
            </div>
            <div class="code-editor-main">
                <div class="code-tabs">
                    <div class="code-tab active" data-file="src/portfolio.js">
                        <span>portfolio.js</span>
                        <span class="tab-close" onclick="event.stopPropagation()">×</span>
                    </div>
                </div>
                <div class="code-editor-wrapper">
                    <div class="line-numbers" id="line-numbers"></div>
                    <textarea class="code-textarea" id="code-textarea" spellcheck="false"></textarea>
                    <pre class="code-highlight" id="code-highlight"><code id="code-display"></code></pre>
                </div>
            </div>
        </div>
    `;
}


let explorerHistory = ['computer'];
let explorerHistoryIndex = 0;

function navigateExplorer(direction) {
    if (direction === 'back' && explorerHistoryIndex > 0) {
        explorerHistoryIndex--;
        loadExplorerView(explorerHistory[explorerHistoryIndex], false);
    } else if (direction === 'forward' && explorerHistoryIndex < explorerHistory.length - 1) {
        explorerHistoryIndex++;
        loadExplorerView(explorerHistory[explorerHistoryIndex], false);
    } else if (direction === 'up') {
        const current = explorerHistory[explorerHistoryIndex];
        if (current.includes('-')) {
            loadExplorerView('computer');
        }
    }
}

function loadExplorerView(view, addToHistory = true) {
    const content = document.getElementById('explorer-content');
    const pathEl = document.getElementById('explorer-path');
    const statusItems = document.getElementById('status-items');
    const statusSpace = document.getElementById('status-space');

    if (!content) return;

    if (addToHistory) {
        explorerHistory = explorerHistory.slice(0, explorerHistoryIndex + 1);
        explorerHistory.push(view);
        explorerHistoryIndex = explorerHistory.length - 1;
    }

    const views = {
        'computer': {
            path: 'Computer',
            items: '3 items',
            space: '425 GB free',
            content: `
                <div class="explorer-section">
                    <h3 style="color: #333; margin-bottom: 15px; font-size: 14px; font-weight: 600;">Hard Disk Drives</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 15px;">
                        <div onclick="loadExplorerView('c-drive')" style="text-align: center; cursor: pointer; padding: 15px; border-radius: 5px; border: 1px solid transparent;" onmouseover="this.style.background='#e8f4ff'; this.style.borderColor='#99ccff'" onmouseout="this.style.background='transparent'; this.style.borderColor='transparent'">
                            <div style="width: 64px; height: 64px; margin: 0 auto 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">C:</div>
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Web Development</div>
                            <div style="font-size: 11px; color: #666; margin-top: 4px;">250 GB free of 500 GB</div>
                        </div>
                        <div onclick="loadExplorerView('d-drive')" style="text-align: center; cursor: pointer; padding: 15px; border-radius: 5px; border: 1px solid transparent;" onmouseover="this.style.background='#e8f4ff'; this.style.borderColor='#99ccff'" onmouseout="this.style.background='transparent'; this.style.borderColor='transparent'">
                            <div style="width: 64px; height: 64px; margin: 0 auto 10px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">D:</div>
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Design & Creative</div>
                            <div style="font-size: 11px; color: #666; margin-top: 4px;">180 GB free of 300 GB</div>
                        </div>
                        <div onclick="loadExplorerView('e-drive')" style="text-align: center; cursor: pointer; padding: 15px; border-radius: 5px; border: 1px solid transparent;" onmouseover="this.style.background='#e8f4ff'; this.style.borderColor='#99ccff'" onmouseout="this.style.background='transparent'; this.style.borderColor='transparent'">
                            <div style="width: 64px; height: 64px; margin: 0 auto 10px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">E:</div>
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Professional</div>
                            <div style="font-size: 11px; color: #666; margin-top: 4px;">95 GB free of 100 GB</div>
                        </div>
                    </div>
                </div>
            `
        },
        'c-drive': {
            path: 'Computer > C: (Web Development)',
            items: '3 folders',
            space: '250 GB free of 500 GB',
            content: `
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <div onclick="loadExplorerView('c-frontend')" style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📁</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Frontend</div>
                            <div style="font-size: 11px; color: #666;">React, Vue, CSS Frameworks</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Folder</div>
                    </div>
                    <div onclick="loadExplorerView('c-backend')" style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📁</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Backend</div>
                            <div style="font-size: 11px; color: #666;">Node.js, APIs, Databases</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Folder</div>
                    </div>
                    <div onclick="loadExplorerView('c-fullstack')" style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📁</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Fullstack_Projects</div>
                            <div style="font-size: 11px; color: #666;">Complete applications</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Folder</div>
                    </div>
                </div>
            `
        },
        'c-frontend': {
            path: 'Computer > C: > Frontend',
            items: '3 files',
            space: '250 GB free',
            content: `
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📄</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">React_Projects.js</div>
                            <div style="font-size: 11px; color: #666;">E-commerce, Dashboard, Social Media</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">JavaScript File</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📄</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Vue_Applications.vue</div>
                            <div style="font-size: 11px; color: #666;">Task Manager, Portfolio Sites</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Vue Component</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📄</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">CSS_Frameworks.css</div>
                            <div style="font-size: 11px; color: #666;">Tailwind, Bootstrap, Custom</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Stylesheet</div>
                    </div>
                </div>
            `
        },
        'c-backend': {
            path: 'Computer > C: > Backend',
            items: '3 files',
            space: '250 GB free',
            content: `
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📄</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">NodeJS_APIs.js</div>
                            <div style="font-size: 11px; color: #666;">RESTful APIs, Express, Authentication</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">JavaScript File</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📄</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Database_Schemas.sql</div>
                            <div style="font-size: 11px; color: #666;">PostgreSQL, MongoDB, MySQL</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">SQL File</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📄</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">API_Documentation.md</div>
                            <div style="font-size: 11px; color: #666;">Swagger, OpenAPI specs</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Markdown File</div>
                    </div>
                </div>
            `
        },
        'c-fullstack': {
            path: 'Computer > C: > Fullstack_Projects',
            items: '2 files',
            space: '250 GB free',
            content: `
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">🌐</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">ECommerce_Platform.html</div>
                            <div style="font-size: 11px; color: #666;">Full shopping cart with payment integration</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Web Application</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">⚙️</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Portfolio_OS.exe</div>
                            <div style="font-size: 11px; color: #666;">This Windows 7 portfolio system!</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Application</div>
                    </div>
                </div>
            `
        },
        'd-drive': {
            path: 'Computer > D: (Design & Creative)',
            items: '3 folders',
            space: '180 GB free of 300 GB',
            content: `
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📁</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">UI_UX_Design</div>
                            <div style="font-size: 11px; color: #666;">Figma, Adobe XD, Wireframes</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Folder</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📁</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Graphic_Design</div>
                            <div style="font-size: 11px; color: #666;">Logos, Branding, Illustrations</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Folder</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📁</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Digital_Art</div>
                            <div style="font-size: 11px; color: #666;">Mockups, Prototypes, Assets</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Folder</div>
                    </div>
                </div>
            `
        },
        'e-drive': {
            path: 'Computer > E: (Professional)',
            items: '3 files',
            space: '95 GB free of 100 GB',
            content: `
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📄</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Resume_2024.pdf</div>
                            <div style="font-size: 11px; color: #666;">Updated professional resume</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">PDF Document</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📁</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Cover_Letters</div>
                            <div style="font-size: 11px; color: #666;">Customized cover letters</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Folder</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 3px;" onmouseover="this.style.background='#e8f4ff'" onmouseout="this.style.background='white'">
                        <span style="font-size: 32px;">📁</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: #333; font-size: 13px;">Certifications</div>
                            <div style="font-size: 11px; color: #666;">Professional certificates</div>
                        </div>
                        <div style="font-size: 11px; color: #666;">Folder</div>
                    </div>
                </div>
            `
        }
    };

    const viewData = views[view] || views['computer'];

    if (pathEl) pathEl.textContent = viewData.path;
    if (statusItems) statusItems.textContent = viewData.items;
    if (statusSpace) statusSpace.textContent = viewData.space;
    content.innerHTML = viewData.content;
}

window.navigateExplorer = navigateExplorer;
window.loadExplorerView = loadExplorerView;


const codeFiles = {
    'src/portfolio.js': `// Portfolio Interactive Features
class Portfolio {
    constructor() {
        this.projects = [];
        this.skills = ['JavaScript', 'React', 'Node.js', 'CSS'];
        this.init();
    }
    
    init() {
        console.log('Portfolio initialized!');
        this.loadProjects();
        this.setupEventListeners();
    }
    
    loadProjects() {
        this.projects = [
            { name: 'E-Commerce Platform', tech: 'React, Node.js' },
            { name: 'Social Media App', tech: 'Vue.js, Firebase' },
            { name: 'Portfolio Website', tech: 'HTML, CSS, JS' }
        ];
    }
    
    setupEventListeners() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => this.showProject(card.dataset.id));
        });
    }
    
    showProject(id) {
        const project = this.projects.find(p => p.id === id);
        if (project) {
            console.log('Showing project:', project.name);
        }
    }
}

// Initialize portfolio
const portfolio = new Portfolio();`,

    'styles/styles.css': `/* Portfolio Styles */
:root {
    --primary-color: #4A90E2;
    --secondary-color: #667eea;
    --text-color: #333;
    --bg-color: #f5f5f5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.project-card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}`,

    'src/index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Welcome to My Portfolio</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        
        <main>
            <section id="about">
                <h2>About Me</h2>
                <p>I'm a passionate web developer with expertise in modern technologies.</p>
            </section>
            
            <section id="projects">
                <h2>My Projects</h2>
                <div class="project-grid">
                    <!-- Projects will be loaded here -->
                </div>
            </section>
        </main>
    </div>
    
    <script src="portfolio.js"></script>
</body>
</html>`,

    'README.md': `# My Portfolio Website

A modern, interactive portfolio showcasing my web development projects and skills.

## Features

- 🎨 Modern UI/UX design
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎯 SEO friendly

## Technologies Used

- HTML5
- CSS3 (with CSS Grid & Flexbox)
- JavaScript (ES6+)
- React.js
- Node.js

## Getting Started

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Install dependencies
npm install

# Run development server
npm start
\`\`\`

## Contact

Feel free to reach out for collaborations or opportunities!

- Email: your.email@example.com
- LinkedIn: linkedin.com/in/yourprofile
- GitHub: github.com/yourusername

---

Made with ❤️ by [Your Name]`
};

let currentFile = 'src/portfolio.js';

function initCodeEditor() {
    const textarea = document.getElementById('code-textarea');
    const highlight = document.getElementById('code-highlight');
    const highlightCode = document.getElementById('code-display');
    const lineNumbers = document.getElementById('line-numbers');

    if (!textarea || !highlight || !lineNumbers) return;

    loadCodeFile('src/portfolio.js');

    textarea.addEventListener('scroll', () => {
        if (highlight) {
            highlight.scrollTop = textarea.scrollTop;
            highlight.scrollLeft = textarea.scrollLeft;
        }
        if (lineNumbers) {
            lineNumbers.scrollTop = textarea.scrollTop;
        }
    });

    textarea.addEventListener('input', () => {
        updateCodeHighlight();
        updateLineNumbers();
    });

    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 4;
            updateCodeHighlight();
        }
    });
}

function loadCodeFile(filename) {
    currentFile = filename;
    const textarea = document.getElementById('code-textarea');
    const tab = document.querySelector('.code-tab');

    if (textarea && codeFiles[filename]) {
        textarea.value = codeFiles[filename];
        updateCodeHighlight();
        updateLineNumbers();
    }

    if (tab) {
        tab.querySelector('span').textContent = filename;
        tab.dataset.file = filename;
    }

    document.querySelectorAll('.file-item').forEach(item => {
        item.classList.toggle('active', item.dataset.file === filename);
    });
}

function updateCodeHighlight() {
    const textarea = document.getElementById('code-textarea');
    const display = document.getElementById('code-display');
    const highlight = document.getElementById('code-highlight');

    if (!textarea || !display) return;

    const code = textarea.value;
    const highlighted = syntaxHighlight(code, currentFile);
    
    const lines = highlighted.split('\n');
    const wrappedLines = lines.map(line => `<span class="code-line">${line || ' '}</span>`).join('\n');
    display.innerHTML = wrappedLines;
}

function updateLineNumbers() {
    const textarea = document.getElementById('code-textarea');
    const lineNumbers = document.getElementById('line-numbers');

    if (!textarea || !lineNumbers) return;

    const lines = textarea.value.split('\n').length;
    lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('\n');
}

function syntaxHighlight(code, filename) {
    let highlighted = code;

    highlighted = highlighted.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    if (filename.endsWith('.js')) {
        highlighted = highlighted
            .replace(/\b(const|let|var|function|class|if|else|for|while|return|new|this|import|export|from|async|await)\b/g, '<span class="keyword">$1</span>')
            .replace(/\b(true|false|null|undefined)\b/g, '<span class="boolean">$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
            .replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>')
            .replace(/('([^'\\]|\\.)*'|"([^"\\]|\\.)*")/g, '<span class="string">$1</span>')
            .replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="class-name">$1</span>');
    } else if (filename.endsWith('.css')) {
        highlighted = highlighted
            .replace(/([.#]?[\w-]+)\s*\{/g, '<span class="selector">$1</span> {')
            .replace(/([\w-]+):/g, '<span class="property">$1</span>:')
            .replace(/:\s*([^;]+);/g, ': <span class="value">$1</span>;')
            .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');
    } else if (filename.endsWith('.html')) {
        highlighted = highlighted
            .replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="tag">$2</span>')
            .replace(/([\w-]+)=/g, '<span class="attribute">$1</span>=')
            .replace(/=("([^"]*)")/g, '=<span class="string">$1</span>')
            .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="comment">$1</span>');
    } else if (filename.endsWith('.md')) {
        highlighted = highlighted
            .replace(/^(#{1,6})\s+(.*)$/gm, '<span class="keyword">$1</span> <span class="class-name">$2</span>')
            .replace(/\*\*([^*]+)\*\*/g, '<span class="keyword">**</span><span class="class-name">$1</span><span class="keyword">**</span>')
            .replace(/`([^`]+)`/g, '<span class="string">`$1`</span>')
            .replace(/^-\s+/gm, '<span class="keyword">- </span>');
    }

    return highlighted;
}


function initMenuBar(windowEl, appName) {
    const menuItems = windowEl.querySelectorAll('.menu-item');
    let activeMenu = null;

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            e.stopPropagation();
            const menuName = menuItem.textContent.trim();
            console.log('Menu clicked:', menuName);

            if (activeMenu === menuItem) {
                closeAllMenus();
                return;
            }

            closeAllMenus();
            showMenu(menuItem, menuName, appName, windowEl);
            activeMenu = menuItem;
        });
        
        menuItem.style.cursor = 'pointer';
        menuItem.title = `Click to open ${menuItem.textContent.trim()} menu`;
    });

    document.addEventListener('click', closeAllMenus);
    windowEl.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-item') && !e.target.closest('.dropdown-menu')) {
            closeAllMenus();
        }
    });

    function closeAllMenus() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.remove());
        menuItems.forEach(item => item.classList.remove('active'));
        activeMenu = null;
    }
}

function showMenu(menuItem, menuName, appName, windowEl) {
    const rect = menuItem.getBoundingClientRect();
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown-menu';
    dropdown.style.position = 'fixed';
    dropdown.style.top = rect.bottom + 'px';
    dropdown.style.left = rect.left + 'px';

    const menus = getMenuItems(menuName, appName, windowEl);
    dropdown.innerHTML = menus.map(item => {
        if (item.separator) {
            return '<div class="menu-separator"></div>';
        }
        return `<div class="menu-dropdown-item" ${item.disabled ? 'disabled' : ''}>
            <span>${item.label}</span>
            ${item.shortcut ? `<span class="menu-shortcut">${item.shortcut}</span>` : ''}
        </div>`;
    }).join('');

    document.body.appendChild(dropdown);
    menuItem.classList.add('active');

    dropdown.querySelectorAll('.menu-dropdown-item:not([disabled])').forEach((item, index) => {
        const menuData = menus.filter(m => !m.separator)[index];
        if (menuData && menuData.action) {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                menuData.action();
                dropdown.remove();
                menuItem.classList.remove('active');
            });
        }
    });
}

function getMenuItems(menuName, appName, windowEl) {
    const menus = {
        'File': [
            { label: 'New File', shortcut: 'Ctrl+N', action: () => createNewFile(appName) },
            { label: 'Open File...', shortcut: 'Ctrl+O', action: () => openFileFromOS(appName) },
            { label: 'Open Folder...', shortcut: 'Ctrl+Shift+O', action: () => openFolderFromOS(appName) },
            { separator: true },
            { label: 'Save', shortcut: 'Ctrl+S', action: () => saveCurrentFile(appName) },
            { label: 'Save As...', shortcut: 'Ctrl+Shift+S', action: () => showSystemToast('💾 Info', 'Save as dialog') },
            { separator: true },
            { label: 'Close', shortcut: 'Ctrl+W', action: () => closeWindow(windowEl, appName) },
            { label: 'Exit', shortcut: 'Alt+F4', action: () => closeWindow(windowEl, appName) }
        ],
        'Edit': [
            { label: 'Undo', shortcut: 'Ctrl+Z', action: () => execCommand('undo', appName) },
            { label: 'Redo', shortcut: 'Ctrl+Y', action: () => execCommand('redo', appName) },
            { separator: true },
            { label: 'Cut', shortcut: 'Ctrl+X', action: () => execCommand('cut', appName) },
            { label: 'Copy', shortcut: 'Ctrl+C', action: () => execCommand('copy', appName) },
            { label: 'Paste', shortcut: 'Ctrl+V', action: () => execCommand('paste', appName) },
            { separator: true },
            { label: 'Select All', shortcut: 'Ctrl+A', action: () => execCommand('selectAll', appName) },
            { label: 'Find', shortcut: 'Ctrl+F', action: () => showSystemToast('🔍 Info', 'Find dialog opened') }
        ],
        'View': [
            { label: 'Zoom In', shortcut: 'Ctrl++', action: () => adjustZoom(appName, 1) },
            { label: 'Zoom Out', shortcut: 'Ctrl+-', action: () => adjustZoom(appName, -1) },
            { label: 'Reset Zoom', shortcut: 'Ctrl+0', action: () => adjustZoom(appName, 0) },
            { separator: true },
            { label: 'Toggle Sidebar', shortcut: 'Ctrl+B', action: () => toggleSidebar(appName) },
            { label: 'Toggle Status Bar', action: () => toggleStatusBar(windowEl) },
            { separator: true },
            { label: 'Full Screen', shortcut: 'F11', action: () => toggleMaximize(windowEl) }
        ],
        'Help': [
            { label: 'Welcome', action: () => showSystemToast('👋 Welcome', 'Welcome to the Code Editor!') },
            { label: 'Documentation', action: () => showSystemToast('📚 Info', 'Opening documentation...') },
            { label: 'Keyboard Shortcuts', shortcut: 'Ctrl+K Ctrl+S', action: () => showKeyboardShortcuts() },
            { separator: true },
            { label: 'About', action: () => showAboutDialog(appName) }
        ]
    };

    return menus[menuName] || [];
}

function createNewFile(appName) {
    console.log('Create New File called for:', appName);
    if (appName === 'codeeditor') {
        const filename = prompt('Enter filename:', 'untitled.js');
        if (filename) {
            codeFiles[filename] = '// New file\n';
            loadCodeFile(filename);
            showSystemToast('✅ Success', `Created ${filename}`);
        }
    } else {
        showSystemToast('📄 Info', 'New file created');
    }
}

function openFileFromOS(appName) {
    console.log('Open File from OS called for:', appName);
    
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.js,.css,.html,.md,.txt,.json,.xml,.py,.java,.cpp,.c,.h,.php,.rb,.go,.rs,.ts,.jsx,.tsx,.vue,.scss,.sass,.less';
    fileInput.style.display = 'none';
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target.result;
                const filename = file.name;
                
                if (appName === 'codeeditor') {
                    codeFiles[filename] = content;
                    loadCodeFile(filename);
                    
                    const fileTree = document.querySelector('.file-tree');
                    if (fileTree && !document.querySelector(`[data-file="${filename}"]`)) {
                        const fileItem = document.createElement('div');
                        fileItem.className = 'file-item';
                        fileItem.dataset.file = filename;
                        fileItem.onclick = () => loadCodeFile(filename);
                        fileItem.innerHTML = `<span class="file-icon">📄</span> ${filename}`;
                        fileTree.appendChild(fileItem);
                    }
                    
                    showSystemToast('✅ Opened', `${filename} loaded successfully`);
                } else {
                    showSystemToast('📂 Opened', `${filename} loaded`);
                }
            };
            reader.readAsText(file);
        }
        document.body.removeChild(fileInput);
    });
    
    document.body.appendChild(fileInput);
    fileInput.click();
}

function openFolderFromOS(appName) {
    console.log('Open Folder from OS called for:', appName);
    
    const folderInput = document.createElement('input');
    folderInput.type = 'file';
    folderInput.webkitdirectory = true;
    folderInput.directory = true;
    folderInput.multiple = true;
    folderInput.style.display = 'none';
    
    folderInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        
        if (files.length > 0) {
            const folderName = files[0].webkitRelativePath.split('/')[0];
            showSystemToast('📁 Opening', `Loading ${files.length} files from ${folderName}...`);
            
            if (appName === 'codeeditor') {
                const fileTree = document.querySelector('.file-tree');
                
                if (!fileTree) {
                    console.error('File tree not found!');
                    showSystemToast('❌ Error', 'Code editor not ready');
                    return;
                }
                
                const validExtensions = ['.js', '.css', '.html', '.md', '.txt', '.json', '.xml', '.py', '.java', '.cpp', '.c', '.h', '.php', '.rb', '.go', '.rs', '.ts', '.jsx', '.tsx', '.vue', '.scss', '.sass', '.less'];
                const validFiles = files.filter(file => {
                    const hasValidExt = validExtensions.some(ext => file.name.endsWith(ext));
                    return hasValidExt && file.size < 1000000; // Max 1MB per file
                });
                
                console.log(`Found ${validFiles.length} valid files out of ${files.length} total files`);
                
                if (validFiles.length === 0) {
                    showSystemToast('⚠️ Warning', 'No supported code files found in folder');
                    return;
                }
                
                const fileData = [];
                let loadedCount = 0;
                
                validFiles.forEach(file => {
                    const reader = new FileReader();
                    reader.onerror = (error) => {
                        console.error('Error reading file:', file.name, error);
                        loadedCount++;
                    };
                    reader.onload = (event) => {
                        const content = event.target.result;
                        const relativePath = file.webkitRelativePath;
                        
                        console.log('Loaded file:', relativePath);
                        
                        codeFiles[relativePath] = content;
                        
                        fileData.push({
                            path: relativePath,
                            content: content
                        });
                        
                        loadedCount++;
                        
                        if (loadedCount === validFiles.length) {
                            console.log('All files loaded, building tree...');
                            console.log('File data:', fileData);
                            
                            const tree = buildFolderTree(fileData);
                            console.log('Tree structure:', tree);
                            
                            const treeHTML = renderFolderTree(tree);
                            console.log('Tree HTML length:', treeHTML.length);
                            
                            fileTree.innerHTML = treeHTML;
                            console.log('Tree rendered to DOM');
                            
                            if (fileData.length > 0) {
                                setTimeout(() => {
                                    loadCodeFile(fileData[0].path);
                                }, 100);
                            }
                            
                            showSystemToast('✅ Success', `Loaded ${fileData.length} files from ${folderName}`);
                        }
                    };
                    reader.readAsText(file);
                });
            } else {
                openApplication('documents');
                showSystemToast('📁 Opened', `${folderName} folder`);
            }
        }
        document.body.removeChild(folderInput);
    });
    
    document.body.appendChild(folderInput);
    folderInput.click();
}

function saveCurrentFile(appName) {
    console.log('Save File called for:', appName);
    if (appName === 'codeeditor') {
        const textarea = document.getElementById('code-textarea');
        if (textarea) {
            codeFiles[currentFile] = textarea.value;
            showSystemToast('💾 Saved', `${currentFile} saved successfully`);
        }
    } else {
        showSystemToast('💾 Info', 'File saved');
    }
}

function execCommand(command, appName) {
    if (appName === 'codeeditor') {
        const textarea = document.getElementById('code-textarea');
        if (textarea) {
            if (command === 'selectAll') {
                textarea.select();
            } else if (command === 'copy') {
                document.execCommand('copy');
                showSystemToast('📋 Copied', 'Text copied to clipboard');
            } else if (command === 'cut') {
                document.execCommand('cut');
                showSystemToast('✂️ Cut', 'Text cut to clipboard');
            } else if (command === 'paste') {
                document.execCommand('paste');
            }
        }
    } else if (appName === 'aboutme') {
        const textarea = document.querySelector('.notepad-content');
        if (textarea) {
            if (command === 'selectAll') textarea.select();
            else document.execCommand(command);
        }
    }
}

function adjustZoom(appName, direction) {
    if (appName === 'codeeditor') {
        const editor = document.querySelector('.code-editor-wrapper');
        if (editor) {
            const currentSize = parseInt(getComputedStyle(editor).fontSize) || 13;
            let newSize = currentSize;

            if (direction === 1) newSize += 2;
            else if (direction === -1) newSize -= 2;
            else newSize = 13;

            newSize = Math.max(8, Math.min(24, newSize));
            editor.style.fontSize = newSize + 'px';
            document.querySelector('.line-numbers').style.fontSize = newSize + 'px';
            showSystemToast('🔍 Zoom', `Font size: ${newSize}px`);
        }
    }
}

function toggleSidebar(appName) {
    if (appName === 'codeeditor') {
        const sidebar = document.querySelector('.code-editor-sidebar');
        if (sidebar) {
            sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
        }
    }
}

function toggleStatusBar(windowEl) {
    const statusBar = windowEl.querySelector('.window-statusbar');
    if (statusBar) {
        statusBar.style.display = statusBar.style.display === 'none' ? 'flex' : 'none';
    }
}

function showKeyboardShortcuts() {
    const shortcuts = `
        <div style="padding: 20px; max-height: 400px; overflow-y: auto;">
            <h3 style="margin-bottom: 15px; color: #333;">Keyboard Shortcuts</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
                <div><strong>Ctrl+N</strong></div><div>New File</div>
                <div><strong>Ctrl+S</strong></div><div>Save</div>
                <div><strong>Ctrl+W</strong></div><div>Close</div>
                <div><strong>Ctrl+Z</strong></div><div>Undo</div>
                <div><strong>Ctrl+Y</strong></div><div>Redo</div>
                <div><strong>Ctrl+C</strong></div><div>Copy</div>
                <div><strong>Ctrl+V</strong></div><div>Paste</div>
                <div><strong>Ctrl+A</strong></div><div>Select All</div>
                <div><strong>Ctrl+F</strong></div><div>Find</div>
                <div><strong>Ctrl+B</strong></div><div>Toggle Sidebar</div>
                <div><strong>F11</strong></div><div>Full Screen</div>
                <div><strong>Tab</strong></div><div>Indent</div>
            </div>
        </div>
    `;

    showCustomDialog('Keyboard Shortcuts', shortcuts);
}

function showAboutDialog(appName) {
    const about = `
        <div style="padding: 30px; text-align: center;">
            <div style="font-size: 48px; margin-bottom: 15px;">💻</div>
            <h2 style="margin-bottom: 10px; color: #333;">Code Editor</h2>
            <p style="color: #666; margin-bottom: 20px;">Version 1.0.0</p>
            <p style="color: #666; font-size: 13px;">A lightweight code editor with syntax highlighting</p>
            <p style="color: #999; font-size: 12px; margin-top: 20px;">Built with ❤️ for Windows 7 Portfolio</p>
        </div>
    `;

    showCustomDialog('About Code Editor', about);
}

function showCustomDialog(title, content) {
    const dialog = document.createElement('div');
    dialog.className = 'custom-dialog';
    dialog.innerHTML = `
        <div class="dialog-overlay"></div>
        <div class="dialog-box">
            <div class="dialog-titlebar">
                <span>${title}</span>
                <button class="dialog-close" onclick="this.closest('.custom-dialog').remove()">×</button>
            </div>
            <div class="dialog-content">${content}</div>
            <div class="dialog-footer">
                <button class="dialog-button" onclick="this.closest('.custom-dialog').remove()">OK</button>
            </div>
        </div>
    `;

    document.body.appendChild(dialog);
}


document.addEventListener('keydown', (e) => {
    const activeWindow = document.querySelector('.window:not(.minimized)');
    if (!activeWindow) return;
    
    const appName = Object.keys(openWindows).find(key => openWindows[key] === activeWindow);
    if (!appName) return;

    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveCurrentFile(appName);
    }
    
    if (e.ctrlKey && !e.shiftKey && e.key === 'n') {
        e.preventDefault();
        createNewFile(appName);
    }
    
    if (e.ctrlKey && !e.shiftKey && e.key === 'o') {
        e.preventDefault();
        openFileFromOS(appName);
    }
    
    if (e.ctrlKey && e.shiftKey && e.key === 'O') {
        e.preventDefault();
        openFolderFromOS(appName);
    }
    
    if (e.ctrlKey && e.key === 'w') {
        e.preventDefault();
        closeWindow(activeWindow, appName);
    }
    
    if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        toggleSidebar(appName);
    }
    
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        showSystemToast('🔍 Find', 'Find functionality activated');
    }
    
    if (e.ctrlKey && (e.key === '+' || e.key === '=')) {
        e.preventDefault();
        adjustZoom(appName, 1);
    }
    
    if (e.ctrlKey && e.key === '-') {
        e.preventDefault();
        adjustZoom(appName, -1);
    }
    
    if (e.ctrlKey && e.key === '0') {
        e.preventDefault();
        adjustZoom(appName, 0);
    }
});


function toggleFolder(folderHeader) {
    const folderItem = folderHeader.parentElement;
    const arrow = folderHeader.querySelector('.folder-arrow');
    const content = folderItem.querySelector('.folder-content');
    
    if (folderItem.classList.contains('expanded')) {
        folderItem.classList.remove('expanded');
        arrow.textContent = '▶';
        content.style.display = 'none';
    } else {
        folderItem.classList.add('expanded');
        arrow.textContent = '▼';
        content.style.display = 'block';
    }
}

function buildFolderTree(files) {
    const tree = {};
    
    files.forEach(file => {
        const parts = file.path.split('/');
        let current = tree;
        
        parts.forEach((part, index) => {
            if (index === parts.length - 1) {
                if (!current._files) current._files = [];
                current._files.push({
                    name: part,
                    path: file.path,
                    content: file.content
                });
            } else {
                if (!current[part]) {
                    current[part] = {};
                }
                current = current[part];
            }
        });
    });
    
    return tree;
}

function renderFolderTree(tree, parentPath = '') {
    let html = '';
    
    Object.keys(tree).forEach(key => {
        if (key === '_files') return;
        
        const folderPath = parentPath ? `${parentPath}/${key}` : key;
        html += `
            <div class="folder-item expanded" data-folder="${folderPath}">
                <div class="folder-header" onclick="toggleFolder(this)">
                    <span class="folder-arrow">▼</span>
                    <span class="folder-icon">📁</span>
                    <span class="folder-name">${key}</span>
                </div>
                <div class="folder-content">
                    ${renderFolderTree(tree[key], folderPath)}
                </div>
            </div>
        `;
    });
    
    if (tree._files) {
        tree._files.forEach(file => {
            const icon = getFileIcon(file.name);
            html += `
                <div class="file-item" data-file="${file.path}" onclick="loadCodeFile('${file.path}')">
                    <span class="file-icon">${icon}</span> ${file.name}
                </div>
            `;
        });
    }
    
    return html;
}

function getFileIcon(filename) {
    if (filename.endsWith('.js') || filename.endsWith('.ts')) return '📜';
    if (filename.endsWith('.jsx') || filename.endsWith('.tsx')) return '⚛️';
    if (filename.endsWith('.css') || filename.endsWith('.scss') || filename.endsWith('.sass')) return '🎨';
    if (filename.endsWith('.html')) return '🌐';
    if (filename.endsWith('.json')) return '📋';
    if (filename.endsWith('.md')) return '📝';
    if (filename.endsWith('.py')) return '🐍';
    if (filename.endsWith('.java')) return '☕';
    if (filename.endsWith('.cpp') || filename.endsWith('.c') || filename.endsWith('.h')) return '⚙️';
    if (filename.endsWith('.xml')) return '📰';
    if (filename.endsWith('.txt')) return '📄';
    return '📄';
}
