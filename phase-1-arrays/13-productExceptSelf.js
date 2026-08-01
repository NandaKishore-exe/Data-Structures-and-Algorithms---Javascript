// Problem #13 — Product of Array Except Self (LeetCode 238)

const nums = [1, 2, 3, 4];

// Brute Force Approach - O(n²)

// function productExceptSelf(nums) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     let acc = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue;
//       acc = acc * nums[j];
//     }
//     result.push(acc);
//   }
//   return result; // output - [24,12,8,6]
// }

// console.log(productExceptSelf(nums));

// Optimised Approach - O(n) -> result[i] = multiply all on left * multiply all on right

function productExceptSelf(nums) {
  const len = nums.length;

  const result = Array(len);
  const left = Array(len);
  const right = Array(len);

  left[0] = 1;

  for (let i = 1; i < len; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  // left = [1, 1, 2, 6]

  right[len - 1] = 1;

  for (let j = len - 2; j >= 0; j--) {
    right[j] = right[j + 1] * nums[j + 1];
  }

  // right = [ 24 , 12 , 4 , 1]

  for (let k = 0; k < len; k++) {
    result[k] = left[k] * right[k];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
