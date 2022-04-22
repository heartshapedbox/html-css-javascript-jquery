//Get result of division sum of array objects on length of array.

var arr = {
  objects: [7, 13, 2, 5, 0.3]
};

var result;


function getNumber(arr) {
  var sum = arr.reduce(function(a, b) {
    return a + b;
  });

  this.result = sum / arr.length;
}


getNumber.call(arr, arr.objects);


document.write(arr.result);
