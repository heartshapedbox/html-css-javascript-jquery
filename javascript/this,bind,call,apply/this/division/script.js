//Get result of division sum of array objects on length of array.

var arr = {
  scores: [10, 5, 2.5, 1, 7]
};


var result;


function getNumber(arr) {
  var sum = arr.reduce(function(a, b) {
    return a + b;
  });

  this.result = sum / arr.length;
}



getNumber(arr.scores);


document.write(result);
