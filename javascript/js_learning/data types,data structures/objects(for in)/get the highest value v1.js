// write a code that returns the highest value of the key
// if object is empty then the result is 0

var salaries = {
  "John": 75,
  "Jack": 300,
  "Jane": 250,
  "Mike": 700,
  "Peter": 215
};

var x = 0;
function getMax(y) {
  if (y > x) {
    x = y;
    return y;
  }
  return x;
}


for (var key in salaries) {
  getMax(salaries[key]);
}

console.log(getMax()); // 700
