// Problem 12 — Maximum Product Subarray (LeetCode 152)

const nums = [2, 3, -2, 4];

function maxProduct(nums) {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];

    const prevMax = maxProduct;
    const prevMin = minProduct;
    maxProduct = Math.max(current, current * prevMax, current * prevMin);
    minProduct = Math.min(current, current * prevMax, current * prevMin);

    result = Math.max(result, maxProduct);
  }

  return result;
}

console.log(maxProduct(nums));

// Time: O(n)

// Space: O(1)
