// Make a string buffer
// Make an object: var buffer = makeBuffer();
// When function buffer(arguments) is called function makeBuffer() returns function buffer(value) which keepes the value.
// When function buffer() is called without arguments the keeped values should be returned

function makeBuffer() {
  var storage = [];

  function buffer(value) {
    storage.push(value);
    return storage.join("");
  }
  return buffer;
}

var buffer = makeBuffer();

buffer(1);
buffer(2);
buffer(3);

console.log(buffer()); // 123
