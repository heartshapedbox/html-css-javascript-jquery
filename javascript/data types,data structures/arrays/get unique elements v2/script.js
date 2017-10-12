// Write a function unique(arr) that returns the array that includes only unique elements of the array

var arr = ["element1", "element1", "element1", "element3", "element3", "element4", "element4", "element4", "element2", "element2", "element1", "element1", "element4", "element2", "element3"];

function unique(arr) {
  var result = [];
  var uniqueElm = "";

  arr.sort();

  for (var j = 0; j < arr.length; j++) {
    if (uniqueElm !== arr[j]) {
      uniqueElm = arr[j];
      result.push(uniqueElm);
    }
  }
  return result;
}

console.log(unique(arr)); // [ 'element1', 'element2', 'element3', 'element4' ]
