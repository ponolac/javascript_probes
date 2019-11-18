// bmi formula: mass / height^2 = mass / (height * height).

// store mark and john's mass (kg) and height (meters) in variables

var markMass, johnMass, markHeight, johnHeight;
markMass = 75;
johnMass = 81;
markHeight = 1.79;
johnHeight = 1.92;

// calculate both their bmi's

var markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);

var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

// create a boolean variable containing information about whether Mark has a higher BMI than John.

// var higherBMI = markBMI > johnBMI;
// console.log(higherBMI);
// console.log('Is mark\'s bmi higher than john\'s? the answer is ' + higherBMI + '! ' + 'congrats to the winner. you won a car.');

// refactor using if else statement

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}