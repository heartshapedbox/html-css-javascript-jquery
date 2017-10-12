// Write a function unique(arr) that returns the array that includes only unique elements of the array

var arr = ["element1", "element1", "element1", "element3", "element3", "element4", "element4", "element4", "element2", "element2", "element1", "element1", "element4", "element2", "element3"];

function unique(arr) {
  var result = [];

  search:
  for (var i = 0; i < arr.length; i++) {
    var elm = arr[i];

    for (var j = 0; j < result.length; j++) {
      if (result[j] == elm) {
        continue search;
      }
    }
    result.push(elm);
  }
  return result.sort();
}

console.log(unique(arr)); // [ 'element1', 'element2', 'element3', 'element4' ]
