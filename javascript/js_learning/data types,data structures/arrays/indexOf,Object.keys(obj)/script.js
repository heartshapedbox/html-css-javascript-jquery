// Make the object "data" from the array "arr" and back

var arr = ["element1", "element2", "element3", "element4", "element5"];
var data = {};

// make the object
for (var i = 0; i < arr.length; i++) {
  var key = arr[i];
  data[key] = true;
}
console.log(data);
/* { element1: true,
  element2: true,
  element3: true,
  element4: true,
  element5: true }
*/

// make the array
var elements = Object.keys(data);
console.log(elements); // [ 'element1', 'element2', 'element3', 'element4', 'element5' ]
