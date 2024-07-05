'use strict'

const path = require('node:path');
const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const { hoardDataManager } = require('./datamanager');

const createWindow = () => {
	const win = new BrowserWindow({
		width:  600,
		height: 800,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js')
		}
	});
	win.loadFile('Render/index.html');
}

function main() {
	createWindow();
	hoardDataManager.getInfo();
	hoardDataManager.getAccounts();
	hoardDataManager.getTransactions();
}

app.whenReady().then(() => {
	console.log('>> main.js > app.whenReady');
	main();
});
