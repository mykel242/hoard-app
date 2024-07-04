class Account {
   
   static docType = "Account";
   
   constructor(id, description, type, balance) {

      this._id = id;                         /* immutable */
      this.type = this.constructor.docType;  /* set the doc type so that it's indexed by the db */
      this.description = description;        /* this is the string the user will recognize      */
      this.accountType = type;
      this.balance = balance;
   }

   get id() {
      return this._id;
   }

   print() {
      console.log('Account [' + this.description + '] = ' + this.balance);
   }
}

const AccountType = Object.freeze({
    CHECKING         : { name: "check"},
    SAVINGS          : { name: "save"},
    INVESTMENT       : { name: "invest"},
    IRA              : { name: "ira"},
    PERM_INSURANCE   : { name: "perm"},
    TERM_INSURANCE   : { name: "term"},
    BANK_CC          : { name: "cc"},
    STORE_CC         : { name: "store"}
});

module.exports = { Account, AccountType };