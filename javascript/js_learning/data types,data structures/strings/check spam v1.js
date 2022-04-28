// write a function checkSpam(str) that returns "true" if string "str" contains substring "viagra" or "xxx", otherwise returns "false"

function checkSpam(str) {
  if (str.toLowerCase().match("viagra") || str.toLowerCase().match("xxx")) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}


checkSpam("buy ViaGra noW"); // true
checkSpam("free xXxX"); // true
checkSpam("hello"); // false
