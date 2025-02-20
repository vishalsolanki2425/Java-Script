let form = document.querySelector("#form");
let name = document.querySelector("#fname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let contact = document.querySelector("#contant");
let role = document.querySelector("#role");
let editIndex = null; 

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
        <td>
            <button onclick="editEmployee(${index})">Edit</button>
            <button onclick="deleteEmployee(${index})">Delete</button>
        </td>
        </tr>`;
        result += row;
    });

    document.querySelector('#viewdata').innerHTML = result;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    let employee = {
        name: fname.value,
        email: email.value,
        password: password.value,
        contact: contact.value,
        role: role.value,
    };

    if (editIndex === null) {
        employees.push(employee);
    } else {
        employees[editIndex] = employee;
        editIndex = null;
    }

    localStorage.setItem("employees", JSON.stringify(employees));
    form.reset();

    loadData();
});

function editEmployee(index) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let employee = employees[index];

    fname.value = employee.name;
    email.value = employee.email;
    password.value = employee.password;
    contact.value = employee.contact;
    role.value = employee.role;

    editIndex = index;
}

function deleteEmployee(index) {
    let allData = JSON.parse(localStorage.getItem('employees')) || [];
    allData.splice(index, 1);

    localStorage.setItem("employees", JSON.stringify(allData));
    loadData();
}

loadData();