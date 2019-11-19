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

var firstName = "John";
age = 17;

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks coca-cola.");

var drink = age >= 18 ? "beer" : "juice";
