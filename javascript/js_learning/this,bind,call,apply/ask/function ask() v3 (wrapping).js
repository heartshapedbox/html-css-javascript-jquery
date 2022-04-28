var user = {
  login: "John",
  pass: "12345",

  passCorrect: function() {
    alert("User " + this.login + " is logged in.");
  },

  passWrong: function() {
    alert("User " + this.login + " is not logged in. Incorrect password!");
  },

  checkPass: function() {
    ask("Please, enter your password: ", //question

    this.pass, //answer

    //wrapping method
    function() { //correct
      user.passCorrect();
    },

    function() { //wrong
      user.passWrong();
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


user.checkPass();
