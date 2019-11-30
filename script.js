// var firstName = "John";
// console.log(firstName);

// var lastName = "Smith";
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = "Teacher";
// console.log(job);

// // all variable names must start with $ _ or letter.

// /**********
//  * Variable mutation and type coercion
//  */

// var firstName = "John";
// var age = 28; // Type Coercion

// console.log(firstName + " " + age); // this works because of Type Coercion. JS converted the age integer into a string.
// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ". Is he married? " +
//     isMarried
// );

// // Variable Mutation

// age = "twenty";
// job = 23;

// alert(job);

// var lastName = prompt("what is the last name?");
// console.log(firstName + " " + lastName);

// /****
//  * Basic Operators
//  */

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical Operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // Typeof Operator
// console.log(typeof johnOlder);
// console.log(typeof ageMark);

// // Operator Precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple Operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple Assignment
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // More operators
// // x = x * 2;
// // x *= 2;
// // console.log(x);
// x += 10;
// console.log(x);
// x -= 6;
// console.log(x);
// x -= 35;
// console.log(x);

// x += 1;
// console.log(x);

/*********
 * If / Else Statements
 */

// var firstName = "John";
// var civilStatus = "single";

// // log a string to the console whether he is married or not

// if (civilStatus === "married") {
//   console.log(firstName + ' is married');
// } else {
//   console.log(firstName + ' is single');
// }

/********* Boolean Logic */

// log to console, depending on johns age, is he a boy, teen, young man, man.

// var firstName = 'John';
// var age = 24;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// };

/* Ternary Operator (aka conditional operator) allows you to write an if/else statement all in one line. */

// var firstName = "John";
// age = 17;

// age >= 18
//   ? console.log(firstName + " drinks beer.")
//   : console.log(firstName + " drinks coca-cola.");

// var drink = age >= 18 ? "beer" : "juice";

/* Switch Statement (can replace multiple if-else statements for readability) */

// var job = "instructor";
// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teaches kids how to code.");
//     break;
//   case "driver":
//     console.log(firstName + " drives a bus.");
//     break;
//   case "poolman":
//     console.log(firstName + " cleans pools.");
//     break;
//   case "cop":
//     console.log(firstName + " writes tickets as a cop.");
//     break;
//   default:
//     console.log(firstName + " does nothing.");
// }

// // switch statement practice / refactor

// // var firstName = 'John';
// // var age = 24;

// // if (age < 13) {
// //     console.log(firstName + ' is a boy.');
// // } else if (age >= 13 && age < 20) {
// //     console.log(firstName + ' is a teenager.');
// // } else if (age >= 20 && age < 30) {
// //     console.log(firstName + ' is a young man.');
// // } else {
// //     console.log(firstName + ' is a man.');
// // };

// var firstName = "John";
// var age = 99;

// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teen.");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a young man.");
//     break;
//   default:
//     console.log(firstName + " is a man.");
// }

// // Switch statement.

// // Muscle-building time-scale. Year(s) of proper training, potential rate of muscle gain per year.

// var yearsOfTraining = 2;
// switch (true) {
//   case yearsOfTraining === 1:
//     console.log(
//       "If there is 1 year of proper training, expect 20-25lbs (2lbs/mo)"
//     );
//     break;
//   case yearsOfTraining === 2:
//     console.log(
//       "If there is 2 years of proper training, expect 10-12lbs (1lb/mo)"
//     );
//     break;
//   case yearsOfTraining === 3:
//     console.log(
//       "If there is 3 years of proper training, expect 5-6lbs (0.5lb/mo)"
//     );
//     break;
//   default:
//     console.log("If there is 4+ years of proper training, expect2-3lbs");
// }

// /* Truthy and Falsy values, and equality operators */

// // Falsy values: undefined, null, 0, '', NaN     These will be converted to false when evaluated in a true/false if/else condition.

// // Truthy values: NOT falsy values.

// // A way to test if a var has been defined or not:
// var height = 0;
// if (height || height === 0) {
//   // ie: so if (height var "exists or is defined"), then (height) is converted to true, and if block is entered.
//   console.log("variable is defined");
// } else {
//   console.log("variable has NOT been defined");
// }

