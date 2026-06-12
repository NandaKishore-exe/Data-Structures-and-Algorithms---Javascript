// Fibonacci of given n

// 1 - Iterative approach

// function fibonacci(n) {
//   const arr = [];
//   arr[0] = 0;
//   arr[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }

//   return arr[n];
// }

// console.log(fibonacci(6));

// 2 - Recursive Approach

function recFibo(n) {
  if (n <= 1) return n;
  return recFibo(n - 1) + recFibo(n - 2);
}

console.log(recFibo(6));
