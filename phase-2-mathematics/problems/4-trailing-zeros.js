// Trailing zeros in given factorial n

// Trailing zeros are formed by:
// 10 = 2 × 5

// In factorials, 2s are always more than 5s
// So we only count number of 5s

// Algorithm:
// 1. Start with i = 5
// 2. Count multiples of 5 using n / 5
// 3. Count extra 5s from 25 using n / 25
// 4. Count extra 5s from 125 using n / 125
// 5. Continue until i > n

// Example for n = 25:
// 25 / 5  = 5
// 25 / 25 = 1
// Total trailing zeros = 6

// Time Complexity  -> O(log n)
// Space Complexity -> O(1)

function countTrailingZeros(n) {
  let result = 0;

  for (let i = 5; i <= n; i = i * 5) {
    result += Math.floor(n / i);
  }

  return result;
}
