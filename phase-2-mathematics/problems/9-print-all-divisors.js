// Divisors always appear in pairs
// Example:
// 30 -> (1,30), (2,15), (3,10), (5,6)

// One divisor in every pair is <= √n

// So instead of checking till n,
// check only till √n

// If i divides n:
//   i is divisor
//   n/i is paired divisor

// Time  : O(√n)
// Space : O(1)

function printDivisors(n) {
  let i;

  // Small divisors
  for (i = 1; i * i < n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }

  // Large divisors
  for (; i >= 1; i--) {
    if (n % i === 0) {
      console.log(n / i);
    }
  }
}
