//Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen. Сделайте, чтобы в качестве gen можно было указать функцию с аргументами, и при вызове эти аргументы бы передавались функции gen. Аргументов может быть любое количество. Мы получаем новую функцию, которая вызвает sum, и результат пропускает через функцию square.//

function square(x) {
  return x * x;
}


function sum() {
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}


function fmap(a, gen) {
  return function (...c) {
    return a(gen(...c));
  }
}


var squareSum = fmap(square, sum);


console.log(squareSum(5, 3, 4, 1, 15)); // 784
console.log(squareSum(0, 7, 8, 35, 156)); // 42436
