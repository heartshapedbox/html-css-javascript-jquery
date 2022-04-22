function Calculator() {
  this.calculate = function(str) {
    var arr = str.split(" ");
    var a = Number(arr[0]);
    var b = Number(arr[2]);
    var op = arr[1];

    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "*") {
      return a * b;
    } else if (op === "/") {
      return a / b;
    } else if (op === "**") {
      return Math.pow(a, b);
    } else {
      return NaN;
    }
  }
}

calculator = new Calculator();

alert("The result of addition: " + calculator.calculate("13 + 2")); // The result of addition: 15
alert("The result of subtraction: " + calculator.calculate("13 - 2")); // The result of subtraction: 11
alert("The result of division: " + calculator.calculate("13 / 2")); // The result of division: 6.5
alert("The result of multiplication: " + calculator.calculate("13 * 2")); // The result of multiplication: 26
alert("The result of exponentiation: " + calculator.calculate("13 ** 2")); // The result of exponentiation: 169
