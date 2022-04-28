// With bind() we can get different functions from current function with fewer parameters.

function greeting(gender, age, firstName, lastName) {
  var gen = gender === "Male" || gender === "male" ? "Mr." : "Ms.";

  if (age > 25) {
    alert("Hello, " + gen + " " + firstName + " " + lastName + "!");
  } else {
    alert("Hey, " + firstName + " " + lastName + "!");
  }
}


greeting("Male", 37, "John", "Smith"); // Hello, Mr. John Smith!
greeting("Male", 22, "Steven", "Martin"); // Hey, Steven Martin!
greeting("Female", 19, "Ashley", "Turner"); // Hey, Ashley Turner!
greeting("Female", 56, "Barbara", "Star"); // Hello, Ms. Barbar Star!


var newGreeting = greeting.bind(null, "male", 44);


newGreeting("Jeremy", "Stone"); // Hello, Mr. Jeremy Stone!
