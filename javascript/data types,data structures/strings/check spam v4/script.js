// write a function checkSpam(str) that returns "true" if string "str" contains substring "viagra" or "xxx", otherwise returns "false"

function checkSpam(str) {
  str = str.toLowerCase();
  return ~str.indexOf("viagra") || ~str.indexOf("xxx") ? true : false;
}


console.log(checkSpam("buy ViaGra noW")); // true
console.log(checkSpam("free xXxX")); // true
console.log(checkSpam("hello")); // false
