// Enhanced Context Menu System
let contextMenuTarget = null;
let submenuTimeout = null;

function initContextMenu() {
    // Desktop right-click
    document.getElementById('desktop').addEventListener('contextmenu', (e) => {
        e.preventDefault();
        contextMenuTarget = null;
        showContextMenu(e.clientX, e.clientY, 'desktop');
    });
    
    // Desktop icons right-click
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        icon.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            contextMenuTarget = icon;
            showContextMenu(e.clientX, e.clientY, 'icon');
        });
    });
    
    // Taskbar right-click
    const taskbar = document.getElementById('taskbar');
    if (taskbar) {
        taskbar.addEventListener('contextmenu', (e) => {
            if (e.target.closest('.taskbar-app')) return;
            e.preventDefault();
            showContextMenu(e.clientX, e.clientY, 'taskbar');
        });
    }
    
    // Hide on click outside
    document.addEventListener('click', hideAllContextMenus);
    document.addEventListener('contextmenu', () => hideSubmenu());
}

function showContextMenu(x, y, type) {
    hideAllContextMenus();
    
    const contextMenu = document.getElementById('context-menu');
    let menuHTML = '';
    
    if (type === 'desktop') {
        menuHTML = getDesktopMenu();
    } else if (type === 'icon') {
        menuHTML = getIconMenu();
    } else if (type === 'taskbar') {
        menuHTML = getTaskbarMenu();
    }
    
    contextMenu.innerHTML = menuHTML;
    attachMenuListeners(contextMenu);
    
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.classList.remove('hidden');
    
    adjustMenuPosition(contextMenu, x, y);
}

function getDesktopMenu() {
    return `
        <div class="context-menu-item" data-action="view" onmouseenter="showSubmenu(event, 'view')">
            <span class="menu-icon">${WindowsIcons.view}</span><span>View</span><span class="menu-arrow">▶</span>
        </div>
        <div class="context-menu-item" data-action="sort" onmouseenter="showSubmenu(event, 'sort')">
            <span class="menu-icon">${WindowsIcons.sort}</span><span>Sort by</span><span class="menu-arrow">▶</span>
        </div>
        <div class="context-menu-item" data-action="refresh">
            <span class="menu-icon">${WindowsIcons.refresh}</span><span>Refresh</span>
        </div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item disabled">
            <span class="menu-icon">${WindowsIcons.paste}</span><span>Paste</span>
        </div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" data-action="new" onmouseenter="showSubmenu(event, 'new')">
            <span class="menu-icon">${WindowsIcons.newItem}</span><span>New</span><span class="menu-arrow">▶</span>
        </div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" data-action="personalize">
            <span class="menu-icon">${WindowsIcons.personalize}</span><span>Personalize</span>
        </div>
    `;
}

function getIconMenu() {
    const appName = contextMenuTarget ? contextMenuTarget.querySelector('span').textContent : 'Item';
    return `
        <div class="context-menu-item bold" data-action="open">
            <span class="menu-icon">${WindowsIcons.open}</span><span>Open</span>
        </div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" data-action="sendto" onmouseenter="showSubmenu(event, 'sendto')">
            <span class="menu-icon">${WindowsIcons.sendTo}</span><span>Send to</span><span class="menu-arrow">▶</span>
        </div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" data-action="cut">
            <span class="menu-icon">${WindowsIcons.cut}</span><span>Cut</span>
        </div>
        <div class="context-menu-item" data-action="copy">
            <span class="menu-icon">${WindowsIcons.copy}</span><span>Copy</span>
        </div>
        <div class="context-menu-item" data-action="shortcut">
            <span class="menu-icon">${WindowsIcons.shortcut}</span><span>Create shortcut</span>
        </div>
        <div class="context-menu-item" data-action="delete">
            <span class="menu-icon">${WindowsIcons.delete}</span><span>Delete</span>
        </div>
        <div class="context-menu-item" data-action="rename">
            <span class="menu-icon">${WindowsIcons.rename}</span><span>Rename</span>
        </div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" data-action="properties">
            <span class="menu-icon">${WindowsIcons.properties}</span><span>Properties</span>
        </div>
    `;
}

function getTaskbarMenu() {
    return `
        <div class="context-menu-item" data-action="cascade">
            <span class="menu-icon">${WindowsIcons.cascade}</span><span>Cascade windows</span>
        </div>
        <div class="context-menu-item" data-action="showdesktop">
            <span class="menu-icon">${WindowsIcons.desktop}</span><span>Show the desktop</span>
        </div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" data-action="taskmanager">
            <span class="menu-icon">${WindowsIcons.taskManager}</span><span>Task Manager</span>
        </div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" data-action="taskbarprops">
            <span class="menu-icon">${WindowsIcons.settings}</span><span>Properties</span>
        </div>
    `;
}

