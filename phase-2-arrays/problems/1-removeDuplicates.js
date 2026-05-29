// Problem: Remove Duplicates from Sorted Array

// Pattern:
//     Two Pointers

// Algorithm:
//     1. Keep slow pointer at first element.
//     2. Scan array using fast pointer.
//     3. If a new unique element is found:
//            move slow pointer
//            place unique element there
//     4. Return slow + 1.

// Time Complexity:
//     O(n)

// Space Complexity:
//     O(1)

var removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};
