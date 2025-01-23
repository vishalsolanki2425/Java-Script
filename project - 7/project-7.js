// 1) Create a School class and create a student and faculty method. The Student
// method gives the student name, email and contact number as arguments and
// prints all details the same as faculty using class & object.


// class School {
//     student1(name, email, contact) {
//       console.log("Student 1:");
//       console.log(`Name: ${name}`);
//       console.log(`Email: ${email}`);
//       console.log(`Contact: ${contact}`);
//     }
//     student2(name, email, contact) {
//       console.log("Student 2:");
//       console.log(`Name: ${name}`);
//       console.log(`Email: ${email}`);
//       console.log(`Contact: ${contact}`);
//     }
//     student3(name, email, contact) {
//       console.log("Student 3:");
//       console.log(`Name: ${name}`);
//       console.log(`Email: ${email}`);
//       console.log(`Contact: ${contact}`);
//     }
  
//     faculty1(name, email, contact) {
//       console.log("Faculty 1:");
//       console.log(`Name: ${name}`);
//       console.log(`Email: ${email}`);
//       console.log(`Contact: ${contact}`);
//     }
//     faculty2(name, email, contact) {
//       console.log("Faculty 2:");
//       console.log(`Name: ${name}`);
//       console.log(`Email: ${email}`);
//       console.log(`Contact: ${contact}`);
//     }
//   }
  
//   const school = new School();
  
//   school.student1("henil ", "henil123@gmail.com", "7984926336");
//   school.student2("kushal", "khushal123@gmail.com", "9023207245");
//   school.student2("vishal", "vishal123@gmail.com", "9909295049");
  
//   school.faculty1("Dr. milan", "milan123@gmail.com", "9876543210");
//   school.faculty2("Dr. Smith", "smith123@gmail.com", "9876543210");

//   Output:
//         Student 1:
//         Name: henil
//         Email: henil123@gmail.com
//         Contact: 7984926336

//         Student 2:
//         Name: kushal
//         Email: khushal123@gmail.com
//         Contact: 9023207245
        
//         Student 3:
//         Name: vishal
//         Email: vishal123@gmail.com
//         Contact: 9909295049

//         Faculty 1:
//         Name: Dr. milan
//         Email: milan123@gmail.com
//         Contact: 9876543210
    
//         Faculty 2:
//         Name: Dr. Smith
//         Email: smith123@gmail.com
//         Contact: 9876543210

/*=========================================================================================================*/

// 2) Create a Person class with an argument name and age. create an Employee class
// through print out details of Person Class.

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
// }
  
// class Employee extends Person {

//     printDetails() {
//       console.log(`Name: ${this.name}`);
//       console.log(`Age: ${this.age}`);
//     }
// }
  
// const employee = new Employee("vishal solanki", 20);
// employee.printDetails();

// output:
    // Name: vishal solanki
    // Age: 20


/*=========================================================================================================*/

// 3) Employee class creates a constructor called print a simple message.

// class truck {
//     constructor() {
//       console.log("Truck On Way......");
//     }
//   }

// const employee = new truck();

// output:
        // Truck on way......

/*=========================================================================================================*/

// 4) Create a shape class and create a rectangle and circle method find circle
// area(3.14*r*r) and rectangle area (width*height) using with argument.

// class shape{
//     circle(r){
//         console.log('area of circle is :', 3.14*r*r);
//     }

//     rectangle (width,height){
//         console.log('area of rectangle is :', width*height);
//     }
// }

// let area = new shape();

// area.circle(5);
// area.rectangle(5,10);

// output:
    // area of circle is : 78.5
    // area of rectangle is : 50

    
/*=========================================================================================================*/