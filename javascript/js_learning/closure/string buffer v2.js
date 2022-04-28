// Make a string buffer
// Make an object: var buffer = makeBuffer();
// When function buffer(arguments) is called function makeBuffer() returns function buffer(value) which keepes the value.
// When function buffer() is called without arguments the keeped values should be returned

function makeBuffer() {
  var txt = "";

  function buffer(value) {
    if (value == undefined) {
      value = "";
    }
    return txt += value;
  }
  return buffer;
}

var buffer = makeBuffer();

buffer(1);
buffer(2);
buffer(3);

console.log(buffer()); // 123
