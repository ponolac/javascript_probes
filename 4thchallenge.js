// Using objects and methods.
// Create an object for Mark and John with properties for their full name, mass, and height.
// Add a method to each object to calculate the BMI.
// Save the BMI to the object
// Also, return the BMI from the method

var mark = {
  fullName: "Mark Johnson",
  mass: 75,
  height: 1.79,
  calcBMI: function() {
    // return this.mass / (this.height * this.height);
    this.markBMI = this.mass / (this.height * this.height); // I think this will return the BMI from the method... and then store it into markBMI.
  }
};

mark.calcBMI();
console.log(mark);

var john = {
  fullName: "John Mead",
  mass: 81,
  height: 1.92
};

// john.calcBMI();
console.log(john);

// Log to the console who has the highest BMI. They might have the same BMI.

// BMI = mass / height^2 = mass / (height * height). (mass in KG and height in Meter).
