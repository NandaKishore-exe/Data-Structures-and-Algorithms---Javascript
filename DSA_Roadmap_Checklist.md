# 🚀 Namaste DSA Progress Tracker

## 📊 Progress Summary

| Topic                         | Total | Done | Progress |
| ----------------------------- | ----- | ---- | -------- |
| Arrays                        | 9     | 6    | 67%      |
| Linked List                   | 14    | 0    | 0%       |
| Strings                       | 12    | 0    | 0%       |
| Stack & Queues                | 10    | 0    | 0%       |
| Binary Search                 | 10    | 0    | 0%       |
| Two Pointers & Sliding Window | 12    | 0    | 0%       |
| Binary Tree                   | 18    | 0    | 0%       |
| Binary Search Tree            | 5     | 0    | 0%       |
| Heap                          | 5     | 0    | 0%       |
| Backtracking                  | 12    | 0    | 0%       |
| Greedy                        | 12    | 0    | 0%       |
| Dynamic Programming           | 15    | 0    | 0%       |
| Graphs                        | 10    | 0    | 0%       |

**Overall:** 6 / 144 Problems Completed

---

# 1. Arrays

| #   | Problem                         | Status | Pattern                           | Time   | Space |
| --- | ------------------------------- | ------ | --------------------------------- | ------ | ----- |
| 1   | Remove Duplicates               | ✅     | Two Pointers (Array Compression)  | O(n)   | O(1)  |
| 2   | Remove Element                  | ✅     | Two Pointers (Array Compression)  | O(n)   | O(1)  |
| 3   | Reverse String                  | ✅     | Two Pointers (Opposite Direction) | O(n)   | O(1)  |
| 4   | Best Time to Buy and Sell Stock | ✅     | Running Minimum / Prefix Minimum  | O(n)   | O(1)  |
| 5   | Merge Sorted Array              | ✅     | Three Pointers (Reverse Merge)    | O(m+n) | O(1)  |
| 6   | Move Zeroes                     | ✅     | Two Pointers (Array Compression)  | O(n)   | O(1)  |
| 7   | Max Consecutive Ones            | ⬜     |                                   |        |       |
| 8   | Missing Number                  | ⬜     |                                   |        |       |
| 9   | Single Number                   | ⬜     |                                   |        |       |

---

# 🧠 Patterns Learned

## 1. Two Pointers (Array Compression)

Problems:

- Remove Duplicates
- Remove Element
- Move Zeroes

Template:

```js
let slow = 0;

for (let fast = 0; fast < nums.length; fast++) {
  if (condition) {
    nums[slow] = nums[fast];
    slow++;
  }
}
```

---

## 2. Two Pointers (Opposite Direction)

Problems:

- Reverse String

Template:

```js
let left = 0;
let right = arr.length - 1;

while (left < right) {
  swap(left, right);
  left++;
  right--;
}
```

---

## 3. Three Pointers (Reverse Merge)

Problems:

- Merge Sorted Array

Template:

```js
let i = m - 1;
let j = n - 1;
let k = m + n - 1;
```

---

## 4. Running Minimum / Prefix Minimum

Problems:

- Best Time to Buy and Sell Stock

Template:

```js
let minValue = nums[0];

for (let i = 1; i < nums.length; i++) {
  minValue = Math.min(minValue, nums[i]);
  answer = Math.max(answer, nums[i] - minValue);
}
```

---

# 📌 Legend

- ⬜ Todo
- ✅ Solved
- 🔁 Revisit

---

# 🎯 Next Problems

- Max Consecutive Ones
- Missing Number
- Single Number

Goal: Complete Arrays (9/9) before moving to Linked Lists.
