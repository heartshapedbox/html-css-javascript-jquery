var user = {
  login: "John",
  pass: "12345",

  output: function(result) {
    alert("User " + this.login + (result ? " is logged in." : " is not logged in. Incorrect password!"));
  },

  checkPass: function() {
    var x = this;
    ask("Please, enter your password: ",
    this.pass,
    function() {
      x.output(true);
    },
    function() {
      x.output(false);
    });
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
