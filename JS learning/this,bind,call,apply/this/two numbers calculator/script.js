var calculator = {
  out1: "Please, enter 1st number",
  out2: "Please, enter 2nd number",

  read: function() {
    a = prompt(this.out1);
    b = prompt(this.out2);
  },

  addition: function() {
    return parseInt(a) + parseInt(b);
  },

  subtraction: function() {
    return parseInt(a) - parseInt(b);
  },

  multiplication: function() {
    return parseInt(a) * parseInt(b);
  },

  division: function() {
    return parseInt(a) / parseInt(b);
  }
};



calculator.read();

alert("Result of addition: " + calculator.addition());
alert("Result of subtraction: " + calculator.subtraction());
alert("Result of multiplication: " + calculator.multiplication());
alert("Result of division: " + calculator.division());
