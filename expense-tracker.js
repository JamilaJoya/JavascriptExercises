const account = {
    name: 'Andrew',
    income: [],
    expenses: [],
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalIncome = 0
        let totalExpenses = 0
        let accountBalance = 0
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        this.expenses.forEach(function (expenses) {
            totalExpenses = totalExpenses + expenses.amount
        })
        accountBalance = totalIncome - totalExpenses
        return `${this.name} has a  balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}
account.addIncome('Job salary', 2500)
account.addExpense('Rent', 900)
account.addIncome('Kela', 300)
account.addExpense('gym', 100)

console.log(account.getAccountSummary())

/*
OUTPUT

Andrew has a $1800 of a balance. $2800 in income. $1000 in expenses.
*/
