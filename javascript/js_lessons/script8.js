var data = [1, 2, 2, 4, 8, 3, 2, 4];

function f(array) {
  array = array.filter(function(e, i){
    return array.indexOf(e) == i;
  });
  return array;
};


var result = f(data);

console.log(result);
