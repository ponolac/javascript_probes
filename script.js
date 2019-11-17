var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// all variable names must start with $ _ or letter.

/**********
 * Variable mutation and type coercion
 */

var firstName = "John";
var age = 28; // Type Coercion

console.log(firstName + " " + age); // this works because of Type Coercion. JS converted the age integer into a string.
var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);
