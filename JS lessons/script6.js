const data = [['a', 1], ['b', 2]];

function getNewArray() {
  var x = [];
  for (var i = 0; i < data.length; i++) {
    x.push(data[i][0] + ": " + data[i][1]);
  }
  return x;
}

function fromPairs(array) {
  return array.reduce(getNewArray);
}

const result = fromPairs(data);

console.log(result)
