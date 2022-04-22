// Make a string buffer
// Make an object: var buffer = makeBuffer();
// When function buffer(arguments) is called function makeBuffer() returns function buffer(value) which keepes the value.
// When function buffer() is called without arguments the keeped values should be returned
// Add buffer.clear() method that will be clearing buffer content

function makeBuffer() {
  var txt = "";

  function buffer(value) {
    if (value == undefined) {
      value = "";
    }
    return txt += value;
  }

  buffer.clear = function() {
    return txt = "";
  }

  return buffer;
}

var buffer = makeBuffer();

buffer(1);
buffer(2);
buffer(3);

console.log(buffer()); // 123

buffer.clear();

buffer(5);
buffer(6);
buffer(7);

console.log(buffer()); // 567
