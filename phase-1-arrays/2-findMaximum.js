function findMaximum(nums) {
  if (nums.length === 0) {
    return null;
  }
  let maxElement = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxElement) {
      maxElement = nums[i];
    }
  }
  return maxElement;
}

const nums = [5, 3, 9, 2, 7];

console.log(findMaximum(nums));

// Time Complexity - O(n) and Space Complexity O(1)
