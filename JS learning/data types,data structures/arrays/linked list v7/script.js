// Write a function printReverseList(list) that deduces the elements of the list in the reverse with the recursion

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  var arr = [];
  arr.push(list.value);

  if (list.next) {
    printReverseList(list.next);
  }

  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printReverseList(list);

/*
4
3
2
1
*/
