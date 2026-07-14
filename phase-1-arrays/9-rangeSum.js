// Brute Force

// function sumRange(startIndex, endIndex) {
//   let totalSum = 0;

//   for (let i = startIndex; i <= endIndex; i++) {
//     totalSum = totalSum + nums[i];
//   }

//   return totalSum;
// }

// Optimised Approach using prefix sum formula

class NumArray {
  constructor(nums) {
    this.prefix = [];

    let sum = 0;

    for (let num of nums) {
      sum += num;
      this.prefix.push(sum);
    }
  }

  sumRange(left, right) {
    if (left === 0) {
      return this.prefix[right];
    }

    return this.prefix[right] - this.prefix[left - 1];
  }
}

const obj = new NumArray([-2, 0, 3, -5, 2, -1]);

obj.sumRange(2, 5);

obj.sumRange(0, 2);

obj.sumRange(2, 2);
