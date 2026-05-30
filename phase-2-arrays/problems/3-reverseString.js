// Problem:
//     Reverse String

// Pattern:
//     Two Pointers (Opposite Direction)

// Algorithm:
//     1. Calculate the length of the string.
//     2. Find the middle index (length / 2).
//     3. Traverse from the start up to the middle.
//     4. For each index:
//            swap current character with its
//            corresponding character from the end.
//     5. Continue until all pairs are swapped.

// Time Complexity:
//     O(n)

// Space Complexity:
//     O(1)

// Key Learning:
//     Swap elements from both ends towards the center.
//     Only half of the array is traversed, but O(n/2)
//     simplifies to O(n) in Big O notation.

var reverseString = function (s) {
  let len = s.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    // swapping s[i], s[len-1-i]
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
};
