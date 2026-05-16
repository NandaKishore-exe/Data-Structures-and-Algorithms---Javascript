/*

LCM (Least Common Multiple) => Smallest number divisible by both numbers.

LCM(4,6)

Multiples of 4: 4 8 12 16 20 ...

Multiples of 6: 6 12 18 24 ...

First common multiple: 12

LCM(4, 6) = 12

*/

/*
-----------------------------
LCM Using GCD
-----------------------------

Steps:
1. Find GCD of two numbers
2. Use formula:

   LCM = (a * b) / GCD

Example:
a = 12
b = 18

GCD = 6

LCM = (12 * 18) / 6
     = 36

-----------------------------
Time Complexity:
O(log(min(a, b)))

Space Complexity:
O(1)
-----------------------------
*/

function gcd(a, b) {
  while (b !== 0) {
    let remainder = a % b;

    a = b;
    b = remainder;
  }

  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
