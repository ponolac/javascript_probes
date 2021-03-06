// FOR LOOPS

/* for loops have 3 parts: 
-- initial value of a counter, 
-- a condition that is evaluated before each loop iteration,
-- a counter update after each iteration. */

// print a number 0-9

for (var i = 0; i < 10; i++) {     // i++ is like saying i=i+1
  console.log(i);
}

// i is 0, check if i is less than 10, if true, log i to console AND THEN add one to i.
// i is 1, is 1 less than 10, true, log i to console, update counter/add one to i. i is now 2.
// .....
// i is 9, is 9 less than 10, yes. log i to console. add one to i. 
// i is now 10. is 10 less than 10, false. exits the loop. don't log to console. don't add one to i.

// we can add two to the update counter by writing i += 2, which is like saying i=i+2.

