// * ====== Lab 3 Solutions By Ahmed Elsayed Ashour ====== *
// Develop a system serving a bank including functionalities dealing with accounts and transactions
//Q1 Write a Function to Create a new bank account with validation for required fields.
//**Rules**:
//Must have firstName, lastName, initialDeposit (min $50)
//Generate a unique 10-digit account number

console.log("Q1:");
let Accounts = []

function createBankAccount(accountRequest){
    if(accountRequest.initialDeposit < 50) {
        console.log("initialDeposit cannot be less than 50$");
        return; 
    }
    let newAccount = {}
    if (Accounts.length === 0){
        newAccount["accountNumber"] = "1000000001";
        newAccount["firstName"] = accountRequest["firstName"];
        newAccount["lastName"] = accountRequest["lastName"];
        newAccount["balance"] = accountRequest["initialDeposit"];
        newAccount["createdAt"] = new Date().toISOString();

        newAccount["transactions"] = [];

        Accounts.push(newAccount);
        return newAccount;
    }
        
    let maxAccountNumber = Number(Accounts[Accounts.length-1].accountNumber);
        newAccount["accountNumber"] = String(maxAccountNumber+1);
        newAccount["firstName"] = accountRequest["firstName"];
        newAccount["lastName"] = accountRequest["lastName"];
        newAccount["balance"] = accountRequest["initialDeposit"];
        newAccount["createdAt"] = new Date().toISOString();
        
        newAccount["transactions"] = [];

        Accounts.push(newAccount);
        return newAccount;
}

let accReq1 ={
  firstName: "John",
  lastName: "Doe",
  initialDeposit: 100
}
let newACC1 = createBankAccount(accReq1);
console.log(newACC1);

let accReq2 ={
  firstName: "Ahmed",
  lastName: "Ali",
  initialDeposit: 5000
}
let newACC2 = createBankAccount(accReq2);
console.log(newACC2);

console.log("Accounts:", Accounts);
// ==================================================
// Q 2
console.log("Q2:")
function Deposit (account, amount){
    if(amount < 0) {
        console.log("Amount must be positive");
        return; 
    }

    account["balance"] = account["balance"] + amount
    account["transactions"].push({
        type: "DEPOSIT",
        amount: amount,
        date: new Date().toISOString(),
        newBalance: account["balance"] + amount
    })
}

let d_amount = 300
Deposit (newACC2, d_amount);
console.log(`Account Deposit: ${newACC2.accountNumber}, ${d_amount}`);
console.log(newACC2);
// ==================================================
// Q 3
console.log("Q3:")
function withdrawal (account, amount){
    const penalty = 5

    if(account["balance"] >= amount) {
    account["balance"] = account["balance"] - amount
    account["transactions"].push({
    type: "WITHDRAWAL",
    amount: amount,
    date: new Date().toISOString(),
    newBalance: account["balance"] - amount
        })
    }
    else if (account["balance"] >= penalty)  {
    account["balance"] = account["balance"] - penalty
    account["transactions"].push({
    type: "OVERDRAFT_ATTEMPT",
    amount: amount,
    date: new Date().toISOString(),
    newBalance: account["balance"] - penalty,
    penalty: penalty
        })
    }
    else console.log(`insufficient balance`);
}

let w_amount = 6000
withdrawal (newACC2, w_amount);
console.log(`Account withdrawal: ${newACC2.accountNumber}, ${w_amount}`);
console.log(newACC2);
// ==================================================
// Q 4
console.log("Q4:")