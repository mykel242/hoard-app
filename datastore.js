// Datastore.js
const PouchDB = require('pouchdb-node');

// Singleton?
const datastore = {

	db:  new PouchDB('mydb'),
	tid: Math.floor(Math.random() * 99999),

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

	getDocument(docType) {
		this.db.get(docType).then(function (doc) {
			console.log(doc);
		});
	}
};

module.exports = { datastore }