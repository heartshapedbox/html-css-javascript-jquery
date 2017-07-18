//Using "bind", create a result() function that will give us a double value. result() passes its argumnets to the sum() function after those ones that specified within "bind". Also use timeout (2000ms) for result() function.

//result() is a partial function of the sum().


function sum() {
  var a = 0;
  for(var i = 0; i < arguments.length; i++) {
    a += arguments[i];
  }
  return a;
}


var result = sum.bind(null, 2, 5);

setTimeout(function() {
  alert("Result of operation: " + result(1, 2, 15));
}, 2000); // Result of operation: 25;
