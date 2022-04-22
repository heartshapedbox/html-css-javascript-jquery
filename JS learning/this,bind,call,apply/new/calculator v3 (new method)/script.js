function Calculator() {
  var method = {
    "+": function(a, b) {
      return a + b;
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


  this.addMethod = function(name, fn) {
    return method[name] = fn;
  }
}



var calculator = new Calculator();


alert("The result of addition: " + calculator.calculate("2 + 3")); // The result of addition: 5


var expandCalculator = new Calculator();
expandCalculator.addMethod("-", function(a, b) {
  return a - b;
})
expandCalculator.addMethod("*", function(a, b) {
  return a * b;
});
expandCalculator.addMethod("/", function(a, b) {
  return a / b;
});
expandCalculator.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});


alert("The result of subtraction: " + expandCalculator.calculate("2 - 3")); // The result of subtraction: -1
alert("The result of division: " + expandCalculator.calculate("2 / 3")); // The result of division: 0.66666
alert("The result of multiplication : " + expandCalculator.calculate("2 * 3")); // The result of multiplication: 6
alert("The result of exponentiation: " + expandCalculator.calculate("2 ** 3")); // The result of exponentiation: 8
