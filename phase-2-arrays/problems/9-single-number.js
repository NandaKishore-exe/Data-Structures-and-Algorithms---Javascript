// Problem:
//     Single Number

// Pattern:
//     XOR / Bit Manipulation

// Algorithm:
//     1. Initialize result as 0.
//     2. Traverse the array.
//     3. XOR current number with result.
//     4. Duplicate numbers cancel each other.
//     5. Return the remaining value.

// Time Complexity:
//     O(n)

// Space Complexity:
//     O(1)

// Key Learning:
//     XOR of same numbers becomes 0.
//     All duplicate elements cancel out,
//     leaving only the single element.

// Mental Model:
//     XOR Properties:
//
//         a ^ a = 0
//         a ^ 0 = a
//
//     Example:
//
//         4 ^ 1 ^ 2 ^ 1 ^ 2
//
//     Rearrange mentally:
//
//         4 ^ (1 ^ 1) ^ (2 ^ 2)
//
//     Duplicates cancel:
//
//         4 ^ 0 ^ 0
//
//     Remaining:
//
//         4 ^ 0
//
//         = 4
//
//     Therefore:
//         Every duplicate pair disappears.
//         Only the unique number remains.

var singleNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }

  return result;
};
