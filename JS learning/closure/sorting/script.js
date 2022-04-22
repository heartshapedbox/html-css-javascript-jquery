// We have "users" array with objects
// Write a function byField(field), which may be used in "sort" to compare objects by "field"


var users = [
  {
    name: "John",
    surname: "Smith",
    age: 30
  }, {
    name: "Mike",
    surname: "Stone",
    age: 45
  }, {
    name: "Steve",
    surname: "Brown",
    age: 17
  }
];

function byField(field) {
  return function f(a,b) {
    if (a[field] > b[field]) {
      return 1;
    }
    return -1;
  }
}

console.log("------Sorty by name:------");
users.sort(byField("name"));
users.forEach(function(user) {
  console.log(user.name);
});

/*
John
Mike
Steve
*/

console.log("------Sorty by surname:------");
users.sort(byField("surname"));
users.forEach(function(user) {
  console.log(user.name);
});

/*
Steve
John
Mike
*/

console.log("------Sorty by age:------");
users.sort(byField("age"));
users.forEach(function(user) {
  console.log(user.name);
});

/*
Steve
John
Mike
*/
