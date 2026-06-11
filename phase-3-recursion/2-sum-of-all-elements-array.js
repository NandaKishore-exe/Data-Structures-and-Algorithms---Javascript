// Find sum of all elements in an array using recursion

let arr = [5, 3, 2, 0, 1];

let n = arr.length - 1;

function sum(n) {
  if (n == 0) return arr[n];
  return arr[n] + sum(n - 1);
}

console.log(sum(n));
