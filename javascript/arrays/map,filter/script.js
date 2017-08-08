var str = "element1, element2, element3";
var numStr = "1, 2, 3, 4";


var numStrToArray = numStr.split(", ");
var numArr = numStrToArray.map(function(arg) {
  return parseInt(arg);
});


var strArr = str.split(", ");
strArr = strArr.map(function(arg) {
  return arg.slice(0, -1);
});

var arr = strArr.concat(numArr);


var result1 = arr.filter(function(arg) {
  return typeof arg === "string";
});
console.log(result1); // [ 'element', 'element', 'element' ]



var result2 = arr.filter(function(arg) {
  return typeof arg === "number";
});
console.log(result2); // [ 1, 2, 3, 4 ]
