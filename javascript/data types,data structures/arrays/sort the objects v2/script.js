// Write a code that sortes the array "users" of objects "user01", "user02" etc. by the key "name".

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
var sortedByName = [];

function compareName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
}

users.sort(compareName);

for (var i = 0; i < users.length; i++) {
  sortedByName.push(users[i]);
}

console.log(sortedByName);

/*
[ { name: 'Hanna', age: 27 },
  { name: 'John', age: 33 },
  { name: 'Mike', age: 23 },
  { name: 'Samanta', age: 19 } ]
*/
