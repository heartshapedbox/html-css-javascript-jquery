// write function truncate(str, maxlength) that checks string "str" length and if it more than "maxlength" then trancates it and changes string end to ellipsis
// overall length should be equal "maxlength"

var str = "In any programming language, code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over.";

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + "...";
  }
  return str;
}

var newStr1 = truncate(str, 205);
var newStr2 = truncate(str, 50);
var newStr3 = truncate(str, 29);
var newStr4 = truncate(str, 15);

console.log(newStr1); // In any programming language, code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over.
console.log(newStr2); // In any programming language, code needs to make...
console.log(newStr3); // In any programming languag...
console.log(newStr4); // In any progr...
