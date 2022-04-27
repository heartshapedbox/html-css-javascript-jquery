var str = "element1, element2, element3, element4";
var numStr = "1, 2, 3, 4";


var strArr = str.split(", ");


var numArr = numStr.split(", ");
numArr = numArr.map(function(arg) {
  return +(arg);
});


var arr = strArr.concat(numArr);


var resultStr = arr.filter(function(arg) {
  return typeof arg === "string";
});
console.log(resultStr); // [ 'element1', 'element2', 'element3', 'element4' ]


var resultNum = arr.filter(function(arg) {
  return typeof arg === "number";
});
console.log(resultNum); // [ 1, 2, 3, 4 ]
