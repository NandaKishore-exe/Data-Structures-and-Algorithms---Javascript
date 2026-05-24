// Sieve of Eratosthenes

// 1. Assume all numbers are prime
// 2. Start from 2
// 3. Mark all multiples as non-prime
// 4. Skip already marked numbers
// 5. Traverse only till √n

// Optimization:
// Start marking from i*i
// because smaller multiples
// are already handled earlier

// Time  : O(n log log n)
// Space : O(n)

function sieve(n) {
  // Step 1: Assume all are prime
  let isPrime = new Array(n + 1).fill(true);

  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;

  // Step 2: Traverse till √n
  for (let i = 2; i * i <= n; i++) {
    // If current number is prime
    if (isPrime[i]) {
      // Mark multiples as false
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Step 3: Print primes
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      console.log(i);
    }
  }
}
