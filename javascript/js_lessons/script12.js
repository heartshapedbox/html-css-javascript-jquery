var data1 = [3, 5, 1, 2, 7, 8, 4, 6];
var data2 = [2, 0, 0, 1, 10, 9, 0, 8, 5];

var data3 = ["a", "b", "c", "x", "e"];
var data4 = ["x", "y", "z", "a", "f"];
var data5 = ["m", "n", "a", "v", "w"];

var data6 = ["s", "t", "c", "x", "e"];
var data7 = ["x", "y", "b", "c", "s"];
var data8 = ["a", "b", "x", "z", "w"];

function f(...arrays) {
  var firstArray = arrays[0];
  var otherArrays = arrays.slice(1);

  for (var i = 0; i < otherArrays.length; i++) {
    firstArray = firstArray.map(function(e){
      return e == otherArrays[i][i];
    });
  };
  return firstArray;
};

var result1 = f(data1, data2);
var result2 = f(data3, data4, data5);
var result3 = f(data6, data7, data8);

console.log(result1);
