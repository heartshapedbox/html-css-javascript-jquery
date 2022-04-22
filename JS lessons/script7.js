var data = [1, 2, 3, 1, 2, 5, 1.2, 4];


function without(array, ...args) {
  var returnedArray = array;

  for (var i = 0; i < args.length; i++) {
    returnedArray = returnedArray.filter(function(element) {
      return element !== args[i];
    });
  };
  return returnedArray;
};

var result = without(data, 1, 2, 4);

console.log(result);
