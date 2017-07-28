function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt("Enter a value: ");
  }
}



var accumulator = new Accumulator(0);

accumulator.read(); // 2
accumulator.read(); // 3
accumulator.read(); // 4
accumulator.read(); // 5

alert("The result of operation: " + accumulator.value); // The result of operation: 14
