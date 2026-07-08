// Problem Statement

// Given an array nums, return the running sum of the array.

// A running sum at index i is the sum of all elements from index 0 to i.

// Example 1
// Input

// nums = [1,2,3,4]

// Output

// [1,3,6,10]

// Why?

// Index 0

// 1

// ----------------

// Index 1

// 1 + 2 = 3

// ----------------

// Index 2

// 1 + 2 + 3 = 6

// ----------------

// Index 3

// 1 + 2 + 3 + 4 = 10

// Example 2
// Input

// [3,1,2,10,1]

// Output

// [3,4,6,16,17]

// Brute Force Approach - O(n²)

// function brutePrefixSum(nums) {
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;

//     for (let j = 0; j <= i; j++) {
//       sum = sum + nums[j];
//     }

//     result.push(sum);
//   }

//   return result;
// }

// const nums = [1, 2, 3, 4];

// console.log(brutePrefixSum(nums));

// Optimised approach

// Time Complexity - O(n) and Space Complexity - O(n)

function runningSum(nums) {
  const result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    result.push(sum);
  }
  return result;
}

const nums = [3, 1, 2, 10, 1];

console.log(runningSum(nums)); // [3,4,6,16,17]
