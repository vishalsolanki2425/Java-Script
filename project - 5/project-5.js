// 1 Write a simple JavaScript program to print expected Output using the following array.
// Sample array : mycolor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange

// let array = ["Red", "Green", "White", "Black"];

// console.log(array .join("+"));
// // output: Red+Green+White+Black

// console.log(array .join(","));
// // output: Red,Green,White,Black

// console.log(array .shift("0"));
// // output: Red

// console.log(array .splice());
// // output:


/*==============================================================================================*/

// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.

// for loop

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// for (let i = 0; i < array1.length; i++) {
//   sum += array1[i];
// }
// console.log("the sum of all array elements : ",sum);

// output: 55

// foreach loop

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// array.forEach((element) => {
//   sum += element;
// });

// console.log("the sum of all array elements : ",sum);

// output: 55

/*==============================================================================================*/

// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let max = array[0];
// let min = array[0];

// for (let i = 0; i < array.length; i++) 
// {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }
// console.log("maximum value is :", max);

// for (let i = 0; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i];
//   }
// }
// console.log("minimum value is :",min);

// output:
//  maximum value : 10
//  minimum value : 1

/*================================================================================================*/

// 4.Write a JavaScript program to convert all array elements into ASCII values.

let array = ["a, b, c, d, e"];

for (let i = 0; i < array.length; i++) {
  console.log("ASCII value of " + array[i] + " is " + array[i].charCodeAt(0));
}

// output: ASCII value of 10 is 49