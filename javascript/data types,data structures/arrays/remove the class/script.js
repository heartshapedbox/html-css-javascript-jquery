// Write a function removeClass(obj, cls) that removes the class "cls" if it exists and return the object "obj". The function returns the object "obj" as it is if the class "cls" does not exist.

// object
var obj = {
  productList: "Sugar, Coffee, Salt, Chocolate, Tea, Fruits, Vegetables"
};

// function removeClass() checks
function removeClass(obj, cls) {

  // if the object has any key
  for (var key in obj) {
    if (obj.productList) {
      // makes the array
      var arr = obj.productList.split(", ");
      // goes through the array
      for (var i = 0; i < arr.length; i++) {
        // if the array has the class "cls" removes it
        if (arr[i] == cls) {
          arr.splice(i, 1);
        }
      }
      // returns the object
      return obj.productList = arr.join(", ");
    }
  }
}

// run the function
removeClass(obj, "Salt");
console.log(obj.productList); // Sugar, Coffee, Chocolate, Tea, Fruits, Vegetables

// run the function
removeClass(obj, "Fruits");
console.log(obj.productList); // Sugar, Coffee, Chocolate, Tea, Vegetables

// run the function
removeClass(obj, "Water"); // Sugar, Coffee, Chocolate, Tea, Vegetables
console.log(obj.productList);
