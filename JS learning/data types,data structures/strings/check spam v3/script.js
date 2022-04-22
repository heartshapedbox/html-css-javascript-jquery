// write a function checkSpam(str) that returns "true" if string "str" contains substring "viagra" or "xxx", otherwise returns "false"

function checkSpam(str) {
  ~str.toLowerCase().indexOf("viagra") || ~str.toLowerCase().indexOf("xxx") ? console.log(true) : console.log(false);
}


checkSpam("buy ViaGra noW"); // true
checkSpam("free xXxX"); // true
checkSpam("hello"); // false
