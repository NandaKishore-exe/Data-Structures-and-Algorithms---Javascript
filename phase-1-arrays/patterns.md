# DSA Patterns

---

## 1. Traversal

### Problems

- Find Maximum Element
- Find Minimum Element

### Pattern

Traverse once while maintaining the required answer.

---

## 2. Hash Map

### Problems

- Two Sum

### Pattern

Store previously seen values for O(1) lookup.

---

## 3. Two Pointers

### Problems

- Remove Duplicates from Sorted Array
- Move Zeroes

### Pattern

Maintain two pointers with different responsibilities.

---

## 4. Prefix Sum

### Problems

- Running Sum
- Pivot Index
- Range Sum Query - Immutable

### Pattern

```text
prefix[i] = prefix[i-1] + nums[i]
```

Reuse previously computed cumulative sums.

---

## 5. Greedy

### Problems

- Best Time to Buy and Sell Stock

### Pattern

Maintain the minimum value seen so far.

---

## 6. Kadane's Algorithm

### Problems

- Maximum Subarray

### Pattern

Maintain the maximum sum ending at the current index.

```javascript
currentSum = Math.max(nums[i], currentSum + nums[i]);
maxSum = Math.max(maxSum, currentSum);
```

---

## 7. Maximum Product Subarray

### Problems

- Maximum Product Subarray

### Pattern

Maintain two running states.

- maxProduct
- minProduct

Reason

```text
Negative × Negative = Positive
```

Formula

```javascript
maxProduct = Math.max(current, current * previousMax, current * previousMin);

minProduct = Math.min(current, current * previousMax, current * previousMin);

result = Math.max(result, maxProduct);
```

Complexity

- Time: O(n)
- Space: O(1)

---

## 8. Prefix Product

### Problems

- Product of Array Except Self

### Pattern

Instead of recalculating products repeatedly, precompute:

- Left Products
- Right Products

Formula

```javascript
left[0] = 1;

for (let i = 1; i < n; i++) {
  left[i] = left[i - 1] * nums[i - 1];
}
```

```javascript
right[n - 1] = 1;

for (let i = n - 2; i >= 0; i--) {
  right[i] = right[i + 1] * nums[i + 1];
}
```

Final Answer

```javascript
answer[i] = left[i] * right[i];
```

Observation

Exactly like Prefix Sum, but replace addition (`+`) with multiplication (`×`).

Complexity

- Time: O(n)
- Space: O(n)

Advanced Optimization

Reuse the output array to reduce extra space to **O(1)** (excluding the output array).

---

# Patterns Mastered

✅ Traversal

✅ Hash Map

✅ Two Pointers

✅ Prefix Sum

✅ Greedy

✅ Kadane's Algorithm

✅ Maximum Product Subarray

✅ Prefix Product
