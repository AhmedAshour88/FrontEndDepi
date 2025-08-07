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
        newAccount["type"] = accountRequest["type"];
        newAccount["transactions"] = [];
        newAccount["status"] = accountRequest["status"];
        newAccount["statusHistory"] = [];


        Accounts.push(newAccount);
        return newAccount;
    }
        
    let maxAccountNumber = Number(Accounts[Accounts.length-1].accountNumber);
        newAccount["accountNumber"] = String(maxAccountNumber+1);
        newAccount["firstName"] = accountRequest["firstName"];
        newAccount["lastName"] = accountRequest["lastName"];
        newAccount["balance"] = accountRequest["initialDeposit"];
        newAccount["createdAt"] = new Date().toISOString();
        newAccount["type"] = accountRequest["type"];
        newAccount["transactions"] = [];
        newAccount["status"] = accountRequest["status"];
        newAccount["statusHistory"] = [];

        Accounts.push(newAccount);
        return newAccount;
}

let accReq1 ={
  firstName: "John",
  lastName: "Doe",
  type: "SAVINGS",
  initialDeposit: 10000,
  status: "ACTIVE"
}
let newACC1 = createBankAccount(accReq1);
console.log(newACC1);

let accReq2 ={
  firstName: "Ahmed",
  lastName: "Ali",
  type: "SAVINGS",
  initialDeposit: 5000,
  status: "ACTIVE"
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
        checkdailyWithdrawallimit(account, amount)

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

let w_amount = 100
withdrawal (newACC2, w_amount);
console.log(`Account withdrawal: ${newACC2.accountNumber}, ${w_amount}`);
console.log(newACC2);
// ==================================================
// Q 4
console.log("Q4:")

function Transfer (fromAccount, toAccount, amount){
    if(amount < 0 && amount<= fromAccount["balance"]) {
        console.log("Amount must be positive");
        return; 
    }

    fromAccount["balance"] = fromAccount["balance"] - amount
    fromAccount["transactions"].push({
    type: "TRANSFER_OUT",
    to: toAccount["accountNumber"],
    amount: amount,
    date: new Date().toISOString(),
    newBalance: fromAccount["balance"] - amount
    })

    toAccount["balance"] = toAccount["balance"] + amount
    toAccount["transactions"].push({
    type: "TRANSFER_IN",
    from: fromAccount["accountNumber"],
    amount: amount,
    date: new Date().toISOString(),
    newBalance: toAccount["balance"] + amount
    })
}

let tran_amount = 1000
console.log("🚀 ~ newACC1:", newACC1)
console.log("🚀 ~ newACC2:", newACC2)
Transfer (newACC1, newACC2, tran_amount)
console.log("🚀 ~ newACC1:", newACC1)
console.log("🚀 ~ newACC2:", newACC2)
// ====================================================================
//Write a Function to Calculate monthly interest (compound) for savings 
//accounts.
// Q 5
console.log("Q5:")

function monthly_interest (account, month_rate){
    if(account["balance"] < 500) {
        console.log("balance must be greater than $500");
        return; 
    }

    account["balance"] = account["balance"] + account["balance"]*month_rate;
    account["transactions"].push({
    type: "INTEREST",
    amount: account["balance"]*month_rate,
    date: new Date().toISOString(),
    newBalance: account["balance"] + account["balance"]*month_rate
    })
}

let month_rate = 0.5
console.log("🚀 ~ newACC1:", newACC1)
monthly_interest (newACC1, month_rate)
console.log("🚀 ~ newACC1:", newACC1)
// ====================================================================
//Write a Function to Retrieve transactions within a date range.
//Q 6
console.log("Q6:")
function filterAccountTransactions(account, fltrObj){
    let tranArr = [];
    for(i=0;i<account.transactions.length;i++){
        if(
           new Date(account.transactions[i].date) >= 
           new Date(fltrObj.startDate) &&
           new Date(account.transactions[i].date) <  
           new Date(fltrObj.endDate) &&   
           account.transactions[i].type == fltrObj.type
        ){
           tranArr.push(account.transactions[i]); 
        }
    }
    return tranArr;
}

let fltrObj = {startDate:'2025-08-06T00:00:00.000Z',
               endDate:'2025-08-08T00:00:00.000Z',
               type:"INTEREST"};
console.log("🚀 ~ newACC1:", newACC1)
let fltrnewACC1 = filterAccountTransactions (newACC1, fltrObj)
console.log("🚀 ~ fltrnewACC1:", fltrnewACC1)
// ====================================================================
//Write a function to manage account freeze/unfreeze 
// , toggle account status with security checks.
//Q 7
console.log("Q7:")
function setStatus (account, statusId, managerId){
      if (!["FREEZE", "UNFREEZE"].includes(statusId)) {
        throw new Error("status must be FREEZE or UNFREEZE");
        }
      if (statusId === "FREEZE" && ! managerId.startsWith("manager")) {
        throw new Error("Only managers can freeze accounts");
       }

    account["status"] = statusId
    account["statusHistory"].push({
    action: statusId,
    by: managerId,
    date: new Date().toISOString()
    })
}

let statusId = "FREEZE"
let managerId = "manager123"
console.log("🚀 ~ newACC1:", newACC1)
setStatus (newACC1, statusId, managerId)
console.log("🚀 ~ newACC1:", newACC1)

//statusId = "FREEZE"
//managerId = "Employee123"
console.log("🚀 ~ newACC1:", newACC1)
setStatus (newACC1, statusId, managerId)
console.log("🚀 ~ newACC1:", newACC1)
// =====================================================================
//Write a function to Enforce $500 daily withdrawal limit. 
//Q 8
console.log("Q8:")

function checkdailyWithdrawallimit (account, amount){
    let AccounTrans = account.transactions;
    let sumTodaysWithdrawals = 0;
    const today = new Date().toISOString().split('T')[0];
    for(i=0;i<AccounTrans.length;i++){
        if(AccounTrans[i].type==="WITHDRAWAL" &&
           AccounTrans[i].date.startsWith(today)
        ){
         sumTodaysWithdrawals = sumTodaysWithdrawals + AccounTrans[i].amount;
        }
        
        if (sumTodaysWithdrawals+amount > 500){
           throw new Error("Daily withdrawal limit exceeded ($500 max)");
        }
    }
}
console.log("🚀 ~ newACC1:", newACC1)
checkdailyWithdrawallimit (newACC1, 300)
//withdrawal (newACC2, 600);
console.log("🚀 ~ newACC1:", newACC1)
// =====================================================================
//Write a function to validate password. 
//Q 9
console.log("Q9:")

function validatePassword(password) {
  const errors = [];
  const commonPasswords = ["password", "123456", "qwerty"];

  if (password.length < 12) {
    errors.push("Password must be at least 12 characters");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number");
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push("Password must contain a special character");
  }
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Password is too common");
  }

  console.log("🚀 ~ validatePassword ~ errors:", errors.toString());

  /*
  return {
    valid: errors.length === 0,
    reasons: errors
  };
  */
}

let password = "#Password123";
validatePassword(password);
// =====================================================================
//Write a function to validate password. 
//Q 10
console.log("Q10:")

function checkForSuspiciousActivity (account){
    let AccounTrans = account.transactions;
    let checkResult = {}
    for(i=0;i<AccounTrans.length;i++){
        if(AccounTrans[i].amount >= 10000 
        ){
            checkResult["isSuspicious"]= true;
            checkResult["alerts"].push("High-value transaction: $15000 transfer")
        }

    }
}
