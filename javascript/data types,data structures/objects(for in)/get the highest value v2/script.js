// write a code that returns the highest value of the key
// if object is empty then the result is 0

var salaries = {
  "John": 75,
  "Jack": 300,
  "Jane": 250,
  "Mike": 700,
  "Peter": 215
};

var max = 0;
for (var key in salaries) {
  if (salaries[key] > max) {
    max = salaries[key];
  }
}


console.log(max); // 700
