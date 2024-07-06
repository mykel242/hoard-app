// datamanager.js
const PouchDB = require('pouchdb-node');
PouchDB.plugin(require('pouchdb-find'));

const { v4: uuidv4 } = require('uuid');
const { Account, AccountType } = require('./Models/Account');
const { Transaction, TransactionType } = require('./Models/Transaction');

const hoardDataManager = {

	db:  new PouchDB('mydb'),
	tid: Math.floor(Math.random() * 99999),

	info() {
		this.db.info().then( function(info) {
			console.log(info);
		});
	},

	setupIndecies() {
		console.log('indexing datastore');
		this.db.createIndex({
    		index: {
      			fields: ['type'],
     		 	name: 'accountType-index'
    		}
		}).then(index => {
			console.log("index exists");
		}).catch(err => {
			console.error(err);
		});
	},

	addDocument(doc) {
		this.db.put(doc, function(err, response) { 
			if (err) {
				return console.log(err);
			} else {
				console.log("Document created Successfully");
			}
		});
	},

	getDocument(docId) {
		this.db.get(docType)
		.then(doc => {
			// handle doc
			console.log(doc)
		}).catch(err => {
			console.error(err)
		});
	},

	findDocuments(docType) {
		/* db.find(...) requires Mango Queries plugin 			*/
		/* see: https://pouchdb.com/guides/mango-queries.html 	*/

		this.db.find({
			selector: {type: docType},
		}).then(function (result) {
			console.log(result);
		}).catch(function (err) {
  			console.error(err);
		});
	},

	// - Get Accounts
	getAccounts() {
		console.log('Get Accounts');
		// datastore.findDocuments(Account.docType).then((accounts) => {
		this.db.find({
			selector: {type: Account.docType},
		}).then(function (result) {
			//console.log(result);
			return(result);
		}).catch(function (err) {
			console.error(err);
			//return;
		});
		
	},

	// - Get Transactions
	getTransactions() {
		console.log('Get Transactions');
		// datastore.findDocuments(Transaction.docType);
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
	}
};

hoardDataManager.setupIndecies();
module.exports = { hoardDataManager }

/*
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
*/