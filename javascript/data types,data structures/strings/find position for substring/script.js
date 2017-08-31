// find all positions "position" for substring "target" in the string "str"

var str = "In any programming language, code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over."

var target = "a";
var position = 0;

for (var i = 0; i < str.length; i++) {
  var currentPosition = str.indexOf(target, position);

  if (currentPosition == -1) {
    break;
  }

  console.log(currentPosition);

  position = currentPosition + 1;
}


/*
3
12
20
24
44
58
63
72
80
129
139
142
156
196
*/
