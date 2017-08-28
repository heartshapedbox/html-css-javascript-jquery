// Write a function ucFirst(str) that returns string "str" with upper case first letter

var str = "string";

function ucFirst(str) {
  var firstLetter = str.charAt(0);
  firstLetter = firstLetter.toUpperCase();

  var otherLetters = str[1] + str[2] + str[3] + str[4] + str[5];
  return firstLetter + otherLetters;
}


console.log(str); // string
console.log(ucFirst(str)); // String
