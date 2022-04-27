// write a function extractCurrencyValue(str) that extracts number from the string "str"

var str = "$120.4";

function extractCurrencyValue(str) {
  var arr = str.split("");
  arr.shift();
  return str = +arr.join("");
}

console.log(extractCurrencyValue(str)); // 120
console.log(typeof extractCurrencyValue(str)); // number
