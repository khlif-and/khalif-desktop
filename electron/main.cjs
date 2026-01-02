const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // 1. Create the Main Window (Hidden initially)
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        show: false, // Keep hidden until splash is done
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        icon: path.join(__dirname, '../assets/img/icon.ico'),
    });

    // 2. Create the Splash Window
    const splashWindow = new BrowserWindow({
        width: 600,
        height: 400,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        center: true,
        resizable: false,
        icon: path.join(__dirname, '../assets/img/icon.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;
    const devUrl = 'http://localhost:5173';
    // const prodPath = path.join(__dirname, '../dist/index.html');

    if (isDev) {
        // Load Splash Route in Splash Window
        splashWindow.loadURL(`${devUrl}#/splash-native`);
        // Load Onboarding Route in Main Window
        mainWindow.loadURL(`${devUrl}#/onboarding`);
    } else {
        // Production logic (needs hash handling)
        splashWindow.loadFile(path.join(__dirname, '../dist/index.html'), { hash: 'splash-native' });
        mainWindow.loadFile(path.join(__dirname, '../dist/index.html'), { hash: 'onboarding' });
    }

    // 3. Simulate Loading / Wait for Button Click?
    // User asked for "Launch Screen" (interactive) separate window.
    // If interactive, we need IPC to close splash.
    // Let's assume standard Splash behavior first (Timer) as per "Like Adobe".
    // Adobe splash stays for a few seconds then vanishes.

    setTimeout(() => {
        splashWindow.close();
        mainWindow.maximize(); // Ensure full screen (maximized)
        mainWindow.show();
    }, 4000); // 4 seconds splash
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
