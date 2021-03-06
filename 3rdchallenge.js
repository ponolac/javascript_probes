// Tip Calculator

// create an array with the tips
var tipTotals = [];

// create another array with tips plus bill
var billTotals = [124, 48, 268];

// create a function that calculates the tip
var tip = function calcTip(tipPercentage, billAmount) {
  return tipPercentage * billAmount;
};

console.log(tip(0.2, 35));

// to calculate 20% of a value, multiply the value by 0.2

// Tip 20% of bill when bill is < $50
// Tip 15% of bill when bill is between $50-$200
// Tip 10% of bill when bill is > $200

// alternative solution using if else:

// function tipCalculator(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill <= 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }

// console.log(tipCalculator(30));

// var bills = [124, 48, 268];

// var tips = [
//   tipCalculator(bills[0]),
//   tipCalculator(bills[1]),
//   tipCalculator(bills[2])
// ];

// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips, finalValues);

// Objects and properties

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: 'false'
};
console.log(john.job); // can access object properties using dot notation 
console.log(john['birthYear']); // can access obj prop using brackets with a string

var x = 'isMarried'; // can access obj prop using a variable and referencing it inside brackets
console.log(john[x]);