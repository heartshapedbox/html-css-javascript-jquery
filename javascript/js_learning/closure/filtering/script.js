// Write a function filter(arr,f) which gets an array "arr" and returns a new one "newArr" with such elements from "arr" for which function "f" returns "true"
// Make a set of filters: "between(a,b)" - takes all elements between a..b; "matched(a,b,c..)" - takes all matched elements; "mismatched" - takes all mismatched elements"

var arr = [1,2,3,4,5,6,7,8,9];

function filter(arr,f) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


function between(a,b) {
  return function(x) {
    return x >= a && x <= b;
  }
}


function matched() {
  var txt = "";
  for (var i = 0; i < arguments.length; i++) {
    txt += arguments[i];
  }
  txt.split("");

  return function(x) {
    return txt.indexOf(x) != -1;
  }
}


function mismatched() {
  var txt = "";
  for (var i = 0; i < arguments.length; i++) {
    txt += arguments[i];
  }
  txt.split("");

  return function(x) {
    return txt.indexOf(x) == -1;
  }
}

console.log(filter(arr,between(3,7))); // [ 3, 4, 5, 6, 7 ]
console.log(filter(arr,matched(1,3,7,9))); // [ 1, 3, 7, 9 ]
console.log(filter(arr,mismatched(1,3,7,9))); // [ 2, 4, 5, 6, 8 ]
