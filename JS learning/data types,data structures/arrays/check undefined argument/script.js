// Check if the function f(x) has an "undefined" argument
// if there is a first argument - let it be 1
// if there is no first argument - let it be 0

function f(x) {
  for (var i = 0; i < arguments.length; i++) {
    x = 1;
  }

  if (x === undefined)  x = 0;
  console.log(x);
}


f(undefined); // 1
f(); // 0
f("a"); // 1
