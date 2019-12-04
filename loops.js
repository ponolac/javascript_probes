// FOR LOOP

/* for loops have 3 parts: 
-- initial value of a counter, 
-- a condition that is evaluated before each loop iteration,
-- a counter update after each iteration. */

// print a number 0-9

/* for (var i = 0; i < 10; i++) {     // i++ is like saying i=i+1
  console.log(i);
} */

// i is 0, check if i is less than 10, if true, log i to console AND THEN add one to i.
// i is 1, is 1 less than 10, true, log i to console, update counter/add one to i. i is now 2.
// .....
// i is 9, is 9 less than 10, yes. log i to console. add one to i.
// i is now 10. is 10 less than 10, false. exits the loop. don't log to console. don't add one to i.

// we can add two to the update counter by writing i += 2, which is like saying i=i+2.

/* var john = ["John", "Smith", 1990, "designer", false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// WHILE LOOP
var i = 0;
while (i < john.length) {
  console.log(john[i]);  
  i++;
} */

// Continue Statements are used to quit the current iteration of a loop & continue to the next iteration.
// Break Statements are used to break out of the loop and stop altogether.

var john = ["John", "Smith", 1990, "designer", false];

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !==  'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") break;
//   console.log(john[i]);
// }

// Looping backwards and looping thru arrays

// for (var i = 4; i < john.length; i--) {
//     console.log(john[i]);
// }

/* for (var i = john.length - 5; i >= 0; i--) {
    console.log(john[i]);
}

var names = ['Peter', 'Tom', 'Jim'];
for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
} */

/* // Conventions

// bad - no space after for
for(var i = 0; i < 11; i++) {
	console.log(i);
}

// bad - no space between expressions
for (var i = 0;i < 11;i++) {
	console.log(i);
}

// bad - no space between ) and {
for (var i = 0; i < 11; i++){
	console.log(i);
}

// bad - missing indentation
for (var i = 0; i < 11; i++) {
console.log(i); //Here is missing indentation
}

// bad - { on a new line
for (var i = 0; i < 11; i++)
{
	console.log(i);
}

// good
for (var i = 0; i < 11; i++) {
	console.log(i);
} */

// an infinite loop is caused by conditions that are evaluated and always return true
