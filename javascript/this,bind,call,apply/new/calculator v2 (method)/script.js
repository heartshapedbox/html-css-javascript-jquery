function Calculator() {
  var method = {
    "+": function (a, b) {
      return a + b;
    },

    "-": function (a, b) {
      return a - b;
    },

    "/": function (a, b) {
      return a / b;
    },

    "*": function (a, b) {
      return a * b;
    },

    "**": function (a, b) {
      return Math.pow(a, b);
    }
  };


  this.calculate = function(str) {
    var arr = str.split(" ");
    var a = +arr[0];
    var b = +arr[2];
    var op = arr[1];

    if (!method[op]) {
      return NaN;
    }
    return method[op](a, b);
  }
}



var calculator = new Calculator();


alert("The result of additon: " + calculator.calculate("7 + 2")); // The result of additon: 9
alert("The result of subtraction: " + calculator.calculate("7 - 2")); // The result of subtraction: 5
alert("The result of division: " + calculator.calculate("7 / 2")); // The result of division: 3.5
alert("The result of multiplication: " + calculator.calculate("7 * 2")); // The result of multiplication: 14
alert("The result of square: " + calculator.calculate("7 ** 2")); // The result of square: 49
