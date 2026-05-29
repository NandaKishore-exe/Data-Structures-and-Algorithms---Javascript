// Pattern:
//     Two Pointers

// Algorithm:
//     1. Initialize slow pointer at index 0.
//     2. Scan array using fast pointer.
//     3. If current element is not equal to val:
//            place element at slow pointer position
//            move slow pointer forward
//     4. Return slow pointer count.

// Time Complexity:
//     O(n)

// Space Complexity:
//     O(1)

var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};
