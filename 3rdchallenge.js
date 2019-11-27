// Tip Calculator

// create an array with the tips
var tipTotals = []; 

// create another array with tips plus bill
var billTotals = [124, 48, 268];

// create a function that calculates the tip
var tip = function calcTip(tipPercentage, billAmount) {
    return tipPercentage * billAmount;
}

console.log(tip(.20, 35));

// to calculate 20% of a value, multiply the value by 0.2

// Tip 20% of bill when bill is < $50
// Tip 15% of bill when bill is between $50-$200
// Tip 10% of bill when bill is > $200

// alternative solution using if else:

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill <= 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(30));