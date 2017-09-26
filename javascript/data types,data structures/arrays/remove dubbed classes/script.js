// Write a function removeClass(obj, cls) that removes the dubbed classes "cls" if they exist and return the object "obj". The function returns the object "obj" as it is if the class "cls" does not exist.

// object
var obj = {
  productList: "Sugar, Coffee, Salt, Salt, Salt, Salt, Salt, Salt, Salt, Chocolate, Salt, Salt, Tea, Fruits, Salt, Salt, Salt, Vegetables"
};

// function removeClass() checks
function removeClass(obj, cls) {

  // if the object has any key
  for (var key in obj) {
    if (obj.productList) {
      // makes the array
      var arr = obj.productList.split(", ");
      var pos = 0;
      // goes through the array
      for (var i = 0; i < arr.length; i++) {
        // if the array has dubbed classes "cls" removes them
        if (arr[i] == cls) {
          arr.splice(i, 1);
          // returns one step back
          i--;
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