// // Equality operators == and ===
// // Type coercion means the two data types don't have to match when using the non-strict equality operator: ==
// height = 23;
// if (height == "23") {
//   console.log("The == operator does type coercion");
// }

// // Equality operators: strict ===, and abstract ==
// // Type Coercion ==
// var force = 81;
// if (force == "81") {
//   console.log("The == operator does type coercion");
// }

// // Check if a variable exists using typeof
// var temp;
// if (typeof temp == "undefined") {
//   console.log("temp does NOT exist");
// } else {
//   console.log("temp exists");
// }

// // Check if a variable exists using if-else
// var volume;
// if (volume) {
//   console.log("variable is defined");
// } else {
//   console.log("variable is NOT defined");
// }

/* Functions */

// function calcOilChange(currentMileage) {
//   return 5000 + currentMileage;
// }

// var changeCarOil = calcOilChange(113284);
// alert("Change your car oil when you reach this mileage: " + changeCarOil);

// function calculateAge(birthYear) {
//   return 2019 - birthYear;
// }

// var ageJim = calculateAge(1995);
// var ageMichael = calculateAge(1989);
// var ageTony = calculateAge(1990);
// alert(
//   "Jim is " +
//     ageJim +
//     ". " +
//     "Michael is " +
//     ageMichael +
//     ". " +
//     "Tony is " +
//     ageTony +
//     ". "
// );

// Can pass in more than one argument into a function. Also added if-else.

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years.");
//   } else if (retirement < 0) {
//     console.log(firstName + " is already retired.");
//   }
// }

// yearsUntilRetirement(1990, "John");
// yearsUntilRetirement(1950, "Jimmy");
// yearsUntilRetirement(1996, "Jason");

// Function statements and expressions.

// function declarations perform actions:
// function whatDoYouDo(job, firstName) {}

// function expressions always produce a value:
// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case "professor":
//       return firstName + " teaches people.";
//     // no break here because the function immediately finishes when using return.
//     case "truck driver":
//       return firstName + " drives a truck.";
//     case "designer":
//       return firstName + " designs things.";
//     default:
//       return firstName + " does something else.";
//   }
// };

// console.log(whatDoYouDo("professor", "John"));
// console.log(whatDoYouDo("truck driver", "Jimmy"));
// console.log(whatDoYouDo("valet", "James"));

// // Arrays (zero-based)

// // Initialize new array
// var carMFG = ["Ford", "Datsun", "Honda"];
// var carModels = new Array("F250", "240z", "C-RV");
// console.log(carMFG);
// console.log(carMFG.length);

// // Mutate array data
// carMFG[2] = "Mazda";
// carMFG[carMFG.length] = "Dodge";
// console.log(carMFG);

// // Different data types
// var carDetails = ["Ford", "F150", 1990, "blue", false];

// // push method adds element to end of array
// carDetails.push(1995);
// // unshift method adds element to beginning of array
// carDetails.unshift(false);
// // pop method removes element from end of array
// carDetails.pop();
// carDetails.pop();
// // shift method removes element from beginning of array
// carDetails.shift();
// console.log(carDetails);
// // indexOf will return the position of the argument that is passed in e.g. inside this array:
// console.log(carDetails.indexOf("blue"));

// var isCarTypeAvailable =
//   carDetails.indexOf("Toyota") === -1
//     ? "Toyota is NOT an option"
//     : "Toyota is an option";
// console.log(isCarTypeAvailable);

// Objects and properties

   // object literal (curly braces)
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: "false"
};
console.log(john.job); // can access object properties using dot notation
console.log(john["birthYear"]); // can access obj prop using brackets with a string

var x = "isMarried"; // can access obj prop using a variable and referencing it inside brackets
console.log(john[x]);

// Mutate object
john.job = 'designer'; // mutate object data using dot notation
john['isMarried'] = true; // mutate object data using bracket notation
console.log(john);

// Initialize new object     New Object Syntax
var jane = new Object();
jane.hairColor = 'Brown';
jane.dogName = 'Doggo';
jane.hasCat = false;
jane['lastName'] = 'Smith';
console.log(jane.lastName);
console.log(jane);

 // note: objects can hold different types of data like arrays and other objects. But we can also attach functions to objects, which are then called methods.
 