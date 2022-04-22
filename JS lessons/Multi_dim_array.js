// Write function which returns multi-dim array. The function gets 2 parameters: main array and sub arrays length.

function get_multi_dim_array(mainArray, arrayLength){
  var multiArray = [];
  var launch = 0;

  for (var i = 0; i < mainArray.length; i++) {
    if (launch < mainArray.length) {
      multiArray.push(mainArray.slice(launch, launch + arrayLength));
      launch = launch + arrayLength;
    };
  };
  return multiArray;
};


console.log(get_multi_dim_array([3, 5, 1, 2, 7, 4, 6], 2));
// [ [ 3, 5 ], [ 1, 2 ], [ 7, 4 ], [ 6 ] ]

console.log(get_multi_dim_array([3, 5, 1, 2, 7, 4, 6], 3));
// [ [ 3, 5, 1 ], [ 2, 7, 4 ], [ 6 ] ]
