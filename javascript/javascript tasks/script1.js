//Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.//

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


console.log(gen()); // 0
console.log(gen()); // 2
console.log(gen()); // 4
console.log(gen()); // 6
console.log(gen()); // 8
