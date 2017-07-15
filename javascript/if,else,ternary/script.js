var data = {
  in: function() {
    gender = prompt("Enter your gender:");
    name = prompt("Enter your first name and last name:");
    age = prompt("Enter your agef:");
  },

  out: function() {
    var gen = gender === "Male" || gender === "male" ? "Mr." : "Ms.";

    if (age > 25) {
      alert("Hello, " + gen + " "+ name + "!");
    } else {
      alert("Hey, " + " " + name + "!");
    }
  }
};



data.in();
data.out();
