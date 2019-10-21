let myAccount = {
    name: 'Bob Dole',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000

let addExpense = function(account, amount){
    account.expenses += amount
}

let addIncome = function(account, amount){
    account.income += amount
}

let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function(account){
    let accountNet = account.income - account.expenses
    return `Account for ${account.name} has $${accountNet}. $${account.income} in income. $${account.expenses} in expenses`
}

addExpense(myAccount, 2.50)

let accountSum = getAccountSummary(myAccount)
console.log(accountSum)