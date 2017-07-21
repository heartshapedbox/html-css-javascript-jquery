function greeting() {
  var x = this.firstName;
  var y = this.lastName;

  var arrFirstName = x.split();
  var arrLastName = y.split();

  var newArr = arrFirstName.concat(arrLastName);

  newArr.unshift("Hello ! My name is");
  newArr.push("!");

  var str = newArr.join(" ");

  alert(str); // Hello ! My name is John Smith !
}


var a = greeting.bind({
  firstName: "John",
  lastName: "Smith"
});


a();
