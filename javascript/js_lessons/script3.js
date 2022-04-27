//Напиши функцию map(fn, arr), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Обрати внимание: функция не должна изменять переданный ей массив.//

var gen = sequence(0, 2);

function sequence(start, step) {
  return function() {
    if (start === undefined) {
      start = 0;
    } else if (step === undefined) {
      step = 1;
    }
    start += step;
    return start - step;
  }
}


function take(gen, x) {
  var arr = [];
  for (var i = 0; i < x; i++) {
    arr[i] = gen();
  }
  return arr;
}


var array = take(gen, 7);


function square(x) {
  return x * x;
}


function map(fn, arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i]);
  }
  return newArr;
}


console.log(map(square, array)); // [ 0, 4, 16, 36, 64, 100, 144 ]
