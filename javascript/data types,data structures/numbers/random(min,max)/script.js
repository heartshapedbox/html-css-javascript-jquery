// Write function getRandom() that generates values in range of min-max and does not includes max.

function getRandom(min, max) {
  var x = max - min;
  return Math.floor(min + Math.random() * x);
}

console.log(getRandom(3, 10)); // 4
console.log(getRandom(3, 10)); // 3
console.log(getRandom(3, 10)); // 6
console.log(getRandom(3, 10)); // 7
console.log(getRandom(3, 10)); // 9
