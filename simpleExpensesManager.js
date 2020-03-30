
let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpenses = function (account, amount) {
    return account.expenses = account.expenses + amount;
}

let addIncome = function (account, income) {
    account.income = account.income + income;
}

let resetAccount = function (account) {
    account.income = 0;
    account.expenses = 0;
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    return console.log(`Account for ${account.name} has $${balance}. $${account.income} income. $${account.expenses} in expenses.`);
}

addIncome(myAccount, 2000);
addExpenses(myAccount, 2.50);
addExpenses(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

// OUTPUT: 
// Account for Andrew Mead has $1837.5. $2000 income. $162.5 in expenses.
//  Account for Andrew Mead has $0. $0 income. $0 in expenses.

