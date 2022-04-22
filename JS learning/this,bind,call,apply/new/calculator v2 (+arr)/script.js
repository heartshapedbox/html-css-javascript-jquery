function Calculator() {
  this.calculate = function(str) {
    var arr = str.split(" ");
    var a = +arr[0];
    var b = +arr[2];
    var op = arr[1];

    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "/") {
      return a / b;
    } else if (op === "*") {
      return a * b;
    } else if (op === "***") {
      return Math.pow(a, b);
    } else {
      return NaN;
    }
  }
}



var calculator = new Calculator();

alert("The result of addition: " + calculator.calculate("2 + 3")); // The result of addition: 5
alert("The result of subtraction: " + calculator.calculate("2 - 3")); // The result of subtraction: -1
alert("The result of division: " + calculator.calculate("2 / 3")); // The result of division: 0.6666
alert("The result of multiplication: " + calculator.calculate("2 * 3")); // The result of multiplication: 6
alert("The result of exponentiation: " + calculator.calculate("2 *** 3")); // The result of exponentiation: 8
