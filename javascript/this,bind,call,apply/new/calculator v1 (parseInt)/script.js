function Calculator() {
  this.read = function() {
    this.a = prompt("Enter first number: ");
    this.b = prompt("Enter second number: ");
  }

  this.addition = function() {
    // this.a = "string", parseInt(this.a) = number
    return parseInt(this.a) + parseInt(this.b);
  }

  this.multiplication = function() {
    // this.a = "string", parseInt(this.a) = number
    return parseInt(this.a) * parseInt(this.b);
  }
}


var calculator = new Calculator();

calculator.read(); // 2, 3

alert("The result of addition: " + calculator.addition()); // The result of additon: 5
alert("The result of multiplication: " + calculator.multiplication()); // The result of multiplication: 6
