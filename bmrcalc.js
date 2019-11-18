// BMR calculator - Katch-McArdle Formula

// Calculate lean body mass. Boer formula, for women: LBM = (0.252 × W) + (0.473 × H) − 48.3

// The LBM formula for men is: LBM = (0.407 × W) + (0.267 × H) − 19.2

/* var userWeight = parseInt(prompt("What is your weight (kg)?"), 10);
var userHeight = parseInt(prompt("What is your height (cm) ?"), 10);
var leanBodyMass = 0.252 * userWeight + 0.473 * userHeight - 48.3;
console.log("Your lean body mass is: " + leanBodyMass + "kg"); */

// Code refactor below. Made multiple var's easier to read/compact.

var userWeight, userHeight, leanBodyMass;
userWeight = parseInt(prompt("What is your weight (kg)?"), 10);
userHeight = parseInt(prompt("What is your height (cm) ?"), 10);
leanBodyMass = 0.252 * userWeight + 0.473 * userHeight - 48.3;
console.log("Your lean body mass is: " + leanBodyMass + "kg");

// BMR = 370 + (9.7976 x LBM) kcal/day, where LBM is lean body mass in pounds.

var basalMetabolicRate = 370 + 21.6 * leanBodyMass;
console.log("Your BMR is " + basalMetabolicRate + " kcal/day");

// Store average womens BMR. Then use if/else to make a decision: show the user if their bmr result it above or below the average.

var averageWomensBMR = 1400;
if (basalMetabolicRate > averageWomensBMR) {
  console.log(
    "Your BMR is higher than the average. The average is 1,400 kcal/day."
  );
} else {
  console.log("Your BMR is below the average. \nThe average is 1,400 kcal/day.");
}

/* We can calculate TDEE by multiplying BMR by an activity factor:
 *Sedentary* = 1.2
 *Lightly Active* = 1.375
 *Moderately Active* = 1.55
 *Very Active* = 1.725
 *Extremely Active* = 1.9 */

var activityFactor = parseFloat(prompt("What is your activity level?"), 10);
var tDEE = basalMetabolicRate * activityFactor;
console.log(
  "Your TDEE is " +
    tDEE +
    "\nEat at TDEE level to maintain weight. \nEat above TDEE to gain weight. \nEat below TDEE to lose weight."
);
