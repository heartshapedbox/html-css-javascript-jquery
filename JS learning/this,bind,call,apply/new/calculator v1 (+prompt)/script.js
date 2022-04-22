function Calculator() {
  this.read = function() {

    // prompt = "string", while +prompt = Number
    this.a = +prompt("Enter first number: ");
    this.b = +prompt("Enter second number: ");
  }

  this.addition = function() {
    return this.a + this.b;
  }

  this.multiplication = function() {
    return this.a * this.b;
  }
}



var calculator = new Calculator();


calculator.read(); // 2, 3


alert("The result of addition: " + calculator.addition()); // The result of additon: 5
alert("The result of multiplication: " + calculator.multiplication()); // The result of multiplication: 6
