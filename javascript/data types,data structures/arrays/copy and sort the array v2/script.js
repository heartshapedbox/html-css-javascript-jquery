// Make sorted array "arrSorted" from the array "arr". Original array should not be changed.

var arr = ["element2", "element4", "element5", "element1", "element3"];
var arrSorted = [];

for (var i = 0; i < arr.length; i++) {
  arrSorted.push(arr[i]);
}

arrSorted.sort();

console.log(arr); // [ 'element2', 'element4', 'element5', 'element1', 'element3' ]
console.log(arrSorted); // [ 'element1', 'element2', 'element3', 'element4', 'element5' ]
