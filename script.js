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

var job = "instructor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives a bus.");
    break;
  case "poolman":
    console.log(firstName + " cleans pools.");
    break;
  case "cop":
    console.log(firstName + " writes tickets as a cop.");
    break;
  default:
    console.log(firstName + " does nothing.");
}

// switch statement practice / refactor

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

var firstName = "John";
var age = 99;

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teen.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
}

// Switch statement.

// Muscle-building time-scale. Year(s) of proper training, potential rate of muscle gain per year.

var yearsOfTraining = 2;
switch (true) {
  case yearsOfTraining === 1:
    console.log(
      "If there is 1 year of proper training, expect 20-25lbs (2lbs/mo)"
    );
    break;
  case yearsOfTraining === 2:
    console.log(
      "If there is 2 years of proper training, expect 10-12lbs (1lb/mo)"
    );
    break;
  case yearsOfTraining === 3:
    console.log(
      "If there is 3 years of proper training, expect 5-6lbs (0.5lb/mo)"
    );
    break;
  default:
    console.log("If there is 4+ years of proper training, expect2-3lbs");
}

/* Truthy and Falsy values, and equality operators */

// Falsy values: undefined, null, 0, '', NaN     These will be converted to false when evaluated in a true/false if/else condition.

// Truthy values: NOT falsy values.

// A way to test if a var has been defined or not:
var height = 0;
if (height || height === 0) {
  // ie: so if (height var "exists or is defined"), then (height) is converted to true, and if block is entered.
  console.log("variable is defined");
} else {
  console.log("variable has NOT been defined");
}

// Equality operators == and ===
// Type coercion means the two data types don't have to match when using the non-strict equality operator: ==
height = 23;
if (height == "23") {
  console.log("The == operator does type coercion");
}

// Equality operators: strict ===, and abstract ==
// Type Coercion ==
var force = 81;
if (force == "81") {
  console.log("The == operator does type coercion");
}

// Check if a variable exists using typeof
var temp;
if (typeof temp == "undefined") {
  console.log("temp does NOT exist");
} else {
  console.log("temp exists");
}

// Check if a variable exists using if-else
var volume;
if (volume) {
  console.log("variable is defined");
} else {
  console.log("variable is NOT defined");
}