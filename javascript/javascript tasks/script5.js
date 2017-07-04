//Напиши функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать один или несколько аргументов функции.


function add() {
  var x = 0;
  for (var i = 0; i < arguments.length; i++) {
    x = x + arguments[i];
  }
  return x;
}


function partial(arg) {
  //берем все аргументы и фиксируем(отрезаем) аргумент add
  var y = Array.prototype.slice.call(arguments, 1);

  //возвращаем функцию, где слаживаем все аргументы
  return function() {
    //this = add; y = аргументы без add [1, 2, 10]; Array...call(arguments) = аргументы, который прибавляем [5] || [2, 8] || [34, 3]
    return arg.apply(this, y.concat(Array.prototype.slice.call(arguments)));
  }
}

var result = partial(add, 1, 2, 10);



console.log(result(5));  // 18
console.log(result(2, 8));  // 23
console.log(result(34, 3));  // 50
