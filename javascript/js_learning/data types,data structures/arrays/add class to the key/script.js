// Make a function addClass(obj, cls) that adds the class "cls" into the key "productList" if it is not there yet

// object
var obj = {
  productList: "Sugar, Coffee, Salt, Chocolate, Tea, Fruits, Vegetables"
};

// function addClass(obj, cls) checks
function addClass(obj, cls) {
  var arr = [];

  // if the object has any keys
  for (var key in obj) {

    // and if it has "productList" key then makes the array "arr" from it
    if (obj.productList) {
      arr = obj.productList.split(", ");

      // function goes through the array and checks if the array has "cls" class
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
          return;
        }
      }

      // and if it hasn't then adds the class
      arr.push(cls);
      obj.productList = arr.join(", ");
    }
  }
}

// run function
addClass(obj, "Water");
console.log(obj.productList); // Sugar, Coffee, Salt, Chocolate, Tea, Fruits, Vegetables, Water

addClass(obj, "Milk");
console.log(obj.productList); // Sugar, Coffee, Salt, Chocolate, Tea, Fruits, Vegetables, Water, Milk
