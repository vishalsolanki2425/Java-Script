// 1.Enter Electricity UNIT and Calculate amount to pay
    // • For first 50 units, Rs: l/unit
    // • For next 100 units, 2/unit
    // • For next 100 units, 3/ units
    // • For units above 250, 4/units
    // • For all bills above 150 units an additional surcharge of 20% of total bill amount is added.

// let units = 250, bill, finalbill;
    
// if(units <= 50){
//     bill = units * 1;
//     console.log("The electric bill is:", bill,  "Rs")
// }
// else if( units <= 150){
//     bill =((units - 50) * 2 ) + ((units - 100) * 1);
//     console.log("The electric bill is:", bill,  "Rs")
// }
// else if( units <= 250){
//     bill =( (units - 150) * 3 ) + ((units - 150) * 2) + ((units - 200) * 1);
//     console.log("The electric bill is:", bill,  "Rs")
    
//     extracharge =  bill * 0.2
//     console.log("extracharge:", extracharge)
    
//     finalbill = extracharge + bill
//     console.log("The electric bill is:", bill,  "Rs")
//     console.log("The electric finalbill is:", finalbill,  "Rs")
    
// }
// else if( units > 250){
//     bill = ((units - 250) * 4 ) + ((units - 250) * 3) + ((units - 150) * 2) + ((units - 200)* 1)
//     console.log("The electric bill is:", bill,  "Rs")
    
//     extracharge =  bill * 0.2
//     console.log("extracharge:", extracharge)
    
    
//     finalbill = extracharge + bill
//     console.log("The electric bill is:", bill,  "Rs")
//     console.log("The electric finalbill is:", finalbill,  "Rs")
// }

// output : 
// The electric bill is: 550 Rs
// extracharge: 110
// The electric bill is: 550 Rs
// The electric finalbill is: 660 Rs
    

// 2. Write a JAVASCRIPT Program to print season according user input using switch case.
// (e.g. 1 to 4 for "Winter", 5 to 8 for "Summer", 9 to 12 "Monsoon" then add any number
// print "Invalid season" etc.)

// let month = prompt("Enter the month number");
// console.log(month);

// switch (month) {
//   case "1":
//     console.log("Winter");
//     break;
//   case "2":
//     console.log("Winter");
//     break;
//   case "3":
//     console.log("Winter");
//     break;
//   case "4":
//     console.log("Monsoon");
//     break;
//   case "5":
//     console.log("Monsoon");
//     break;
//   case "6":
//     console.log("Monsoon");
//     break;
//   case "7":
//     console.log("Summer");
//     break;
//   case "8":
//     console.log("Summer");
//     break;
//   case "9":
//     console.log("summer");
//     break;
//  default:
//     console.log("Invalid season");
//     break;
// }

// output: Enter the month number: 5 
// Summer


// 3.Write a JAVASCRIPT Program to find rate based on year and calculate total interest
// using nested if. (l = PRN/IOO) Principal Amount (P)
// Interest Rate
// No. of Years (N)
// (if 3<N<=5 then R is 3 | if 5<N<=8 then R is 5 | if 8<N<=12 then R is 12 | else R is 15)

// let principal = prompt("Enter the principal amount");
// let rate = prompt("Enter the rate");
// let time = prompt("Enter the time");

// if (time > 3 && time <= 5) {
//   rate = 3;
// }
// else if (time > 5 && time <= 8) {
//   rate = 5;
// }
// else if (time > 8 && time <= 12) {
//   rate = 12;
// }
// else {
//   rate = 15;
// }

// let interest = (principal * rate * time) / 100;
// console.log("The interest is " + interest);

// output: 
// Enter the principal amount: 10000 
// Enter the rate: 5 
// Enter the time: 6 
// The interest is 3000


// 4. Write a JAVASCRIPT Program to check Voting Eligibility.

// let age = prompt("Enter your age");

// if (age >= 18) {
//   console.log("You are eligible to voteing");
// }
// else if (age > 0 && age < 18) {
//   console.log("You are not eligible to voteing");
// }
// else {
//   console.log("Invalid age");
// }

// output:
// Enter your age: 20
// You are eligible to vote


// 5. Write a JAVASCRIPT Program to Classify Age Groups.

// let age = prompt("Enter your age");

// if (age >= 0 && age <= 12) {
//   console.log("You are a child");
// }
// else if (age > 12 && age <= 18) {
//   console.log("You are a teenager");
// }
// else if (age > 18 && age <= 60) {
//   console.log("You are an adult");
// }
// else if (age > 60) {
//   console.log("You are a senior citizen");
// }
// else {
//   console.log("Invalid age");
// }

// output: 
// Enter your age: 70
// You are a senior citizen