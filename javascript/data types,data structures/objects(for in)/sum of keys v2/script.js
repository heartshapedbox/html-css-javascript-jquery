// write a code that counts the sum of all salaries
// if object is empty then the result is 0

var salaries = {
  "John": 100,
  "Jack": 300,
  "Jane": 250
};


var sum = 0;

for (var key in salaries) {
  sum += salaries[key];
}


console.log(sum); // 650
