function gcd(a, b) {
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

/*
-----------------------------------
Euclidean Algorithm (Optimized GCD)
-----------------------------------

Steps:
1. Continue loop until b becomes 0
2. Find remainder using a % b
3. Move b into a
4. Move remainder into b
5. When b becomes 0, a is the GCD

Example:
gcd(12, 15)

15 % 12 = 3
12 % 3 = 0

Answer = 3

-----------------------------------
Time Complexity:
O(log(min(a, b)))

Reason:
Numbers reduce very quickly using modulo (%)

-----------------------------------
Space Complexity:
O(1)

Reason:
Only few variables are used
(no extra array, recursion stack, etc.)
-----------------------------------
*/
