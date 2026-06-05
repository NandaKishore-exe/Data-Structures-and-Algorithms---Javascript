// Problem:
//     Missing Number

// Pattern:
//     Mathematical Formula (Sum of N Natural Numbers)

// Algorithm:
//     1. Calculate expected sum of numbers from 0 to n.
//     2. Calculate actual sum of elements in the array.
//     3. Subtract actual sum from expected sum.
//     4. Return the difference as the missing number.

// Time Complexity:
//     O(n)

// Space Complexity:
//     O(1)

// Key Learning:
//     Use the formula n * (n + 1) / 2 to find
//     the expected sum and compare it with the
//     actual array sum.

var missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;

  let partialSum = 0;

  for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i];
  }

  return totalSum - partialSum;
};
