function findMinimum(nums) {
  if (nums.length === 0) return null;

  let minElement = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minElement) {
      minElement = nums[i];
    }
  }

  return minElement;
}

const nums = [-10, -5, -20];

console.log(findMinimum(nums));
