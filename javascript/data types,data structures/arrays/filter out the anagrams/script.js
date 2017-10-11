// Write a function aclean(arr) that returns the array of words cleared from anagrams

// an array
var arr = ["sing","earth","silent","sign","listen","heart"];

// a function aclean(arr) that
function aclean(arr) {
  // creates an object "obj"
  var obj = {};
  // creates an array "result"
  var result = [];

  // goes through the array "arr" and
  for (var i = 0; i < arr.length; i++) {
    // splits each elements of the array to the letters, sorts them and joins them
    var sorted = arr[i].split("").sort().join("");
    // adds into the object "obj" keys "sorted" with values "arr[i]"
    obj[sorted] = arr[i];
  }

  // goes through the object "obj" and adds values from the keys into the array "result"
  for (var key in obj) {
    result.push(obj[key]);
  }
  return result;
}

console.log(aclean(arr)); // [ 'sign', 'heart', 'listen' ]
