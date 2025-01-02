// 1 Write a simple JavaScript program to print expected Output using the following array.
// Sample array : mycolor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange

// let mycolor = ["Red", "Green", "White", "Black"];

// console.log(mycolor.join(","));
//Output: Red,Green,White,Black

// console.log(mycolor.join("+"));
//Output: Red+Green+White+Black

// console.log(mycolor.slice(0, -1).join(","));
//Output: Red,Green,White

// console.log(mycolor[0]);
//Output: Red

// console.log(mycolor.slice(1, 3).join(","));
//Output: Green,White

// let orange = [mycolor, "Orange"];

// console.log(orange.join(","));
//Output: Red,Green,White,Black,Orange


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

// let array = ["a","b","c","d","e"];

// for (let i = 0; i < array.length; i++) {
//   console.log("ASCII value of " + array[i] + " is " + array[i].charCodeAt(0));
// }

// output: ASCII value of a is 97
//         ASCII value of b is 98
//         ASCII value of c is 99
//         ASCII value of d is 100
//         ASCII value of e is 101

/*================================================================================================*/

// 5.Write a JavaScript program to remove negative values using the filter array function.
// numbers = [-12, -5, O, 1, 5, 12, 19, 20];

// let numbers = [-12, -5, 0, 1, 5, 12, 19, 20];

// let positiveNumbers = numbers.filter((number) => number >= 0);
// console.log(positiveNumbers);

// output: [0, 1, 5, 12, 19, 20]

/*================================================================================================*/

// 6. Write a JavaScript program using array map() method and return the square of the array element.
// array = [2, 5, 6, 3, 8, 9];

// let array = [2, 5, 6, 3, 8, 9];

// let squareArray = array.map((number) => number * number);
// console.log(squareArray);

// output: [4, 25, 36, 9, 64, 81]

/*================================================================================================*/

// 7.Write a JavaScript program for sorting an array in ascending descending.
// numbers = 12,5, o, 1, 5, 12, 19, 20];
// myColor = ["Red", "Green", "White", "Black"];

// let numbers = [12, 5, 0, 1, 5, 12, 19, 20];
// let myColor = ["Red", "Green", "White", "Black"];

// let ascendingNumbers = numbers.sort((a, b) => a - b);
// console.log(ascendingNumbers);

// let descendingNumbers = numbers.sort((a, b) => b - a);
// console.log(descendingNumbers);

// let ascendingColor = myColor.sort();
// console.log(ascendingColor);

// let descendingColor = myColor.sort().reverse();
// console.log(descendingColor);

// output: [0, 1, 5, 5, 12, 12, 19, 20]
// output: [20, 19, 12, 12, 5, 5, 1, 0]

// output: ["Black", "Green", "Red", "White"]
// output: ["White", "Red", "Green", "Black"]

/*================================================================================================*/

// 8. Write a JavaScript program which filters out any string which is less than 8 characters.
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

// let filterWords = words.filter((word) => word.length >= 8);
// console.log(filterWords);

// output: ['Javascript']

/*================================================================================================*/

// 9. write a JavaScript program to print expected output for the following string.
// x = "airplane"; output:- r
// x = "oxoxoxox"; output:- "oXoXoXoX"
// x = "A New Java Book";
// output:- "a new java book" , "A NEW JAVA BOOK"

// let x = "oxoxoxox";
// let output = x.replace(/x/g, "X");
// console.log(output);

// let x = "A New Java Book";
// let output = x.toUpperCase().split(" ").join(" ");
// console.log(output);

// output: x = "oXoXoXoX"
// output: "A NEW JAVA BOOK"

/*================================================================================================*/

// 10. write a JavaScript program for array reverse.

// let array = [1, 2, 3, 4, 5];

// let reverseArray = array.reverse();
// console.log(reverseArray);

// output: [5, 4, 3, 2, 1]

/*================================================================================================*/

// 11. write a JavaScript program to check if a value is found or not?

// let array = [1, 2, 3, 4, 5]; 

// let checkValue = array.includes(5);
// console.log(checkValue);

// output: true

/*================================================================================================*/

// 12. write a JavaScript program to print your name and write the number of total characters.

// let name = "vishal solanki";

// let totalCharacter = name.length;
// console.log(totalCharacter);

// output: 14

/*================================================================================================*/

// 13. write a JavaScript program given this output using replace concept.
// Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// Output:- "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

// let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

// let output = input.replace(/dog/g, "cat");
// console.log(output);

// output: "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

/*================================================================================================*/

// 14. write a JavaScript program convert string to array.
// Input :- "Hire the top 1% freelance developers";
// Output :- ["Hire", "the", "top", "1%"]

// let input = "Hire the top 1% freelance developers";

// let output = input.split(" ");
// console.log(output);

// output: ["Hire", "the", "top", "1%", "freelance", "developers"]

/*================================================================================================*/

// 15. write a JavaScript program to convert an array to string.
// Input:- ['5', 32, 'Daniel'];
// Output: 5,32,Daniel

// let input = ['5', 32, 'Daniel'];

// let output = input.toString();
// console.log(output);

// output: 5,32,Daniel

/*================================================================================================*/