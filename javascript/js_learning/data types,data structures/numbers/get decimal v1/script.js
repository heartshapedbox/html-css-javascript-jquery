// write function getDecimal(), that returns the decimal part of the number

// function getDecimal()
function getDecimal(num) {
  num = Math.abs(num); // returns the absolute value of a number
  num = num - Math.floor(num);
  return Math.round(num * 1000) / 1000;
}


console.log(getDecimal(13.842)); // 0.842
console.log(getDecimal(1.03)); // 0.03
console.log(getDecimal(-10.44)); // 0.44
