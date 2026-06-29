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

const nums = [];

console.log(findMaximum(nums));
