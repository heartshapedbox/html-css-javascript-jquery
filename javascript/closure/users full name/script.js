// Write a function getUserFullName() that returns key value "name" and "surname" from the array of objects "users" as a string column

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

function getUserFullName() {
  var fullName = [];

  for (var key in users) {
    users[key].name += " ";
    fullName.push(users[key].name.concat(users[key].surname));
  }
  return fullName.join("\n");
}

console.log(getUserFullName());

/*
John Smith
Mike Stone
Steve Brown
*/
