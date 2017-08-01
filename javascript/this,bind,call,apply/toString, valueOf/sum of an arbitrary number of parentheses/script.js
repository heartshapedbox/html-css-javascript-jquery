// The sum of an arbitrary number of parentheses

function sum(a) {
  var currentSum = a;

    function fn(b) {
      currentSum += b;
      return fn;
    }

    fn.toString = function() {
      return currentSum;
    }
    return fn;
}


alert(sum(1)(2));  // 3
alert(sum(1)(5)(9)); // 15
alert(sum(3)(21)(-2)); // 22
alert(sum(1)(-2.7)(35)); // 33.3
alert(sum(4)(-2)(-18)); // -16
