class Transaction {

	static docType = "Transaction";


// "Solar Loan", TransactionType.PAYMENT, -160, null, null
constructor(
	id,
	description, 
	transactionType, 
	amount,  
	dueBy,
	period) {

	this.id = id;
	this.type = this.constructor.docType;
	this.description = description;
	this.transactionType = transactionType;
	this.amount = amount;
	this.estimateAmount = amount;
	// this.estimate = true;
	// this.paid = false;
	// this.recurs = false;
	// this.clear = false;
	// this.dueBy = null;
	// this.executedDate = null;
	// this.clearDate = null;
	// this.period = period;
	// this.paymentAccount = null;
}



	print() {
		console.log(`${ this.description } \t\t ${ this.transactionType.name } \t ${ this.amount }`);
	}
}

const TransactionType = Object.freeze({
    PAYMENT         : { name: "payment"},
    DEPOSIT			: { name: "deposit"},
    TRANSFER		: { name: "transfer"},
    ADJUSTMENT		: { name: "adjustment"}
});

module.exports = { Transaction, TransactionType };