// function bruteFindPivot(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let leftSum = 0;
//     let rightSum = 0;

//     // Calculate Left Sum
//     for (let j = 0; j < i; j++) {
//       leftSum += nums[j];
//     }

//     // Calculate Right Sum
//     for (let k = i + 1; k < nums.length; k++) {
//       rightSum += nums[k];
//     }

//     // Check if current index is pivot
//     if (leftSum === rightSum) {
//       return i;
//     }
//   }

//   return -1;
// }

// Optimised approach Time Complexity O(n) and Space Complexity O(1)

function pivotIndex(nums) {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum = leftSum + nums[i];
  }
  return -1;
}

const nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex(nums));
