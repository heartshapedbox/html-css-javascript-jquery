// Write function getRandom() that generates values in range of min-max and does not includes max.

function getRandom(min, max) {
  var result = Math.floor(Math.random() * (max - min));
  return result + min;
}

console.log(getRandom(3, 10)); // 4
console.log(getRandom(3, 10)); // 3
console.log(getRandom(3, 10)); // 6
console.log(getRandom(3, 10)); // 7
console.log(getRandom(3, 10)); // 9
