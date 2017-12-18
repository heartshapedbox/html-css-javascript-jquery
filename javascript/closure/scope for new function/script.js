// if a function is created by a "new Function" then its [[Scope]] feature refers not to the current "Lexical Environment", but to the "window"
// new Function ([arg1[, arg2[, ...argN]],] functionBody)



// LexicalEnvironment = {x: undefined}
var x = 1;
// LexicalEnvironment = {x: 1}

function f() {
  // f.[[Scope]] = window
  // LexicalEnvironment = {x: undefined}
  var x = 2;
  // LexicalEnvironment = {x: 2}

  //fn.[[Scope]] = window
  // LexicalEnvironment = {}
  var fn = new Function("", "alert(x)"); // 1

  return fn;
}

f()(); // 1
