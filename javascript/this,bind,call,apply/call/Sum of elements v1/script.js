function sumArg() {
  arr = [].reduce;
  res = arr.call(arguments, function(a, b) {
    return a + b;
  });
  return res;
}


alert(sumArg(1, 2, 3, 4, 5)); // 15
