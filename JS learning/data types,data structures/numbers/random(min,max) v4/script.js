// Write function getRandom() that generates values in range of min-max and includes min and max.

function getRandom(min, max) {
  var x = max + 1 - min;
  return Math.round(min - 0.5 + Math.random() * x);
}

console.log(getRandom(5, 10)); // 5
console.log(getRandom(5, 10)); // 6
console.log(getRandom(5, 10)); // 9
console.log(getRandom(5, 10)); // 10
console.log(getRandom(5, 10)); // 6
