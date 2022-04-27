// Write function getRandom() that generates values in range of min-max and includes min and max.

function getRandom(min, max) {
  var x = max + 1 - min;
  return Math.floor(min + Math.random() * x);
}

console.log(getRandom(5, 10)); // 5
console.log(getRandom(5, 10)); // 6
console.log(getRandom(5, 10)); // 7
console.log(getRandom(5, 10)); // 7
console.log(getRandom(5, 10)); // 10
