// Write function getRandom() that generates values in range of 0-max and does not include max.

function getRandom(max) {
    return Math.floor(Math.random() * max);
}


console.log(getRandom(10)); // 7
console.log(getRandom(10)); // 3
console.log(getRandom(10)); // 8
console.log(getRandom(10)); // 9
console.log(getRandom(10)); // 0
