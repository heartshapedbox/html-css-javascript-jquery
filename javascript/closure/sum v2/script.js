// Write function sum() that operates as sum(a)(b)..(n) == a+b+..+n

function sum(a) {
  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  }

  return f;
}


alert(sum(1)(2)); // 3
alert(sum(5)(6)(7)); // 18
alert(sum(15)(16)(17)(18)); // 66
