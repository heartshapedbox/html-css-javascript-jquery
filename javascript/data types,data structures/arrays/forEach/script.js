// Method "forEach" used for going through an array

var arr = ["Water", "Food", "Clothes", "Vehicle", "Building"];

arr.forEach(function(item, i, arr) {
  console.log(i + ": " + item + " (from the array: " + arr + ")");
});

/*
0: Water (from the array: Water,Food,Clothes,Vehicle,Building)
1: Food (from the array: Water,Food,Clothes,Vehicle,Building)
2: Clothes (from the array: Water,Food,Clothes,Vehicle,Building)
3: Vehicle (from the array: Water,Food,Clothes,Vehicle,Building)
4: Building (from the array: Water,Food,Clothes,Vehicle,Building)
*/
