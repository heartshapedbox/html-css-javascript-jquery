// Check if the function f(x) has an "undefined" argument
// if there is a first argument - let it be 1
// if there is no first argument - let it be 0

function f(x) {
  console.log(arguments.length ? 1 : 0);
}

f(undefined); // 1
f(); // 0
f("a"); // 1
