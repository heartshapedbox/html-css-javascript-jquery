//bind(user.output) returns such kind of wrapper-function that bind "user.output" with context "user". It will be called after 2000ms.

var user = {
  firstName: "John",
  lastName: "Smith",

  output: function() {
    alert("Hello, " + this.firstName + " " + this.lastName + "!");
  }
};


function bind(fn, context) {
  return function() {
    return fn.apply(context, arguments);
  }
}



setTimeout(bind(user.output, user), 2000);
