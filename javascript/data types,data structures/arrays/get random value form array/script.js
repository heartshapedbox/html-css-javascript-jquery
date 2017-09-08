// write a function getRandom() that returns a random element from the array "arr"

var arr = ["element1", "element2", "element3", "element4", "element5", "element6", "element7"];

function getRandom(arr) {
  var max = arr.length;
  var random = Math.floor(Math.random() * max);
  return arr[random];
}

console.log(getRandom(arr)); // element3
console.log(getRandom(arr)); // element1
console.log(getRandom(arr)); // element2
console.log(getRandom(arr)); // element5
console.log(getRandom(arr)); // element5
console.log(getRandom(arr)); // element7
