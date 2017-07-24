var user = {
  login: "John",
  pass: "12345",

  output: function(result) {
    alert("User " + this.login + (result ? " is logged in." : " is not logged in. Incorrect code!"));
  },

  checkPass: function() {
    ask("Please, enter your password: ", this.pass, this.output.bind(this, true), this.output.bind(this, false));
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
