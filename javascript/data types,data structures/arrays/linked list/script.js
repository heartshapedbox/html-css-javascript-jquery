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

var arr = [];

function printList(list) {
  while(list) {
    arr.push(list.value);
    list = list.next;
  }
}

printList(list);


console.log(arr); // [ 1, 2, 3, 4 ]
