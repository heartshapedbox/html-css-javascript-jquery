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
  while(list) {
    console.log(list.value);
    list = list.next;
  }
}

printList(list);

/*
1
2
3
4
*/
