// Method "arr.map" is used for the transformation of the array

var arr = ["element1", "element2", "element3", "element4", "element5"];

arr = arr.map(function(arg) {
  return arg.slice(0,-1);
});

console.log(arr); // [ 'element', 'element', 'element', 'element', 'element' ]
