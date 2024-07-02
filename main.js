const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('node:path');
const { Account, AccountType } = require('./Models/Account');
const { Transaction, TransactionType } = require('./Models/Transaction');

const createWindow = () => {
	const win = new BrowserWindow({
		width:  600,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js')
		}
	});

	win.loadFile('index.html');
	// win.webContents.openDevTools({ mode: 'detach' });
}

// Disable the default native menus
Menu.setApplicationMenu(null);

app.whenReady().then(() => {
	createWindow();
	let a1 = new Account('bill', AccountType.CHECKING, 1000.00);
	a1.print();
	
	let t1 = new Transaction("Solar Loan", TransactionType.PAYMENT, -160, null, null);
	t1.paymentAccount = a1;
	t1.print();

	let t2 = new Transaction("Payday!", TransactionType.DEPOSIT , 1700, null, null);
	t2.paymentAccount = a1;
	t2.print();
})
