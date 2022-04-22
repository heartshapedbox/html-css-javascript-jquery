// Write the function that finds the sum of the elements of the uninterrupted subarray


arr = [10, -2, 2, 3, -9, 2];

function getMaxSubSum(arr) {
  var max = 0;
  var part = 0;

  for (var i = 0; i < arr.length; i++) {
    part += arr[i];
    max = Math.max(max, part);
    if (part < 0) {
      part = 0;
    }
  }
  return max;
}

console.log(getMaxSubSum(arr)); // 13
