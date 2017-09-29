// Write a code that sortes the array "users" of objects "user01", "user02" etc. by the key "age".

var user01 = {
  name: "Mike",
  age: 23
};

var user02 = {
  name: "Samanta",
  age: 19
};

var user03 = {
  name: "John",
  age: 33
};

var user04 = {
  name: "Hanna",
  age: 27
};

var users = [user01, user02, user03, user04];
var sortedByAge = [];

function compareAge(a, b) {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
}

users.sort(compareAge);

for (var i = 0; i < users.length; i++) {
  sortedByAge.push(users[i]);
}

console.log(sortedByAge);

/*
[ { name: 'Samanta', age: 19 },
  { name: 'Mike', age: 23 },
  { name: 'Hanna', age: 27 },
  { name: 'John', age: 33 } ]
*/
