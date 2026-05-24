// 1. Start from i = 2
// 2. Check if i divides n
// 3. If divisible:
//      print i
//      divide n by i
// 4. Keep dividing until not divisible
// 5. Move to next i
// 6. Continue till i * i <= n
// 7. If n > 1 at end, print n

// Time Complexity  : O(√n)
// Space Complexity : O(1)

function primeFactors(n) {
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      console.log(i);
      n = n / i;
    }
  }

  if (n > 1) {
    console.log(n);
  }
}

primeFactors(12);