function showSubmenu(event, type) {
    clearTimeout(submenuTimeout);
    
    submenuTimeout = setTimeout(() => {
        const submenu = document.getElementById('context-submenu');
        const parentItem = event.currentTarget;
        const rect = parentItem.getBoundingClientRect();
        
        const submenus = {
            'view': `
                <div class="context-menu-item" data-action="largeicons"><span class="menu-icon">${WindowsIcons.view}</span><span>Large Icons</span></div>
                <div class="context-menu-item" data-action="autoarrange"><span class="menu-icon">${WindowsIcons.sort}</span><span>Auto arrange</span></div>
            `,
            'sort': `
                <div class="context-menu-item" data-action="sortname"><span class="menu-icon">${WindowsIcons.sort}</span><span>Name</span></div>
                <div class="context-menu-item" data-action="sorttype"><span class="menu-icon">${WindowsIcons.document}</span><span>Type</span></div>
            `,
            'new': `
                <div class="context-menu-item" data-action="newfolder"><span class="menu-icon">${WindowsIcons.folder}</span><span>Folder</span></div>
                <div class="context-menu-item" data-action="newtext"><span class="menu-icon">${WindowsIcons.document}</span><span>Text Document</span></div>
            `,
            'sendto': `
                <div class="context-menu-item" data-action="senddesktop"><span class="menu-icon">${WindowsIcons.desktop}</span><span>Desktop</span></div>
                <div class="context-menu-item" data-action="senddocuments"><span class="menu-icon">${WindowsIcons.folder}</span><span>Documents</span></div>
            `
        };
        
        submenu.innerHTML = submenus[type] || '';
        attachMenuListeners(submenu);
        
        submenu.style.left = (rect.right - 5) + 'px';
        submenu.style.top = rect.top + 'px';
        submenu.classList.remove('hidden');
        
        adjustMenuPosition(submenu, rect.right - 5, rect.top);
    }, 200);
}

function attachMenuListeners(menu) {
    menu.querySelectorAll('.context-menu-item[data-action]').forEach(item => {
        if (!item.classList.contains('disabled') && !item.querySelector('.menu-arrow')) {
            item.addEventListener('click', () => {
                const action = item.getAttribute('data-action');
                handleContextAction(action);
                hideAllContextMenus();
            });
        }
    });
}

function adjustMenuPosition(menu, x, y) {
    setTimeout(() => {
        const rect = menu.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            menu.style.left = (x - rect.width) + 'px';
        }
        if (rect.bottom > window.innerHeight) {
            menu.style.top = (y - rect.height) + 'px';
        }
    }, 0);
}

function hideSubmenu() {
    clearTimeout(submenuTimeout);
    const submenu = document.getElementById('context-submenu');
    if (submenu) submenu.classList.add('hidden');
}

function hideAllContextMenus() {
    document.getElementById('context-menu').classList.add('hidden');
    hideSubmenu();
}

function handleContextAction(action) {
    const actions = {
        'refresh': () => showSystemToast('🔄 Refresh', 'Desktop refreshed'),
        'personalize': () => openControlPanel(),
        'open': () => {
            if (contextMenuTarget) {
                const app = contextMenuTarget.getAttribute('data-app');
                openApplication(app);
            }
        },
        'cut': () => showSystemToast('✂️ Cut', 'Item cut'),
        'copy': () => showSystemToast('📋 Copy', 'Item copied'),
        'delete': () => showSystemToast('🗑️ Delete', 'Moved to Recycle Bin'),
        'rename': () => showSystemToast('✍️ Rename', 'Enter new name...'),
        'properties': () => {
            if (contextMenuTarget) {
                showSystemToast('ℹ️ Properties', contextMenuTarget.querySelector('span').textContent);
            }
        },
        'showdesktop': () => {
            Object.values(openWindows).forEach(w => w.classList.add('minimized'));
            showSystemToast('🖥️ Desktop', 'All windows minimized');
        },
        'taskmanager': () => showSystemToast('📊 Task Manager', 'Opening...'),
        'newfolder': () => showSystemToast('📁 New Folder', 'Folder created'),
        'sortname': () => showSystemToast('🔤 Sort', 'Sorted by name'),
    };
    
    if (actions[action]) actions[action]();
}

// Make functions globally accessible
window.showSubmenu = showSubmenu;
window.hideAllContextMenus = hideAllContextMenus;
