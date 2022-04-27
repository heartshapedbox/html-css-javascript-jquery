// write a function multiplyNumeric(menu) that takes the object "menu" and multiplies all its key values on 2.

var menu = {
  width: 100,
  height: 100,
  title: "menu"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
  // isNaN (checks whether a value is a number)
  // isFinite (checks whether a value is a special number: NaN/Infinity/-Infinit)
}

function multiplyNumeric(menu) {
  for (var key in menu) {
    if (isNumeric(menu[key])) {
      menu[key] *= 2;
    }
  }
  return menu;
}

console.log(multiplyNumeric(menu));

// { width: 200, height: 200, title: 'menu' }
