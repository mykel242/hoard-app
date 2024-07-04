// Datastore.js
const PouchDB = require('pouchdb-node');
PouchDB.plugin(require('pouchdb-find'));

// Object-Literal / Singleton?
const datastore = {

	db:  new PouchDB('mydb'),
	tid: Math.floor(Math.random() * 99999),

	setupIndecies() {
		console.log('indexing datastore');
		this.db.createIndex({
    		index: {
      			fields: ['type'],
     		 	name: 'accountType-index'
    		}
		}).then(index => {
			console.log(index);
		}).catch(err => {
			console.error(err);
		});
	},

	info() {
		console.log(`datastore instance [${ this.tid }]`);
		this.db.info().then( function(info) {
			console.log(info);
		})
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
		})
		.catch(err => {
			console.error(err)
		})
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
	}
};

datastore.setupIndecies();
module.exports = { datastore }