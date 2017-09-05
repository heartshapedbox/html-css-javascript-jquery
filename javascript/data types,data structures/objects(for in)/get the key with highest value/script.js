// write a code that returns the key with the highest value
// if object is empty then the result is "No data."

var salaries = {
  "John": 75,
  "Jack": 300,
  "Jane": 250,
  "Mike": 700,
  "Peter": 215
};


var max = 0;
var name = "";
var result = "";
for (var key in salaries) {
  if (salaries[key] > max) {
    max = salaries[key];
    name = key;
    result = name + ": " + max;
  }
}


console.log(result || "No data."); // Mike: 700
