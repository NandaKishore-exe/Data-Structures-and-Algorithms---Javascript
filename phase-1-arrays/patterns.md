# 📘 Phase 1 - Arrays

---

# Pattern 1 - Traversal

---

# Problem 1 - Two Sum

## Pattern

HashMap Lookup

---

## Recognition

If the problem asks:

- Find two numbers
- Find a pair
- Have you seen this before?
- Need fast lookup

Think about using a **HashMap**.

---

## Brute Force

### Algorithm

1. Traverse the array.
2. Pick one element.
3. Compare it with every remaining element.
4. If the sum equals the target, return the indices.
5. Otherwise continue.
6. If no pair exists, return an empty array.

### Complexity

Time: **O(n²)**

Space: **O(1)**

---

## Optimized Approach (HashMap)

### Algorithm

1. Create an empty HashMap.
2. Traverse the array once.
3. Calculate the complement.

```
complement = target - nums[i]
```

4. Check whether the complement exists inside the HashMap.
5. If it exists, return the stored index and current index.
6. Otherwise store the current number and its index.
7. Continue until the array ends.
8. If no pair exists, return an empty array.

---

## Dry Run

Input

```
nums = [2,7,11,15]
target = 9
```

Iteration 1

```
Current = 2

Complement = 7

Map = {}

Store

2 → 0
```

Iteration 2

```
Current = 7

Complement = 2

Map contains 2

Return

[0,1]
```

---

## Complexity

Brute Force

```
Time  : O(n²)
Space : O(1)
```

Optimized

```
Time  : O(n)
Space : O(n)
```

---

## Key Formula

```
complement = target - nums[i]
```

---

## Common Mistakes

❌ Comparing only adjacent elements.

❌ Using one loop for brute force.

❌ Starting inner loop from 0.

❌ Forgetting `j = i + 1`.

❌ Storing before checking the HashMap.

❌ Forgetting `Map.get()`.

❌ Using `==` instead of `===`.

---

## Frontend Connection

HashMap is similar to API caching.

```js
cache.has(url);

cache.get(url);

cache.set(url, response);
```

Instead of searching the cache every time, we perform an **O(1)** lookup.

---

## Interview Questions

1. Why is brute force O(n²)?
2. Why do we use a HashMap?
3. Why check before storing?
4. Why is space complexity O(n)?
5. Why is a Map better than a Set for Two Sum?

---

## Revision Notes

Remember this flow:

```
Need a pair

↓

Calculate complement

↓

Check HashMap

↓

Found?

↓

Return answer

↓

Else

Store current value
```

---

# Problem 2 - Find Maximum Element

## Pattern

Traversal (Running Answer Pattern)

---

## Recognition

If the problem asks you to find:

- Largest value
- Best value
- Highest score
- Maximum profit
- Greatest element

Think:

**Keep track of the best answer seen so far.**

---

## Brute Force

### Intuition

Compare every element with every other element to determine the largest value.

### Algorithm

1. Pick one element.
2. Compare it with all other elements.
3. If no larger element exists, it is the maximum.
4. Return the maximum element.

### Complexity

Time: **O(n²)**

Space: **O(1)**

---

## Optimized Approach

### Intuition

Instead of repeatedly comparing every element, maintain the current maximum while traversing the array once.

### Algorithm

1. If the array is empty, return `null`.
2. Initialize `maxElement` with the first element.
3. Traverse the array from index `1`.
4. If the current element is greater than `maxElement`, update it.
5. Continue until the end of the array.
6. Return `maxElement`.

---

## Dry Run

Input

```text
[5,3,9,2,7]
```

```
max = 5

3 > 5 ? No

max = 5

9 > 5 ? Yes

max = 9

2 > 9 ? No

7 > 9 ? No

Return 9
```

---

## Complexity

```
Time  : O(n)

Space : O(1)
```

---

## Common Mistakes

- Initializing `maxElement = 0`.
- Starting the loop from index `0` instead of `1`.
- Forgetting to handle an empty array.
- Sorting the array instead of traversing once.

---

## Frontend Connection

Finding:

- Highest-rated product
- Maximum revenue
- Most active user
- Highest score on a dashboard

These all use the same traversal pattern.

---

## Interview Questions

1. Why is sorting unnecessary?
2. Why initialize with the first element instead of `0`?
3. What happens if all elements are negative?
4. How would you handle an empty array?

---

## Interview Takeaway

### Pattern Tested

Running Answer Pattern

### Core Idea

Maintain the best answer seen so far while traversing.

### Related Problems

- Find Minimum Element
- Best Time to Buy & Sell Stock
- Maximum Subarray
- Maximum Depth of Binary Tree
- Kadane's Algorithm
