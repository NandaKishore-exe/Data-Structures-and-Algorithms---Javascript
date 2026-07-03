// Problem Statement

// Given an integer array nums, move all the 0s to the end of the array while maintaining the relative order of the non-zero elements.

// You must do this in-place.

// Example 1
// Input

// nums = [0,1,0,3,12]

// Output

// [1,3,12,0,0]
// Example 2
// Input

// nums = [0]

// Output

// [0]

function moveZeros(nums) {
  let w = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== 0) {
      [nums[w], nums[r]] = [nums[r], nums[w]];
      w++;
    }
  }

  return nums;
}

const nums = [0, 1, 0, 3, 12];

console.log(moveZeros(nums));
