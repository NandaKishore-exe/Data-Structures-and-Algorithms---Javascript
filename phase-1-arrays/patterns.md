# DSA Patterns

---

## 1. Traversal

### Problems

- Two Sum (Brute Force)
- Find Maximum Element
- Find Minimum Element

### Pattern

Traverse the array once while maintaining the required answer.

### Complexity

- Time: O(n)
- Space: O(1)

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

Maintain two pointers performing different responsibilities.

Common use cases:

- Read / Write Pointer
- Left / Right Pointer
- Slow / Fast Pointer

---

## 4. Prefix Sum

### Problems

- Running Sum
- Pivot Index
- Range Sum Query - Immutable

### Pattern

Reuse previously computed cumulative sums.

Formula:

```text
prefix[i] = prefix[i-1] + nums[i]
```

Range Sum:

```text
L = 0

answer = prefix[R]
```

```text
L > 0

answer = prefix[R] - prefix[L-1]
```

---

## 5. Greedy

### Problems

- Best Time to Buy and Sell Stock

### Pattern

Maintain the minimum value seen so far.

At every step:

```text
Profit = Current Price - Minimum Price
```

Update answer if larger.

---

## 6. Kadane's Algorithm

### Problems

- Maximum Subarray

### Pattern

Maintain the maximum sum ending at the current index.

Formula

```javascript
currentSum = Math.max(nums[i], currentSum + nums[i]);

maxSum = Math.max(maxSum, currentSum);
```

Observation

Negative running sums reduce future sums.

Drop them and start a new subarray.

Complexity

- Time: O(n)
- Space: O(1)

---

## 7. Maximum Product Subarray

### Problems

- Maximum Product Subarray

### Pattern

Unlike Kadane's Algorithm, maintain both:

- Maximum Product ending at current index.
- Minimum Product ending at current index.

Reason

```text
Negative × Negative = Positive
```

A very small (negative) product today can become the largest product tomorrow.

Algorithm

At every element, consider three possibilities.

```text
1. Start a new subarray

current

2. Extend previous maximum product

current × previousMax

3. Extend previous minimum product

current × previousMin
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

# Patterns Mastered

✅ Traversal

✅ Hash Map

✅ Two Pointers

✅ Prefix Sum

✅ Greedy

✅ Kadane's Algorithm

✅ Maximum Product Subarray
