// 1. An electricity board charges the following rates to domestic users to
// discourage large consumption of energy For the first 100 units 60P per unit
// For the next 200 units BOP per unit Beyond 300 units 90P per unit All users
// are charged a minimum of Rs. 50. If the total amount is more than 300.00
// then an additional surcharge of 15 % is added.

// let units = 50, bill, finalbill;

// if(units <= 100){
//     bill = units * 0.6 + 50;
//     console.log("The electric bill is:", bill,  "Rs")
// }
// else if( units <= 200){
//     bill =( units * 0.6 ) + (units - 100 * 0.8) + 50;
//     console.log("The electric bill is:", bill,  "Rs")
// }
// else if( units <= 300){
//     bill =( units * 0.6 ) + (units - 100 * 0.8) + (units - 200* 0.9) + 50;
//     console.log("The electric bill is:", bill,  "Rs")
// }
// else if( units > 300){
//     bill = ( units * 0.6 ) + (units - 100 * 0.8) + (units - 200* 0.9) + 50;
//     extracharge =  bill * 0.15
//     console.log("extracharge:", extracharge)

//     finalbill = extracharge + bill
//     console.log("The electric finalbill is:", finalbill,  "Rs")
//     console.log("The electric bill is:", bill, "Rs")
// }


// 2. C program to check whether a person is eligible for voting or not?

// let age=65;

// if (age >= 18){
//     console.log("Eligible for voting...");
// }
// else if(age == 0){
//     console.log("invalid chose for voting..!");
// }
// else{
//     console.log("Not eligible for voting..!");
// }


// 3. Write a C program to accept the basic salary of an employee from the user.
//    Calculate the gross salary on the following basis:
        //     Basic           HRA            DA
        //   Up to 5000        8%             20%
        // 5000 to 10000       12%            30%
        // 10000 to 15000      15%            40%
        // 15000 above         20%            50%

// let basicSalary = 1000 , hra , da , grossSalary;

// if (basicSalary <= 5000){
//     hra = 0.08 * basicSalary;
//     da = 0.20 * basicSalary;
//     grossSalary = basicSalary + hra + da;
// }
// else if (basicSalary > 5000 && basicSalary <= 10000){
//     hra = 0.12 * basicSalary;
//     da = 0.30 * basicSalary;
//     grossSalary = basicSalary + hra + da;
// }
// else if (basicSalary > 10000 && basicSalary <= 15000){
//     hra = 0.15 * basicSalary;
// }
// else if (basicSalary > 15000){
//     hra = 0.20 * basicSalary;
// }
// console.log("Gross Salary is : " + grossSalary);


// 4. Compute taxes for a given income with tax slab rates as follows...
    // a. slab 1...0-2500:0%
    // b. slab 2...2500-5000: 10%
    // c. slab 3...5000-10000: 20%
    // d. slab 10000+: 30%

// let income = 5000, tax = 0;

// if (income <= 2500){
//     tax = 0;
// }
// else if (income > 2500 && income <= 5000){
//     tax = 0.10 * income;
// }
// else if (income > 5000 && income <= 10000){
//     tax = 0.20 * income;
// }
// else if (income > 10000){
//     tax = 0.30 * income;
// }
// console.log("Tax is : " + tax);


// 5. Write a program to evaluate the Total, Percentage, Grade of a student for the following constraints:
    // a. If marks > 75— grade A
    // b. If 60 < marks < 75 — grade B
    // C. If 45 < marks<60 — grade C
    // d. If 35 < marks<45 - grade D
    // e. If marks < 35 — Fail

// let marks = 450, total = 500, percentage = 0, grade = "";

// if (marks > 75){
//     grade = "A";
// }
// else if (marks > 60 && marks <= 75){
//     grade = "B";
// }
// else if (marks > 45 && marks <= 60){
//     grade = "C";
// }
// else if (marks > 35 && marks <= 45){
//     grade = "D";
// }
// else if (marks < 35){
//     grade = "Fail";
// }
// percentage = (marks/total) * 100;
// console.log("Grade is : " + grade + " and Percentage is : " + percentage);


// 6. Declare two variables x and y. Assign values to these variables. Number x
// should be printed only if it is less than 2000 or greater than 3000, and number
// y should be printed only if it is between 100 and 500.

// let x = 2000, y = 400;

// if (x < 2000 || x > 3000){
//     console.log("x is : " + x);
// }
// if (y >= 100 && y <= 500){
//     console.log("y is : " + y);
// }