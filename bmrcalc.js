// BMR calculator - Katch-McArdle Formula

// Calculate lean body mass. Boer formula, for women: LBM = (0.252 × W) + (0.473 × H) − 48.3

// The LBM formula for men is: LBM = (0.407 × W) + (0.267 × H) − 19.2

var userWeight = parseInt(prompt("What is your weight (kg)?"), 10);

var userHeight = parseInt(prompt("What is your height (cm) ?"), 10);

var leanBodyMass = 0.252 * userWeight + 0.473 * userHeight - 48.3;

console.log("Your lean body mass is: " + leanBodyMass + "kg");