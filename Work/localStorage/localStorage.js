let form = document.querySelector("#form");
let name = document.querySelector("#fname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let contact = document.querySelector("#contant");
let role = document.querySelector("#role");

function loadData() {
    let allData = JSON.parse(localStorage.getItem('employees')) || [];

    let result = "";
    allData.forEach((record, index) => {
        let row = `<tr>
        <td>${index + 1}</td>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>${record.contact}</td>
        <td>${record.role}</td>
        <td><button onclick="deleteEmployee(${index})">Delete</button> <button onclick="editEmployee(${index})">Edit</button></td>
        </tr>`;
        result += row;
    });

    document.querySelector('#viewdata').innerHTML = result;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let employee = {
        name: fname.value,
        email: email.value,
        password: password.value,
        contact: contact.value,
        role: role.value,
    };

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees.push(employee);

    localStorage.setItem("employees", JSON.stringify(employees));
    form.reset();

    loadData();
});

function deleteEmployee(index) {
    let allData = JSON.parse(localStorage.getItem('employees')) || [];
    allData.splice(index, 1);

    localStorage.setItem("employees", JSON.stringify(allData));
    loadData();
}

loadData();