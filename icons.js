// Windows 7 Style SVG Icons
const WindowsIcons = {
    // Desktop Icons
    computer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="8" y="10" width="32" height="24" fill="#4A90E2" rx="2"/><rect x="10" y="12" width="28" height="20" fill="#87CEEB"/><rect x="18" y="34" width="12" height="2" fill="#666"/><rect x="14" y="36" width="20" height="3" fill="#888" rx="1"/></svg>`,
    
    folder: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M6 12h16l4 4h16v24H6z" fill="#FDB813"/><path d="M6 16h36v20H6z" fill="#FDCB3D"/><path d="M6 12h16l4 4H6z" fill="#E5A505"/></svg>`,
    
    document: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M10 4h20l8 8v32H10z" fill="#fff"/><path d="M30 4v8h8z" fill="#E0E0E0"/><path d="M10 4h20l8 8v32H10z" fill="none" stroke="#999" stroke-width="1"/><line x1="16" y1="20" x2="32" y2="20" stroke="#666" stroke-width="1.5"/><line x1="16" y1="26" x2="32" y2="26" stroke="#666" stroke-width="1.5"/><line x1="16" y1="32" x2="28" y2="32" stroke="#666" stroke-width="1.5"/></svg>`,
    
    recycleBin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M12 16h24v26H12z" fill="#7C7C7C"/><path d="M10 12h28v4H10z" fill="#999"/><rect x="20" y="8" width="8" height="4" fill="#999"/><line x1="18" y1="20" x2="18" y2="38" stroke="#fff" stroke-width="2"/><line x1="24" y1="20" x2="24" y2="38" stroke="#fff" stroke-width="2"/><line x1="30" y1="20" x2="30" y2="38" stroke="#fff" stroke-width="2"/></svg>`,
    
    // Application Icons
    notepad: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="8" y="6" width="32" height="36" fill="#fff" stroke="#999" stroke-width="1"/><rect x="8" y="6" width="32" height="6" fill="#4A90E2"/><line x1="14" y1="18" x2="34" y2="18" stroke="#333" stroke-width="1"/><line x1="14" y1="24" x2="34" y2="24" stroke="#333" stroke-width="1"/><line x1="14" y1="30" x2="28" y2="30" stroke="#333" stroke-width="1"/></svg>`,
    
    browser: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#4A90E2"/><path d="M24 4 A20 20 0 0 1 24 44" fill="none" stroke="#fff" stroke-width="2"/><ellipse cx="24" cy="24" rx="8" ry="20" fill="none" stroke="#fff" stroke-width="2"/><line x1="4" y1="24" x2="44" y2="24" stroke="#fff" stroke-width="2"/><line x1="10" y1="14" x2="38" y2="14" stroke="#fff" stroke-width="1.5"/><line x1="10" y1="34" x2="38" y2="34" stroke="#fff" stroke-width="1.5"/></svg>`,
    
    explorer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="folderGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#FFD54F;stop-opacity:1" /><stop offset="100%" style="stop-color:#FFA726;stop-opacity:1" /></linearGradient></defs><path d="M1 4 L1 13 L15 13 L15 6 L8 6 L7 4 Z" fill="url(#folderGrad)" stroke="#F57C00" stroke-width="0.8"/><path d="M1 4 L7 4 L8 6 L15 6 L15 7 L1 7 Z" fill="#FFB74D"/><rect x="3" y="8" width="10" height="1" fill="#FFF9C4" opacity="0.3"/></svg>`,
    
    help: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="helpGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#64B5F6;stop-opacity:1" /><stop offset="100%" style="stop-color:#1976D2;stop-opacity:1" /></linearGradient></defs><circle cx="8" cy="8" r="6.5" fill="url(#helpGrad)" stroke="#0D47A1" stroke-width="0.8"/><path d="M6 6 Q6 4.5 7 3.8 Q8 3 9 3.8 Q10 4.5 10 6 Q10 7 9 7.5 Q8.5 8 8.5 8.5 L8.5 9.5" stroke="#FFF" stroke-width="1.2" fill="none" stroke-linecap="round"/><circle cx="8.5" cy="11" r="0.7" fill="#FFF"/></svg>`,
    
    pdf: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M10 4h20l8 8v32H10z" fill="#E74C3C"/><path d="M30 4v8h8z" fill="#C0392B"/><text x="24" y="30" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">PDF</text></svg>`,
    
    mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="mailGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#64B5F6;stop-opacity:1" /><stop offset="100%" style="stop-color:#1976D2;stop-opacity:1" /></linearGradient></defs><rect x="1" y="4" width="14" height="9" fill="url(#mailGrad)" rx="1" stroke="#0D47A1" stroke-width="0.8"/><path d="M1 4 L8 9 L15 4" fill="none" stroke="#FFF" stroke-width="1.2" stroke-linejoin="round"/><path d="M1 13 L5 9" stroke="#FFF" stroke-width="0.8" opacity="0.7"/><path d="M15 13 L11 9" stroke="#FFF" stroke-width="0.8" opacity="0.7"/></svg>`,
    
    paint: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" fill="#fff" stroke="#999" stroke-width="1"/><rect x="6" y="10" width="36" height="6" fill="#E74C3C"/><circle cx="14" cy="24" r="3" fill="#E74C3C"/><circle cx="24" cy="24" r="3" fill="#2ECC71"/><circle cx="34" cy="24" r="3" fill="#3498DB"/><rect x="10" y="30" width="28" height="2" fill="#F39C12"/></svg>`,
    
    mediaplayer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="playerGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#42A5F5;stop-opacity:1" /><stop offset="100%" style="stop-color:#1565C0;stop-opacity:1" /></linearGradient></defs><rect x="1" y="2" width="14" height="11" fill="url(#playerGrad)" rx="1" stroke="#0D47A1" stroke-width="0.8"/><path d="M6 5 L11 8 L6 11 Z" fill="#FFF"/><rect x="3" y="13" width="10" height="1" fill="#1565C0" rx="0.3"/></svg>`,
    
    photoViewer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="4" y="8" width="40" height="32" fill="#4A90E2" rx="2"/><rect x="6" y="10" width="36" height="28" fill="#87CEEB"/><circle cx="15" cy="20" r="4" fill="#FFD700"/><path d="M6 32 L16 22 L26 32 L36 24 L42 30 V38 H6 Z" fill="#2ECC71"/></svg>`,
    
    game: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="20" fill="#4A90E2" rx="4"/><circle cx="16" cy="24" r="4" fill="#FFD700"/><circle cx="32" cy="24" r="4" fill="#E74C3C"/><rect x="12" y="22" width="8" height="2" fill="#fff"/><rect x="14" y="20" width="2" height="8" fill="#fff"/></svg>`,
    
    // Context Menu Icons
    view: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="3" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="8" cy="8" r="1.5" fill="#333"/><path d="M2 8 Q8 2 14 8 Q8 14 2 8" fill="none" stroke="#333" stroke-width="1"/></svg>`,
    
    sort: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><line x1="2" y1="4" x2="14" y2="4" stroke="#333" stroke-width="1.5"/><line x1="2" y1="8" x2="11" y2="8" stroke="#333" stroke-width="1.5"/><line x1="2" y1="12" x2="8" y2="12" stroke="#333" stroke-width="1.5"/></svg>`,
    
    refresh: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 2 A6 6 0 1 1 2 8" fill="none" stroke="#333" stroke-width="1.5"/><path d="M8 2 L8 5 L5 2 Z" fill="#333"/></svg>`,
    
    paste: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="3" y="5" width="8" height="10" fill="none" stroke="#333" stroke-width="1"/><rect x="5" y="3" width="8" height="10" fill="#fff" stroke="#333" stroke-width="1"/><rect x="6" y="1" width="4" height="2" fill="#333"/></svg>`,
    
    newItem: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#333" stroke-width="1.5"/><line x1="8" y1="5" x2="8" y2="11" stroke="#333" stroke-width="1.5"/><line x1="5" y1="8" x2="11" y2="8" stroke="#333" stroke-width="1.5"/></svg>`,
    
    personalize: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="3" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="8" cy="8" r="1" fill="#333"/><line x1="8" y1="2" x2="8" y2="4" stroke="#333" stroke-width="1"/><line x1="8" y1="12" x2="8" y2="14" stroke="#333" stroke-width="1"/><line x1="2" y1="8" x2="4" y2="8" stroke="#333" stroke-width="1"/><line x1="12" y1="8" x2="14" y2="8" stroke="#333" stroke-width="1"/></svg>`,
    
    open: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2 4h6l2 2h4v8H2z" fill="#FDB813"/><path d="M2 6h12v6H2z" fill="#FDCB3D"/></svg>`,
    
    cut: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="4" cy="12" r="2" fill="none" stroke="#333" stroke-width="1"/><circle cx="12" cy="12" r="2" fill="none" stroke="#333" stroke-width="1"/><line x1="4" y1="10" x2="8" y2="4" stroke="#333" stroke-width="1.5"/><line x1="12" y1="10" x2="8" y2="4" stroke="#333" stroke-width="1.5"/><line x1="8" y1="4" x2="8" y2="2" stroke="#333" stroke-width="1.5"/></svg>`,
    
    copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="2" y="2" width="9" height="9" fill="none" stroke="#333" stroke-width="1.5"/><rect x="5" y="5" width="9" height="9" fill="#fff" stroke="#333" stroke-width="1.5"/></svg>`,
    
    delete: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3 5h10v9H3z" fill="none" stroke="#333" stroke-width="1.5"/><rect x="2" y="3" width="12" height="2" fill="#333"/><rect x="6" y="1" width="4" height="2" fill="#333"/><line x1="6" y1="7" x2="6" y2="12" stroke="#333" stroke-width="1"/><line x1="10" y1="7" x2="10" y2="12" stroke="#333" stroke-width="1"/></svg>`,
    
    rename: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2 12 L2 14 L4 14 L12 6 L10 4 Z" fill="#333"/><rect x="11" y="2" width="3" height="3" transform="rotate(45 12.5 3.5)" fill="#333"/></svg>`,
    
    properties: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#333" stroke-width="1.5"/><text x="8" y="11" font-size="8" fill="#333" text-anchor="middle" font-weight="bold">i</text></svg>`,
    
    sendTo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2 2 L14 8 L2 14 L2 9 L10 8 L2 7 Z" fill="#333"/></svg>`,
    
    shortcut: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4 2 L12 2 L12 10 L8 10 L8 14 L4 14 Z" fill="none" stroke="#333" stroke-width="1.5"/><path d="M6 8 L10 8 L8 6 M8 10 L10 8" stroke="#4A90E2" stroke-width="1.5" fill="none"/></svg>`,
    
    // System Tray Icons
    volume: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2 6h3l4-3v10l-4-3H2z" fill="#fff"/><path d="M11 4 Q13 8 11 12" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M13 2 Q16 8 13 14" fill="none" stroke="#fff" stroke-width="1.5"/></svg>`,
    
    network: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="2" y="12" width="2" height="3" fill="#fff"/><rect x="5" y="10" width="2" height="5" fill="#fff"/><rect x="8" y="7" width="2" height="8" fill="#fff"/><rect x="11" y="4" width="2" height="11" fill="#fff"/></svg>`,
    
    notification: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 2 L6 5 H3 L3 10 H6 L8 13 L10 10 H13 L13 5 H10 Z" fill="#fff"/><circle cx="12" cy="4" r="3" fill="#E74C3C"/></svg>`,
    
    // Window Controls
    minimize: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><line x1="4" y1="8" x2="12" y2="8" stroke="currentColor" stroke-width="2"/></svg>`,
    
    maximize: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="3" y="3" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`,
    
    close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><line x1="4" y1="4" x2="12" y2="12" stroke="currentColor" stroke-width="2"/><line x1="12" y1="4" x2="4" y2="12" stroke="currentColor" stroke-width="2"/></svg>`,
    
    // Drive Icons
    hardDrive: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="8" y="16" width="32" height="20" fill="#4A90E2" rx="2"/><rect x="10" y="18" width="28" height="16" fill="#87CEEB"/><circle cx="36" cy="26" r="2" fill="#2ECC71"/><rect x="12" y="22" width="20" height="2" fill="#fff"/><rect x="12" y="26" width="16" height="2" fill="#fff"/></svg>`,
    
    // Taskbar Icons
    cascade: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="2" y="2" width="8" height="6" fill="none" stroke="#333" stroke-width="1"/><rect x="4" y="5" width="8" height="6" fill="none" stroke="#333" stroke-width="1"/><rect x="6" y="8" width="8" height="6" fill="#fff" stroke="#333" stroke-width="1"/></svg>`,
    
    desktop: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="2" y="3" width="12" height="9" fill="#4A90E2" stroke="#333" stroke-width="1"/><rect x="6" y="12" width="4" height="1" fill="#333"/><rect x="4" y="13" width="8" height="1" fill="#333"/></svg>`,
    
    taskManager: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="2" y="10" width="2" height="4" fill="#2ECC71"/><rect x="5" y="7" width="2" height="7" fill="#3498DB"/><rect x="8" y="4" width="2" height="10" fill="#E74C3C"/><rect x="11" y="6" width="2" height="8" fill="#F39C12"/></svg>`,
    
    settings: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="gearGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#90A4AE;stop-opacity:1" /><stop offset="100%" style="stop-color:#546E7A;stop-opacity:1" /></linearGradient></defs><path d="M8 1 L9 3 L11 3 L12 5 L14 6 L14 8 L12 9 L11 11 L9 11 L8 13 L7 11 L5 11 L4 9 L2 8 L2 6 L4 5 L5 3 L7 3 Z" fill="url(#gearGrad)" stroke="#37474F" stroke-width="0.8"/><circle cx="8" cy="7" r="3" fill="#CFD8DC" stroke="#37474F" stroke-width="0.8"/><circle cx="8" cy="7" r="1.5" fill="#546E7A"/></svg>`,
    
    // Additional icons for content
    download: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 2 L8 10 M5 7 L8 10 L11 7" stroke="#333" stroke-width="1.5" fill="none"/><rect x="3" y="12" width="10" height="2" fill="#333"/></svg>`,
    
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="2" y="3" width="12" height="10" fill="#4A90E2" stroke="#333" stroke-width="1"/><circle cx="5" cy="6" r="1.5" fill="#FFD700"/><path d="M2 11 L6 8 L9 10 L14 6 L14 13 L2 13 Z" fill="#2ECC71"/></svg>`,
    
    music: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5 12 L5 6 L12 4 L12 10" stroke="#333" stroke-width="1.5" fill="none"/><circle cx="5" cy="12" r="2" fill="#333"/><circle cx="12" cy="10" r="2" fill="#333"/></svg>`,
    
    trophy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5 3 L5 7 Q5 9 8 9 Q11 9 11 7 L11 3 Z" fill="#FFD700" stroke="#333" stroke-width="1"/><rect x="4" y="2" width="8" height="2" fill="#FFD700" stroke="#333" stroke-width="1"/><rect x="7" y="9" width="2" height="3" fill="#333"/><rect x="5" y="12" width="6" height="2" fill="#333"/></svg>`,
    
    rocket: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 2 L10 8 L8 14 L6 8 Z" fill="#E74C3C"/><circle cx="8" cy="6" r="1" fill="#fff"/><path d="M6 8 L4 10 L4 12 L6 10 Z" fill="#F39C12"/><path d="M10 8 L12 10 L12 12 L10 10 Z" fill="#F39C12"/></svg>`,
    
    lightning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9 2 L5 9 L8 9 L7 14 L11 7 L8 7 Z" fill="#F39C12"/></svg>`,
    
    heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 13 L3 8 Q2 7 2 5 Q2 3 4 3 Q6 3 8 5 Q10 3 12 3 Q14 3 14 5 Q14 7 13 8 Z" fill="#E74C3C"/></svg>`,
    
    star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 2 L9.5 6.5 L14 7 L11 10 L12 14 L8 11.5 L4 14 L5 10 L2 7 L6.5 6.5 Z" fill="#FFD700"/></svg>`,
    
    checkmark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3 8 L6 11 L13 4" stroke="#2ECC71" stroke-width="2" fill="none"/></svg>`,
    
    question: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#333" stroke-width="1.5"/><path d="M6 6 Q6 4 8 4 Q10 4 10 6 Q10 7 8 7.5 L8 9" stroke="#333" stroke-width="1.5" fill="none"/><circle cx="8" cy="11" r="0.5" fill="#333"/></svg>`,
    
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="2" y="3" width="12" height="11" fill="none" stroke="#333" stroke-width="1.5"/><line x1="2" y1="6" x2="14" y2="6" stroke="#333" stroke-width="1.5"/><line x1="5" y1="2" x2="5" y2="5" stroke="#333" stroke-width="1.5"/><line x1="11" y1="2" x2="11" y2="5" stroke="#333" stroke-width="1.5"/></svg>`,
    
    phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3 2 L6 2 L7 5 L5 6 Q6 9 10 10 L11 8 L14 9 L14 12 Q14 14 10 14 Q3 14 2 7 Q2 2 3 2 Z" fill="#2ECC71"/></svg>`,
    
    globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#333" stroke-width="1.5"/><ellipse cx="8" cy="8" rx="3" ry="6" fill="none" stroke="#333" stroke-width="1"/><line x1="2" y1="8" x2="14" y2="8" stroke="#333" stroke-width="1"/></svg>`,
    
    coffee: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="3" y="6" width="8" height="7" fill="#8B4513" rx="1"/><path d="M11 8 L13 8 Q14 8 14 10 Q14 12 13 12 L11 12" fill="none" stroke="#8B4513" stroke-width="1.5"/><path d="M4 4 Q4 3 5 3 M6 4 Q6 3 7 3 M8 4 Q8 3 9 3" stroke="#8B4513" stroke-width="1" fill="none"/></svg>`,
    
    book: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="3" y="2" width="10" height="12" fill="#4A90E2" stroke="#333" stroke-width="1"/><line x1="8" y1="2" x2="8" y2="14" stroke="#333" stroke-width="1"/><line x1="5" y1="5" x2="7" y2="5" stroke="#fff" stroke-width="1"/><line x1="5" y1="7" x2="7" y2="7" stroke="#fff" stroke-width="1"/></svg>`,
    
    shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 2 L13 4 L13 8 Q13 12 8 14 Q3 12 3 8 L3 4 Z" fill="#2ECC71" stroke="#333" stroke-width="1"/><path d="M6 8 L7.5 9.5 L10 6" stroke="#fff" stroke-width="1.5" fill="none"/></svg>`,
    
    package: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 2 L14 5 L14 11 L8 14 L2 11 L2 5 Z" fill="#8B4513" stroke="#333" stroke-width="1"/><path d="M8 2 L8 8 M2 5 L8 8 L14 5" stroke="#333" stroke-width="1"/></svg>`,
    
    zip: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="4" y="2" width="8" height="12" fill="#FFD700" stroke="#333" stroke-width="1"/><rect x="7" y="3" width="2" height="1" fill="#333"/><rect x="7" y="5" width="2" height="1" fill="#333"/><rect x="7" y="7" width="2" height="1" fill="#333"/><rect x="7" y="9" width="2" height="1" fill="#333"/><circle cx="8" cy="12" r="1" fill="#333"/></svg>`,
    
    // Login screen icons
    user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="userGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#E3F2FD;stop-opacity:1" /><stop offset="100%" style="stop-color:#90CAF9;stop-opacity:1" /></linearGradient></defs><circle cx="24" cy="16" r="8" fill="url(#userGrad)" stroke="#42A5F5" stroke-width="1.5"/><path d="M8 40 Q8 28 24 28 Q40 28 40 40 Z" fill="url(#userGrad)" stroke="#42A5F5" stroke-width="1.5"/></svg>`,
    
    unlock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="4" y="7" width="8" height="7" fill="#fff" stroke="#fff" stroke-width="1" rx="1"/><path d="M6 7 L6 5 Q6 3 8 3 Q10 3 10 5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="8" cy="11" r="1.2" fill="rgba(0,0,0,0.3)"/></svg>`,
    
    power: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#fff" stroke-width="2"/><line x1="8" y1="3" x2="8" y2="8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
    
    restart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 3 A5 5 0 1 1 3 8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M8 1 L8 5 L5 3 Z" fill="#fff"/></svg>`,
    
    briefcase: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="briefcaseGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#A0826D;stop-opacity:1" /><stop offset="100%" style="stop-color:#6D4C41;stop-opacity:1" /></linearGradient></defs><rect x="2" y="6" width="12" height="7" fill="url(#briefcaseGrad)" stroke="#4E342E" stroke-width="0.8" rx="1"/><rect x="5.5" y="4" width="5" height="2.5" fill="#8D6E63" stroke="#4E342E" stroke-width="0.8" rx="0.5"/><line x1="2" y1="9.5" x2="14" y2="9.5" stroke="#4E342E" stroke-width="0.8"/><rect x="7" y="9" width="2" height="2" fill="#5D4037" rx="0.3"/><circle cx="8" cy="10" r="0.4" fill="#FFD54F"/></svg>`,
    
    palette: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="paletteGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FFE082;stop-opacity:1" /><stop offset="100%" style="stop-color:#FFB300;stop-opacity:1" /></linearGradient></defs><path d="M8 2 Q12 2 14 6 Q16 10 13 13 Q11 15 9 14 L7 13 Q5 12 5 10 Q5 9 6 9 Q7 9 7 8 Q7 7 6 7 Q2 7 2 4 Q2 2 4 2 Q6 2 8 2 Z" fill="url(#paletteGrad)" stroke="#F57C00" stroke-width="0.8"/><circle cx="5" cy="5" r="1" fill="#E53935"/><circle cx="8" cy="4" r="1" fill="#1E88E5"/><circle cx="11" cy="5" r="1" fill="#43A047"/><circle cx="10" cy="8" r="1" fill="#FB8C00"/><circle cx="7" cy="10" r="0.8" fill="#8E24AA"/></svg>`,
    
    warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 2 L14 13 L2 13 Z" fill="#F39C12" stroke="#333" stroke-width="1"/><line x1="8" y1="6" x2="8" y2="9" stroke="#333" stroke-width="1.5"/><circle cx="8" cy="11" r="0.5" fill="#333"/></svg>`,
    
    search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><linearGradient id="searchGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#E3F2FD;stop-opacity:1" /><stop offset="100%" style="stop-color:#90CAF9;stop-opacity:1" /></linearGradient></defs><circle cx="6.5" cy="6.5" r="4" fill="url(#searchGrad)" stroke="#1976D2" stroke-width="1.5"/><line x1="9.5" y1="9.5" x2="13.5" y2="13.5" stroke="#1976D2" stroke-width="2" stroke-linecap="round"/><circle cx="6.5" cy="6.5" r="2.5" fill="none" stroke="#42A5F5" stroke-width="0.8"/></svg>`,
    
    play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5 3 L13 8 L5 13 Z" fill="#fff"/></svg>`,
    
    prev: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10 3 L4 8 L10 13 Z" fill="#fff"/><rect x="3" y="3" width="1" height="10" fill="#fff"/></svg>`,
    
    next: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6 3 L12 8 L6 13 Z" fill="#fff"/><rect x="12" y="3" width="1" height="10" fill="#fff"/></svg>`,
    
    print: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="4" y="2" width="8" height="3" fill="#fff" stroke="#333" stroke-width="1"/><rect x="2" y="5" width="12" height="6" fill="#999" stroke="#333" stroke-width="1"/><rect x="4" y="9" width="8" height="5" fill="#fff" stroke="#333" stroke-width="1"/><circle cx="11" cy="7" r="0.5" fill="#2ECC71"/></svg>`,
    
    save: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="3" y="2" width="10" height="12" fill="#4A90E2" stroke="#333" stroke-width="1"/><rect x="4" y="2" width="6" height="4" fill="#333"/><rect x="5" y="9" width="6" height="5" fill="#fff"/></svg>`,
    
    home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2 8 L8 3 L14 8 L14 14 L10 14 L10 10 L6 10 L6 14 L2 14 Z" fill="#8B4513" stroke="#333" stroke-width="1"/></svg>`,
    
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6 4 L10 8 L6 12" stroke="#333" stroke-width="1.5" fill="none"/></svg>`,
    
    code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="codeGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#42A5F5;stop-opacity:1" /><stop offset="100%" style="stop-color:#1565C0;stop-opacity:1" /></linearGradient></defs><rect x="4" y="8" width="40" height="32" fill="url(#codeGrad)" rx="2" stroke="#0D47A1" stroke-width="1.5"/><rect x="6" y="10" width="36" height="28" fill="#1E1E1E"/><path d="M14 20 L10 24 L14 28" stroke="#4FC3F7" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 20 L26 28" stroke="#81C784" stroke-width="2" stroke-linecap="round"/><path d="M30 20 L34 24 L30 28" stroke="#4FC3F7" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

// Helper to get icon HTML with proper sizing
function getIconHTML(iconName, size = 16) {
    const icon = WindowsIcons[iconName] || WindowsIcons.document;
    return icon.replace('viewBox="0 0 48 48"', `viewBox="0 0 48 48" width="${size}" height="${size}"`).replace('viewBox="0 0 16 16"', `viewBox="0 0 16 16" width="${size}" height="${size}"`);
}

// Helper function to create icon element
function createIcon(iconName, size = 16) {
    const svg = WindowsIcons[iconName] || WindowsIcons.document;
    const div = document.createElement('div');
    div.innerHTML = svg;
    const svgElement = div.firstChild;
    svgElement.style.width = size + 'px';
    svgElement.style.height = size + 'px';
    svgElement.style.display = 'block';
    return svgElement;
}

// Helper function to get icon as data URL
function getIconDataURL(iconName) {
    const svg = WindowsIcons[iconName] || WindowsIcons.document;
    return 'data:image/svg+xml;base64,' + btoa(svg);
}

// Helper to get icon for use in apps object
function getAppIcon(iconName) {
    const svg = WindowsIcons[iconName] || WindowsIcons.document;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Make globally accessible
window.WindowsIcons = WindowsIcons;
window.createIcon = createIcon;
window.getIconDataURL = getIconDataURL;
window.getAppIcon = getAppIcon;
window.getIconHTML = getIconHTML;
