// Write function getRandom() that generates values in range of min-max and includes min and max.

function getRandom(min, max) {
  var x = max - min; // 7
  x = x + 1; // 8
  min = min - 1; // 2
  return Math.floor(min + Math.random() * x) + 1;
}

console.log(getRandom(3, 10)); // 4
console.log(getRandom(3, 10)); // 3
console.log(getRandom(3, 10)); // 10
console.log(getRandom(3, 10)); // 7
console.log(getRandom(3, 10)); // 9
