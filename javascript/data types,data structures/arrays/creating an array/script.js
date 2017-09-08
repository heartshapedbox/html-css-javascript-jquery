// make an array "styles" with elements "Jazz", "Blues"
var styles = ["Jazz", "Blues"];
console.log(styles); // [ 'Jazz', 'Blues' ]

// add an element "Rock" to the end of the array
styles.push("Rock");
console.log(styles); // [ 'Jazz', 'Blues', 'Rock' ]

// replace the second last element to the element "Classic"
styles[styles.length - 2] = "Classic";
console.log(styles); // [ 'Jazz', 'Classic', 'Rock' ]

// remove first elemnet form the array
styles.shift();
console.log(styles); // [ 'Classic', 'Rock' ]

// add elements "Rap" and "Reggae" to the beginning of the array
styles.unshift("Rap", "Reggae");
console.log(styles); // [ 'Rap', 'Reggae', 'Classic', 'Rock' ]
