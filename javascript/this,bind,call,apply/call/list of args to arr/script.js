//Get the list of elements as an array[].

var args;

function doSomething() {
  args = Array.prototype.slice.call(arguments);
}


doSomething("element1", "element2", "element3", "element4");


console.log(args); // ["element1", "element2", "element3", "element4"]
