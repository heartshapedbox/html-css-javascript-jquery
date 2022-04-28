// Write function getLengthOfChar() that returns the number of identical characters "char" from the string

var str = "In any programming language, code needs to make decisions and carry out actions accordingly depending on different inputs."

var char = "a";
var position = 0;

function getLengthOfChar() {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    var currentPosition = str.indexOf(char, position);
    if (currentPosition == -1) {
      break;
    }
    position = currentPosition + 1;
    arr.push(currentPosition);
  }
  return arr.length;
}

console.log(getLengthOfChar()); // 9
