let balance = 0;

function addTransaction() {
    const desc = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    if (desc && !isNaN(amount)) {
        balance += amount;
        document.getElementById("balance").innerText = balance;
        const row = document.createElement("tr");
        row.innerHTML = `<td>${desc}</td><td>${amount}</td><td><button onclick="removeTransaction(this, ${amount})">Delete</button></td>`;
        document.getElementById("transactions").appendChild(row);
        document.getElementById("description").value = "";
        document.getElementById("amount").value = "";
    }
}

function removeTransaction(button, amount) {
    balance -= amount;
    document.getElementById("balance").innerText = balance;
    button.parentElement.parentElement.remove();
}