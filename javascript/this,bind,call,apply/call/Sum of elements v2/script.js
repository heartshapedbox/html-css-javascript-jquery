function sumArg() {
  arguments.reduce = [].reduce;
  res = arguments.reduce(function(a, b) {
    return a + b;
  });
  return res;
}


alert(sumArg(1, 2, 3, 4, 5)); // 15
