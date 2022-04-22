// write a function checkSpam(str) that returns "true" if string "str" contains substring "viagra" or "xxx", otherwise returns "false"

function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes("viagra") || str.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}


console.log(checkSpam("buy ViaGra noW")); // true
console.log(checkSpam("free xXxX")); // true
console.log(checkSpam("hello")); // false
