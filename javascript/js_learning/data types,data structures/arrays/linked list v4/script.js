// Write a function printList(list) that deduces the elements of the list in turns with the loop

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

function printList(list) {
  var arr = [];

  while (list) {
    arr.push(list.value);
    list = list.next;
  }

  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printList(list);

/*
1
2
3
4
*/
