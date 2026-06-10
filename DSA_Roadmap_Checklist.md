# 🚀 Namaste DSA Progress Tracker

## 📊 Progress Summary

| Topic                         | Total | Done | Progress |
| ----------------------------- | ----- | ---- | -------- |
| Arrays                        | 9     | 9    | 100%     |
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

**Overall:** 9 / 144 Problems Completed

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
| 7   | Max Consecutive Ones            | ✅     | Running Count / Counting          | O(n)   | O(1)  |
| 8   | Missing Number                  | ✅     | Mathematical Formula              | O(n)   | O(1)  |
| 9   | Single Number                   | ✅     | XOR / Bit Manipulation            | O(n)   | O(1)  |

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

## 5. Running Count / Counting

Problems:

- Max Consecutive Ones

Template:

```js
let currentCount = 0;
let maxCount = 0;

for (let num of nums) {
  if (num === target) {
    currentCount++;
    maxCount = Math.max(maxCount, currentCount);
  } else {
    currentCount = 0;
  }
}
```

---

## 6. Mathematical Formula

Problems:

- Missing Number

Template:

```js
let n = nums.length;

let expectedSum = (n * (n + 1)) / 2;

let actualSum = nums.reduce((sum, num) => sum + num, 0);

return expectedSum - actualSum;
```

---

## 7. XOR / Bit Manipulation

Problems:

- Single Number

Template:

```js
let result = 0;

for (let num of nums) {
  result ^= num;
}

return result;
```

Mental Model:

```text
a ^ a = 0
a ^ 0 = a

Example:

4 ^ 1 ^ 2 ^ 1 ^ 2

= 4 ^ (1 ^ 1) ^ (2 ^ 2)

= 4 ^ 0 ^ 0

= 4
```

---

# 📌 Legend

- ⬜ Todo
- ✅ Solved
- 🔁 Revisit

---

# 🎯 Weekend Revision Plan

## Saturday

Re-solve all 9 Array problems without looking at code.

For each problem:

1. Recall pattern.
2. Write algorithm.
3. Code from scratch.
4. Dry run one example.

If unable to solve in 10 minutes:

```text
Status = 🔁 Revisit
```

---

## Sunday

Revise patterns only.

Focus on:

1. Two Pointers (Array Compression)
2. Two Pointers (Opposite Direction)
3. Three Pointers (Reverse Merge)
4. Running Minimum
5. Running Count
6. Mathematical Formula
7. XOR

Goal:

```text
Remember patterns,
not problem solutions.
```

---
