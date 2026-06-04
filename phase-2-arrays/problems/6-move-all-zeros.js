// Problem:
//     Move Zeroes

// Pattern:
//     Two Pointers (Array Compression)

// Algorithm:
//     1. Initialize slow pointer at index 0.
//     2. Scan array using fast pointer.
//     3. If current element is non-zero:
//            place it at slow pointer position
//            move slow pointer forward
//     4. After traversal, fill remaining positions
//        from slow pointer to end with zeros.
//     5. Array is now modified in-place.

// Time Complexity:
//     O(n)

// Space Complexity:
//     O(1)

// Key Learning:
//     First collect all non-zero elements.
//     Then fill remaining positions with zeros.

const nums = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
};
