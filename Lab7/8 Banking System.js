class BankAccount {
    #accountNumber;
    #balance;
    #accountType;
    #transactionHistory;

    constructor(accountNumber, initialBalance, accountType) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance > 0 ? initialBalance : 0;
        this.#accountType = accountType.toLowerCase();
        this.#transactionHistory = [];

        if (initialBalance > 0) {
            this.#recordTransaction("Initial Deposit", initialBalance);
        }
    }

    deposit(amount) {
        if (amount <= 0) {
            console.error("Deposit amount must be positive.");
            return;
        }
        this.#balance += amount;
        this.#recordTransaction("Deposit", amount);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.error("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.#balance) {
            console.error("Insufficient funds for withdrawal.");
            return;
        }
        this.#balance -= amount;
        this.#recordTransaction("Withdrawal", amount);
    }

    getBalance() {
        return this.#balance;
    }

    getTransactionHistory() {
        return [...this.#transactionHistory];
    }

    transferFunds(amount, targetAccount) {
        if (!(targetAccount instanceof BankAccount)) {
            console.error("Target account is invalid.");
            return;
        }
        if (amount <= 0) {
            console.error("Transfer amount must be positive.");
            return;
        }
        if (amount > this.#balance) {
            console.error("Insufficient funds for transfer.");
            return;
        }

        this.#balance -= amount;
        targetAccount.#balance += amount;

        this.#recordTransaction("Transfer Out", amount);
        targetAccount.#recordTransaction("Transfer In", amount);
    }

    applyInterest(rate) {
        if (this.#accountType !== "savings") {
            console.error("Interest can only be applied to savings accounts.");
            return;
        }
        if (rate <= 0) {
            console.error("Interest rate must be positive.");
            return;
        }

        const interest = this.#balance * (rate / 100);
        this.#balance += interest;
        this.#recordTransaction("Interest Applied", interest);
    }

    getAccountSummary() {
        return this.#generateAccountSummary();
    }



    #recordTransaction(type, amount) {
        const timestamp = new Date().toISOString();
        this.#transactionHistory.push({ type, amount, timestamp });
    }

    #generateAccountSummary() {
        return `Account Number: ${this.#accountNumber}\n` +
               `Account Type: ${this.#accountType}\n` +
               `Balance: $${this.#balance.toFixed(2)}`;
    }
}

// ------------------------------------

const savingsAccount = new BankAccount("Acc1", 1000, "savings");
const checkingAccount = new BankAccount("Acc2", 500, "checking");

savingsAccount.deposit(200);
savingsAccount.withdraw(150);
savingsAccount.applyInterest(5);

checkingAccount.deposit(300);
checkingAccount.withdraw(100);

savingsAccount.transferFunds(200, checkingAccount);

console.log(savingsAccount.getAccountSummary());
console.log(checkingAccount.getAccountSummary());

console.log("Savings Account Transactions:", savingsAccount.getTransactionHistory());
console.log("Checking Account Transactions:", checkingAccount.getTransactionHistory());
