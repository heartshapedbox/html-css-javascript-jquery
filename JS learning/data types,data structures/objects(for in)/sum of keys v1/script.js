// write a code that counts the sum of all salaries
// if object is empty then the result is 0

var salaries = {
  "John": 100,
  "Jack": 300,
  "Jane": 250
};


function getSum(obj) {
  var sum = 0;
  for (var key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(getSum(salaries)); // 650
