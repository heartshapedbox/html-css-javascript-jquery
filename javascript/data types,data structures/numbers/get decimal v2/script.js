// write function getDecimal(), that returns the decimal part of the number

// function getDecimal()
function getDecimal(num) {
  var str = "" + num;
  var point = str.indexOf(".");
  str = str.slice(point);
  return +str;
}


console.log(getDecimal(13.842)); // 0.842
console.log(getDecimal(1.03)); // 0.03
console.log(getDecimal(-10.44)); // 0.44
