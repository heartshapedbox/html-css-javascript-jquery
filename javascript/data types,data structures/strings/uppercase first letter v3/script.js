// Write a function ucFirst(str) that returns string "str" with upper case first letter

var str = "string";

function ucFirst(str) {
  var arr = str.split("");
  var firstLetter = arr[0].toUpperCase();
  var removeFirstLetter = arr.shift();
  var otherLetters = arr.join("")
  return firstLetter + otherLetters;
}


console.log(str); // string
console.log(ucFirst(str)); // String
