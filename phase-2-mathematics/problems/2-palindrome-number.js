function isPalindrome(n) {
  if (n < 0) return false;

  let original = n;
  let reversed = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
  }

  return original === reversed;
}

// Time Complexity - O(log n)
// Space Complexity - O(1)
