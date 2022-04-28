var user = {
  login: "John",
  pass: "12345",

  output: function(result) {
    alert("User " + this.login + (result ? " is logged in." : " is not logged in. Incorrect password!"));
  },

  checkPass: function() {
    ask("Please, enter your password: ",
    this.pass,
    function() {
      this.output(true);
    }.bind(this),
    function() {
      this.output(false);
    }.bind(this));
  }
};


function ask(question, answer, correct, wrong) {
  var result = prompt(question);
  if (result === answer) {
    correct();
  } else {
    wrong();
  }
}


var Smith = user;
user = null;
Smith.checkPass();
