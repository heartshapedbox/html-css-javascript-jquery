// Write a function cameliz(str) that removes hyphens and after them all words get capitalized first letter

function camelize(str) {
  var arr = str.split("-");

  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}


console.log(camelize("border-left-width")); // borderLeftWidth
console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // WebkitTransition
