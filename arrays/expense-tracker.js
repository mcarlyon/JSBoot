const account = {
    name: 'Bob Dole',
    expenses: [],
    income: [],
    addExpense: function(desc, amount){
        this.expenses.push({
            description: desc, 
            amount: amount
        })
    },
    addIncome: function(desc, amount){
        this.income.push({
            description: desc,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let total = 0
        let totalIncome = 0
        let totalExpenses = 0
        this.expenses.forEach(function(expense){
            totalExpenses += expense.amount
        })
        this.income.forEach(function(income){
            totalIncome += income.amount
        })
        total = totalIncome - totalExpenses
        return `${this.name} has a balance of $${total} in expenses. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addIncome('Wage', 1800)
account.addExpense('Example', 700)
account.addExpense('Example 2', 100)
console.log(account.getAccountSummary())