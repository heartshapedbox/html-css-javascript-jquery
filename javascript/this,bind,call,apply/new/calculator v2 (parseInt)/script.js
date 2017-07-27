function Calculator() {
  this.calculate = function(str) {
    var arr = str.split(" ");
    var a = parseInt(arr[0]);
    var b = parseInt(arr[2]);
    var op = arr[1];

    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "/") {
      return a / b;
    } else if (op === "*") {
      return a * b;
    } else if (op === "**") {
      return Math.pow(a, b);
    } else {
      return NaN;
    }
  }
}



var calculator = new Calculator();

alert("The result of addition: " + calculator.calculate("5 + 3")); // The result of additon: 8
alert("The result of subtraction: " + calculator.calculate("17 - 2")); // The result of subtraction: 15
alert("The result of division: " + calculator.calculate("17 / 2")); // The result of division: 8.5
alert("The result of multiplication: " + calculator.calculate("17 * 2")); // The result of multiplication: 34
alert("The result of square: " + calculator.calculate("17 ** 2")); // The result of square: 289
