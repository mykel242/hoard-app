// datamanager.js
const { datastore } = require('./datastore');
const { v4: uuidv4 } = require('uuid');
const { Account, AccountType } = require('./Models/Account');
const { Transaction, TransactionType } = require('./Models/Transaction');


const hoardDataManager = {

	// - Get Accounts
	getAccounts() {
		console.log('Get Accounts');
		datastore.findDocuments(Account.docType);
	},

	// - Get Transactions
	getTransactions() {
		console.log('Get Transactions');
		datastore.findDocuments(Transaction.docType);
	},

	// - Add New Account
	addAccount(account) {
		console.log('Add Account');
	},

	// - Add New Transaction
	addTransaction(transaction) {
		console.log('Add Transaction');
	},

	// - Update Account Balance
	updateBalance(account, newBal) {
		console.log('Update Balance');
	},

	// - Set Transaction Paid
	setTransactionPaid(transaction) {
		console.log('Set Transaction Paid');
	},

	// - Set Transaction Cleared
	setTransactionCleared(transaction) {
		console.log('Set Transaction Cleared');
	},

	// - DB Info
	getInfo() {
		console.log('Get Info');
		datastore.info();
	}
}
module.exports = { hoardDataManager }