function Fn(name1, name2, name3) {
  this.name1 = name1;
  this.name2 = name2;
  this.name3 = name3;

  return {
    name1: "element1",
    name2: "element2",
    name3: "element3"
  };
}

var a = new Fn("element1, element2, element3");

// make an array
var x = a.name1.split();
var y = a.name2.split();
var z = a.name3.split();

var result = x.concat(y).concat(z);

console.log(result); // [ 'element1', 'element2', 'element3' ]
