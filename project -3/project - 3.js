// 1. Write a JAVASCRIPT Program to display the multiplication table of a given integer using a while loop.

// let number = 5 , i = 1;

// while (i <= 10) {
//   console.log(number + " x " + i + " = " + number * i);
//   i++;
// }

// output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50


// 2. Write a JAVASCRIPT Program to calculate the factorial of a given number using a while loop.

// let number = 5, fact = 1;

// while (number > 0) {
//   fact *= number;
//   number--;
// }
// console.log("factorial of 5 is : ",fact); 

// output: factorial of 5 is : 120


// 3. Write a JAVASCRIPT Program to find the Armstrong number list of a given number using a do while loop.

// let number = 153, sum = 0, temp;

// do{
//   temp = number;
//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += digit ** 3;
//     temp = Math.floor(temp / 10);
//   }

//   if (sum == number) {
//     console.log(number + " is an Armstrong number");
//   } 
//   else {
//     console.log(number + " is not an Armstrong number");
//   }

//   number++;
// }
// while (number <= 1000);

// output: 153 is an Armstrong number


// 4. Write a JAVASCRIPT Program to find the Palindrome number list of a given number using a while loop.

// let number = 105, reverse = 0, temp;

// while (number > 0) {
//   let digit = number % 10;
//   reverse = reverse * 10 + digit;
// //   number = Math.floor(number / 10);
// }
// if (reverse == number) {
//   console.log(number + " is a Palindrome number");
// }
// else {
//   console.log(number + " is not a Palindrome number");
// }

// output: 121 is a Palindrome number


// 5. Write a JAVASCRIPT Program to calculate the Fibonacci Series of a given number using a while loop.

// let number = 0, nextNumber = 1, temp;



// 9. Write a JAVASCRIPT Program that displays 1+4+9+16+....+100 = 385 on one line using a for loop.

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i * i;
// }
// console.log(sum); 

// output: 385


// 10. Write a JAVASCRIPT Program that displays below pattern using nested for loop:
            // 5
            // 5 4
            // 5 4 3
            // 5 4 3 2
            // 5 4 3 2 1

// let i,j;

// for ( i = 5; i >= 1; i--) {
//     let result = "";
//     for ( j = 5; j >= i; j--) {
//         result += j + " ";
//     }
//     console.log(result);
// }

// output:
            // 5
            // 5 4
            // 5 4 3
            // 5 4 3 2
            // 5 4 3 2 1


// 11. Write a JAVASCRIPT Program that displays below pattern using nested for loop:
            // 1
            // 2 3
            // 4 5 6
            // 7 8 9 10
            // 11 12 13 14 15

// let num = 1; 

// for (let i = 1; i <= 5; i++) {
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//         result += num + " "; 
//         num++; 
//     }
//     console.log(result);
// }

// output:
            // 1
            // 2 3
            // 4 5 6
            // 7 8 9 10
            // 11 12 13 14 15