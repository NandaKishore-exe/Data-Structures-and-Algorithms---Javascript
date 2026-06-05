// Problem:
//     Max Consecutive Ones

// Pattern:
//     Running Count / Counting

// Algorithm:
//     1. Initialize current count and maximum count.
//     2. Traverse the array.
//     3. If current element is 1:
//            increment current count.
//            update maximum count.
//     4. If current element is 0:
//            reset current count.
//     5. Return maximum count.

// Time Complexity:
//     O(n)

// Space Complexity:
//     O(1)

// Key Learning:
//     Maintain a running count of consecutive 1s.
//     Reset the count whenever a 0 is encountered.

var findMaxConsecutiveOnes = function (nums) {
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
      maxCount = Math.max(maxCount, currCount);
    } else {
      currCount = 0;
    }
  }

  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
