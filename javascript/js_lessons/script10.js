const data = [0, [1, 2, [3, 4, [5, [6, 7, [8, [9, 10]]]]]]];

function f(array){
  var newArray = [];
  newArray[0] = "";
  newArray[1] = array;

  newArray = newArray.reduce(function(e,i){
    return e + i;
  });

  var numArray = newArray.split(",").map(function(e){
    return +e;
  });
  return numArray;
};

const result = f(data);

console.log(result);
