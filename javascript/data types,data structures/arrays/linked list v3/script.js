// Write a function printReverseList(list) that deduces the elements of the list in the reverse with the loop

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
  arr = [];
  while(list) {
    arr.push(list.value);
    list = list.next;
  }
  arr.reverse();

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
