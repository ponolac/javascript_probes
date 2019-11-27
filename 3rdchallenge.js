// Tip Calculator

// create an array with the tips
var tipTotals = []; 

// create another array with tips plus bill
var billTotals = [124, 48, 268];

// create a function that calculates the tip
var tip = function calcTip(tipPercentage, billAmount) {
    return tipPercentage * billAmount;
}

// to calculate 20% of a value, multiply the value by 0.2

// Tip 20% of bill when bill is < $50
// Tip 15% of bill when bill is between $50-$200
// Tip 10% of bill when bill is > $200