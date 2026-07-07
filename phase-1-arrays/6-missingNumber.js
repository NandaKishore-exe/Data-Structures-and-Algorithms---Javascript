// Problem Statement

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1
// Input

// nums = [3,0,1]

// Output

// 2

// Because the numbers should be

// 0 1 2 3

// Missing

// 2
// Example 2
// Input

// nums = [0,1]

// Output

// 2
// Example 3
// Input

// nums = [9,6,4,2,3,5,7,0,1]

// Output

// 8

function missingNumber(nums) {
  const seen = new Map();
  const n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    seen.set(nums[i], true);
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!seen.has(i)) return i;
  }
}

let nums = [0, 1];

console.log(missingNumber(nums));

// Time complexity - O(n) + O(n) = O(n)
// Space complexity - O(n)

// Optimised solution here we have optimised O(n) with 0(1)

function missingNumber(nums) {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
}
