document.addEventListener("DOMContentLoaded", function () {
    let budgetInput = document.getElementById("budgetInput");
    let setBudgetBtn = document.getElementById("setBudgetBtn");
    
    let expenseReason = document.getElementById("expenseReason");
    let expenseAmount = document.getElementById("expenseAmount");
    let addExpenseBtn = document.getElementById("addExpenseBtn");

    let totalBudgetDisplay = document.getElementById("totalBudget");
    let totalExpensesDisplay = document.getElementById("totalExpenses");
    let remainingBalanceDisplay = document.getElementById("remainingBalance");

    let expenseList = document.getElementById("expenseList");
    let resetButton = document.getElementById("resetButton");

    let budget = parseFloat(localStorage.getItem("budget")) || 0;
    let totalExpenses = parseFloat(localStorage.getItem("totalExpenses")) || 0;
    let expensesData = JSON.parse(localStorage.getItem("expensesData")) || [];

    function updateUI() {
        totalBudgetDisplay.textContent = budget.toFixed(2);
        totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
        remainingBalanceDisplay.textContent = (budget - totalExpenses).toFixed(2);
        updateExpensesList();
    }

    function updateExpensesList() {
        expenseList.innerHTML = "";
        expensesData.forEach((expense, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                ${expense.reason}: $${expense.amount.toFixed(2)}
                <button class="delete-btn" onclick="deleteExpense(${index})">❌</button>
            `;
            expenseList.appendChild(li);
        });
    }

    setBudgetBtn.addEventListener("click", function () {
        let budgetValue = parseFloat(budgetInput.value);
        if (!isNaN(budgetValue) && budgetValue > 0) {
            budget = budgetValue;
            localStorage.setItem("budget", budget);
            updateUI();
            budgetInput.value = "";
        } else {
            alert("Please enter a valid budget amount.");
        }
    });

    addExpenseBtn.addEventListener("click", function () {
        let reason = expenseReason.value.trim();
        let amount = parseFloat(expenseAmount.value);

        if (reason === "" || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid expense reason and amount.");
            return;
        }

        if (amount > budget - totalExpenses) {
            alert("Not enough budget left for this expense.");
            return;
        }

        totalExpenses += amount;
        expensesData.push({ reason, amount });
        localStorage.setItem("totalExpenses", totalExpenses);
        localStorage.setItem("expensesData", JSON.stringify(expensesData));
        
        updateUI();
        expenseReason.value = "";
        expenseAmount.value = "";
    });

    window.deleteExpense = function (index) {
        let deletedExpense = expensesData.splice(index, 1)[0]; 
        totalExpenses -= deletedExpense.amount;
        localStorage.setItem("totalExpenses", totalExpenses);
        localStorage.setItem("expensesData", JSON.stringify(expensesData));
        updateUI();
    };

    resetButton.addEventListener("click", function () {
        if (confirm("Are you sure you want to reset all data?")) {
            localStorage.clear();
            budget = 0;
            totalExpenses = 0;
            expensesData = [];
            updateUI();
        }
    });

    updateUI();
});