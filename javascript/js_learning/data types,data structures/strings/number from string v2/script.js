// write a function extractCurrencyValue(str) that extracts number from the string "str"

var str = "$120";

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue(str)); // 120
console.log(typeof extractCurrencyValue(str)); // number
