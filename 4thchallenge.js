// Using objects and methods.
// Create an object for Mark and John with properties for their full name, mass, and height.
// Add a method to each object to calculate the BMI.
// Save the BMI to the object

var mark = {
  fullName: "Mark Johnson",
  mass: 75,
  height: 1.79,
  calcBMI: function() {
    // return this.mass / (this.height * this.height);
    this.markBMI = this.mass / (this.height * this.height);
  }
};

mark.calcBMI();
console.log(mark);

var john = {
  fullName: "John Mead",
  mass: 81,
  height: 1.92
};
console.log(john);

// Also, return the BMI from the method

// Log to the console who has the highest BMI. They might have the same BMI.

// BMI = mass / height^2 = mass / (height * height). (mass in KG and height in Meter).
