// count the keys in the object "user"

var user = {
  gender: "male",
  firstName: "John",
  lastName: "Smith",
  age: 23,
  occupation: "student"
}

var count = 0;

for (var key in user) {
  count++;
}


console.log(count); // 5
