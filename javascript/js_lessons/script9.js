var data1 = [1, "a", 2, "b", "c", 3];
var data2 = [1, "a", 2, "b", "c", 3];
var data3 = [1, "a", 2, "b", "c", 3, 2];
var data4 = [1, "a", "f", 7, 2, "b", "c"];

function f(firstArray, secondArray){
  var str1 = firstArray.join();
  var str2 = secondArray.join();

  if (str1 == str2){
    return true;
  };
  return false;
};

var result = f(data1, data2);
var result2 = f(data1, data3);
var result3 = f(data2, data4);
var result4 = f(data3, data4);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
