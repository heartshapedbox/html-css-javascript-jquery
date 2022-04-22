var data = {
  0: "John.",
  1: "How",
  2: "Hello,",
  3: "you?",
  4: "are",
  length: 5
};

var arr = Array.prototype.slice.call(data);
var str = arr.join(" ");

var re = /(\S+)\s(\w+)\s(\S+)\s(\S+)\s(\w+)/;
var newStr = str.replace(re, "$3 $1 $2 $5 $4");


document.write(newStr);
