// problem link - https://leetcode.com/problems/power-of-two/

function powerOfTwo(n) {
  if (n == 1) return true;
  else if (n < 1 || n % 2 !== 0) return false;

  return powerOfTwo(n / 2);
}

console.log(powerOfTwo(3));
