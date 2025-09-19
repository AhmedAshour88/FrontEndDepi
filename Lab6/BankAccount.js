//! Applay Encapsulation By Constructor Function  
const BankAccount = function(accountNumber, balance){
    let _accountNumber  = accountNumber;
    let _balance = balance;

    this.getAccountNumber = function(){
        return _accountNumber;
    }
    this.setAccountNumber = function(n){
        _accountNumber = n;
    }
     this.getBalance = function(){
        return _balance;
    }
    this.setBalance = function(b){
        _balance = b;
    }
}
BankAccount.prototype.deposit = function (amount) {
     this.setBalance(this.getBalance() + amount);
} 
BankAccount.transferFunds = function (fromAccount, toAccount, fund) {
    fromAccount.setBalance(fromAccount.getBalance() - fund);
    toAccount.setBalance(toAccount.getBalance() + fund);  
} 

let acc1 = new BankAccount (101, 10000);
let acc2 = new BankAccount (102, 5000);
console.log(acc1);
//console.log('acc1.accountNumber',  acc1.accountNumber);
//console.log('acc1.balance', acc1.balance);
console.log('acc1.getaccountNumber()', acc1.getAccountNumber());
console.log('acc1.getbalance()', acc1.getBalance());
console.log('acc2.getaccountNumber()', acc2.getAccountNumber());
console.log('acc2.getbalance()', acc2.getBalance());
acc1.deposit(3000)
console.log('acc1.deposit(3000)', acc1.getBalance());
BankAccount.transferFunds(acc1, acc2, 2000);
console.log('acc1.getBalance()', acc1.getBalance());
console.log('acc2.getBalance()', acc2.getBalance());