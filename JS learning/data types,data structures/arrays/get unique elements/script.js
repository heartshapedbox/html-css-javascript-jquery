// Write a function unique(arr) that returns the array that includes only unique elements of the array

var arr = ["element1", "element1", "element1", "element3", "element3", "element4", "element4", "element4", "element2", "element2", "element1", "element1", "element4", "element2", "element3"];

function unique(arr) {
  var obj = {};
  var result = [];

  for (var j = 0; j < arr.length; j++) {
    var elm = arr[j];
    obj[elm] = arr[j];
  }

  for (var key in obj) {
    result.push(obj[key]);
  }
  return result.sort();
}

console.log(unique(arr)); // [ 'element1', 'element2', 'element3', 'element4' ]
