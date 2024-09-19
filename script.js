let budget = 0;
let totalExpense = 0;

function setBudget() {
    const budgetInput = document.getElementById('budget').value;
    budget = parseFloat(budgetInput);
    document.getElementById('budgetDisplay').textContent = `Budget: $${budget}`;
    calculateRemaining();
}

function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = document.getElementById('expenseAmount').value;

    if (expenseName && expenseAmount) {
        const expenseList = document.getElementById('expenseList');
        const listItem = document.createElement('li');
        listItem.textContent = `${expenseName}: $${expenseAmount}`;
        expenseList.appendChild(listItem);

        totalExpense += parseFloat(expenseAmount);
        document.getElementById('totalExpense').textContent = totalExpense;
        calculateRemaining();
    }
}

function calculateRemaining() {
    const remainingBalance = budget - totalExpense;
    document.getElementById('remainingBalance').textContent = remainingBalance;
}
