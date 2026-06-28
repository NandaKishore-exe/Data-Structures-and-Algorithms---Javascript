// Brute Force Approach - Time Complexity : O(n²) and Space Complexity : O(1)

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// let nums = [2, 7, 11, 15];
// let target = 10;

// console.log(twoSum(nums, target));

// Optimised Approach using hashmap - Time Complexity : O(n) and Space Complexity : O(n)

function optimisedTwoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

let nums = [2, 7, 11, 15];
let target = 9;

console.log(optimisedTwoSum(nums, target));

/*
=========================================
Problem : Two Sum
Approach : HashMap
Time Complexity : O(n)
Space Complexity : O(n)
=========================================

Algorithm

1. Create an empty HashMap.

2. Traverse the array once.

3. For every current number,
   calculate the complement.

   complement = target - currentNumber

4. Check whether the complement
   already exists inside the HashMap.

5. If it exists,
   return the stored index and
   current index.

6. Otherwise,
   store the current number
   along with its index
   inside the HashMap.

7. Continue until the array ends.

8. If no pair is found,
   return an empty array.
*/
