function bruteFindPivot(nums) {
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // Calculate Left Sum
    for (let j = 0; j < i; j++) {
      leftSum += nums[j];
    }

    // Calculate Right Sum
    for (let k = i + 1; k < nums.length; k++) {
      rightSum += nums[k];
    }

    // Check if current index is pivot
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

const nums = [1, 7, 3, 6, 5, 6];

console.log(bruteFindPivot(nums));
