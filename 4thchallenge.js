// Using objects and methods.
// Create an object for Mark and John with properties for their full name, mass, and height.
// Add a method to each object to calculate the BMI.
// Save the BMI to the object
// Also, return the BMI from the method
// BMI = mass / height^2 = mass / (height * height). (mass in KG and height in Meter).

var mark = {
  fullName: "Mark Johnson",
  mass: 75,
  height: 1.79,
  calcBMI: function() {
    // used a function without an argument because the height & mass will be grabbed from the current object.
    // return this.mass / (this.height * this.height);
    this.markBMI = this.mass / (this.height * this.height); // I think this will return the BMI from the method... and then store it into markBMI.
    return this.markBMI;
  }
};

var john = {
  fullName: "John Mead",
  mass: 81,
  height: 1.92,
  calcBMI: function() {
    // return this.mass / (this.height * this.height);
    this.johnBMI = this.mass / (this.height * this.height);
    return this.johnBMI;
  }
};

// mark.calcBMI(); // call the method
// john.calcBMI(); // call the method
// console.log(mark, john);

// Log to the console who has the highest BMI. They might have the same BMI.

/* if (mark.markBMI > john.johnBMI) {
  console.log(
    mark.fullName +
      "'s BMI is higher than " +
      mark.fullName +
      "'s BMI! Mark's BMI is " +
      mark.markBMI
  );
} else if (mark.markBMI < john.johnBMI) {
  console.log(
    "John's BMI is higher than Mark's BMI! John's BMI is " + john.johnBMI
  );
} else {
  console.log("Both Mark and John have the same BMI.");
} */

// We can actually call/calculate the method AND compare it at the same time, then it will directly read the value from the object. This process uses the returned values from the methods.

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    mark.fullName +
      "'s BMI is higher than " +
      mark.fullName +
      "'s BMI! Mark's BMI is " +
      mark.markBMI
  );
} else if (mark.markBMI < john.johnBMI) {
  console.log(
    "John's BMI is higher than Mark's BMI! John's BMI is " + john.johnBMI
  );
} else {
  console.log("Both Mark and John have the same BMI.");
}
