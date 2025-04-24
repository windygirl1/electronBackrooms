import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
    });
    
    win.loadURL('http://localhost:5175');
}

app.whenReady().then(createWindow);