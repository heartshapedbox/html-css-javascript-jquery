// Write a function ucFirst(str) that returns string "str" with upper case first letter

var str = "string";

function ucFirst(str) {
  var firstLetter = str[0];
  firstLetter = firstLetter.toUpperCase();

  var otherLetters = str.slice(1);
  return firstLetter + otherLetters;
}


console.log(str); // string
console.log(ucFirst(str)); // String
