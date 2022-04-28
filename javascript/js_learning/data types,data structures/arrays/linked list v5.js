// Write a function printList(list) that deduces the elements of the list in turns with the recursion

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
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

printList(list);

/*
1
2
3
4
*/
