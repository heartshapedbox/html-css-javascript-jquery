// Function is an object so we can assign the keys directly to it

function counter() {
  // counter.[[Scope]] = window
  function fn() {
    // fn.[[Scope]] = counter()
    // LexicalEnvironment = {}
    // LexicalEnvironment = fn.[[Scope]]
    return fn.count++;
  }

  // LexicalEnvironment = {fn.count: undefined}
  fn.count = 1;
  // LexicalEnvironment = {fn.count: 1}

  return fn;
}

var result = counter();

console.log(result()); // 1
console.log(result()); // 2
console.log(result()); // 3
console.log(result()); // 4
console.log(result()); // 5
