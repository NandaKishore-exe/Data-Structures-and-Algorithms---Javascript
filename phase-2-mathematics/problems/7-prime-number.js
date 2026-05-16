/*
--------------------------------
Prime Number Check
--------------------------------

Prime Number:
A number with exactly 2 factors
(1 and itself)

Steps:
1. If n == 1 -> not prime
2. Loop from 2 to √n
3. If n % i == 0
      -> not prime
4. Else prime

Why check till √n?
Because factors repeat after square root.

Example:
36

1 × 36
2 × 18
3 × 12
4 × 9
6 × 6

After this pairs repeat.

--------------------------------
Time Complexity:
O(√n)

Space Complexity:
O(1)
--------------------------------
*/

function isPrime(n) {
  if (n === 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(4));
