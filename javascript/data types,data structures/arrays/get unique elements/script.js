// Write a function unique(arr) that returns the array that includes only unique elements of the array

var arr = ["element1", "element1", "element1", "element3", "element3", "element4", "element4", "element4", "element2", "element2"];

var newArr = [];
for (var i = 0; i < arr.length; i++) {
  newArr.push(arr[i]);
}

function unique(newArr) {
  var obj = {};
  var result = [];

  for (var j = 0; j < newArr.length; j++) {
    var num = newArr[j].slice(-1);
    obj[num] = newArr[j];
  }

  for (var key in obj) {
    result.push(obj[key]);
  }
  return result.sort();
}

console.log(unique(arr)); // [ 'element1', 'element2', 'element3', 'element4' ]
