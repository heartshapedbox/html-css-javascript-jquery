// write a code that prompts for values and adds them to an array
// break the prompt if the value is empty string, not a number or "cancel" button is pressed
// "0" is a valid number, so when it is used, prompt does not break
// get the sum of the values


function isNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

var arr = [];

for (var i = 0; i < Infinity; i++) {
  var num = prompt("Enter the number: "); // 5, 6, 7

  if (!isNumeric(num) || num == "") {
    i = Infinity;
    arr.push(0);
  } else {
    arr.push(+num);
  }
}

alert(arr.reduce(function(a, b) {
    return a + b;
  })); // 18
