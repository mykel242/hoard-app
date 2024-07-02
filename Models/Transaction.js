class Transaction {

	#amount = 0;

constructor(
	description, 
	type, 
	amount,  
	dueBy,
	period) {

	this.description = description;
	this.type = type;
	this.#amount = amount;
	this.estimateAmount = amount;
	this.estimate = true;
	this.paid = false;
	this.recurs = false;
	this.clear = false;
	this.dueBy = null;
	this.executedDate = null;
	this.clearDate = null;
	this.period = period;
	this.paymentAccount = null;
}

	get amount() {
		return this.#amount;
	}

	set amount(a) {
		this.#amount = a;
	}

	print() {
		console.log(`${ this.description } \t\t ${ this.type.name } \t ${ this.amount }`);
	}
}

const TransactionType = Object.freeze({
    PAYMENT         : { name: "payment"},
    DEPOSIT			: { name: "deposit"},
    TRANSFER		: { name: "transfer"},
    ADJUSTMENT		: { name: "adjustment"}
});

module.exports = { Transaction, TransactionType };