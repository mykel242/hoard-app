'use strict'

const path = require('node:path');
const { app, BrowserWindow, ipcMain } = require('electron');
const { hoardDataManager } = require('./datamanager');

const createWindow = () => {
	const win = new BrowserWindow({
		width:  400,
		height: 800,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	});
	win.loadFile('Render/index.html');
	return win;
}

function main() {
	const win = createWindow();
	
	var textFromField;
	ipcMain.on("on-ipc-test", (event, inputText) => {
		console.log(`Got [${ textFromField }]`);
	});

	// Test IPC from form to main and back to render in UI.
	ipcMain.handle("log-to-renderer", async (event, textFromField) => {
		console.log(`Got [${ textFromField }]`);
		return `&gt;&gt; ${ textFromField }<br/>`;
	});

	hoardDataManager.getInfo();
	// hoardDataManager.getAccounts();
	// hoardDataManager.getTransactions();
}

app.whenReady().then(() => {
	console.log('>> main.js > app.whenReady');
	main();
});
