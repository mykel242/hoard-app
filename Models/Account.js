class Account {
   
   static docType = "Account";
   
   constructor(id, description, type, balance) {
      this._id = id;
      this.type = this.constructor.docType;
      this.description = description;
      this.accountType = type;
      this.balance = balance;
   }

   print() {
      console.log('Account [' + this.name + '] = ' + this.balance);
   }
}

const AccountType = Object.freeze({
    CHECKING         : 0,
    SAVINGS          : 1,
    INVESTMENT       : 2,
    IRA              : 3,
    PERM_INSURANCE   : 4,
    TERM_INSURANCE   : 5,
    BANK_CC          : 6,
    STORE_CC         : 7
});

module.exports = { Account, AccountType };