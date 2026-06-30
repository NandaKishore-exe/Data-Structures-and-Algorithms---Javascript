function removeDuplicates(nums) {
  let w = 0;
  if (nums.length === 0) return 0;
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] !== nums[w]) {
      w = w + 1;
      nums[w] = nums[r];
    }
  }
  return w + 1;
}

const nums = [1, 1, 2, 2, 3];

console.log(removeDuplicates(nums));
