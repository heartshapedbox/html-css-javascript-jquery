// write a function multiplyNumeric(menu) that takes the object "menu" and multiply all its key values on 2.

var menu = {
  width: 100,
  height: 100,
  title: "menu"
};

function multiplyNumeric(menu) {
  for (var key in menu) {
    if (typeof menu[key] === "number") {
      menu[key] *= 2;
    }
  }
  return menu;
}

console.log(multiplyNumeric(menu));

// { width: 200, height: 200, title: 'menu' }
