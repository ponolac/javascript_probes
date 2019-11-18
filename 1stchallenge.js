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
