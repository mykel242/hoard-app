const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('node:path');
const { Account, AccountType } = require('./Models/Account');
const { Transaction, TransactionType } = require('./Models/Transaction');
const { datastore } = require('./datastore')
const { v4: uuidv4 } = require('uuid');

const createWindow = () => {
	const win = new BrowserWindow({
		width:  400,
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
	let a1 = new Account(uuidv4(), 'Bill Pay', AccountType.CHECKING, 1000.00);
	a1.print();
	console.log(a1);
	// datastore.addDocument(a1);
	// datastore.getDocument();
	
	let t1 = new Transaction(uuidv4(), "Solar Loan", TransactionType.PAYMENT, -160, null, null);
	t1.paymentAccount = a1;
	t1.print();
	console.log(t1);

	let t2 = new Transaction(uuidv4(), "Payday!", TransactionType.DEPOSIT , 1700, null, null);
	t2.paymentAccount = a1;
	t2.print();
	console.log(t2);

	datastore.info();

})
