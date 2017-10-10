var data = {
  in: function() {
    gender = prompt("Enter your gender:");
    name = prompt("Enter your name:");
    age = prompt("Enter your age:");
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
