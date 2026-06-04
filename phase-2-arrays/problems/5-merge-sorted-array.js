// Problem:
//     Merge Sorted Array

// Pattern:
//     Three Pointers (Reverse Merge)

// Algorithm:
//     1. Keep i at last valid element of nums1.
//     2. Keep j at last element of nums2.
//     3. Keep k at last position of nums1.
//     4. Compare nums1[i] and nums2[j].
//     5. Place larger element at nums1[k].
//     6. Move corresponding pointer.
//     7. Continue until nums2 is exhausted.

// Time Complexity:
//     O(m + n)

// Space Complexity:
//     O(1)

// Key Learning:
//     Merge from the end to avoid overwriting
//     valid elements in nums1.

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

let m = 3;
let n = 3;

//  output - [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // Last valid element in nums1
  let j = n - 1; // Last element in nums2
  let k = m + n - 1; // Last position in nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

console.log(merge(nums1, m, nums2, n));
