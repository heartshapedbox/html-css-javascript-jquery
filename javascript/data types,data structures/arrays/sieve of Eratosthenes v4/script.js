// Make "Sieve of Eratosthenes" by using an array. Find all prime numbers and return an array of these numbers.

// A prime number is a natural number that has exactly two distinct natural number divisors: 1 and itself. To find all the prime numbers less than or equal to a given integer n by Eratosthenes' method:
// 1) Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
// 2) Initially, let p equal 2, the smallest prime number.
// 3) Enumerate the multiples of p by counting to n from 2*p in increments of p, and mark them in the list (these will be 2*p, 3*p, 4*p, ...; the p itself should not be marked).
// 4) Change p to the next number
// 5) When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.

// make an array
var arr = [];

// fill the array by numbers from 1 to 100
for (var i = 2; i <= 100; i++) {
  arr[i] = i;
}

// mark with "-" multiples of p from 2*p in increments of p
// change p to the next number 3, 4.. and repeat
for (var p = 2; p < arr.length; p++) {
  for (var i = 2*p; i < arr.length; i = i + p) {
    arr[i] = "-";
  }
}

// make a new array "newArr" that takes all numbers from the array "arr"
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i])) {
    newArr.push(arr[i]);
  }
}

console.log(newArr); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]
