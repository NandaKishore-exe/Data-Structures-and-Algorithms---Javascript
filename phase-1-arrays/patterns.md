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

---

# Problem 3 - Find Minimum Element

## Pattern

Traversal (Running Answer Pattern)

---

## Recognition

If the problem asks you to find:

- Smallest value
- Lowest score
- Minimum price
- Lowest temperature

Think:

**Keep track of the smallest value seen so far.**

---

## Brute Force

### Intuition

Compare every element with every other element to determine the smallest value.

### Algorithm

1. Pick one element.
2. Compare it with all remaining elements.
3. If no smaller element exists, it is the minimum.
4. Return the minimum element.

### Complexity

Time: **O(n²)**

Space: **O(1)**

---

## Optimized Approach

### Intuition

Maintain the current minimum while traversing the array only once.

### Algorithm

1. If the array is empty, return `null`.
2. Initialize `minElement` with the first element.
3. Traverse from index `1`.
4. If the current element is smaller than `minElement`, update it.
5. Continue until the end of the array.
6. Return `minElement`.

---

## Dry Run

Input

```text
[5,3,9,2,7]
```

```text
min = 5

3 < 5 ? Yes

min = 3

9 < 3 ? No

2 < 3 ? Yes

min = 2

7 < 2 ? No

Return 2
```

---

## Complexity

```text
Time  : O(n)

Space : O(1)
```

---

## Common Mistakes

- Initializing `minElement = 0`.
- Starting the loop from index `0`.
- Forgetting to handle an empty array.
- Sorting the array instead of traversing once.

---

## Frontend Connection

Used for finding:

- Lowest product price
- Minimum response time
- Lowest battery level
- Cheapest plan

---

## Interview Questions

1. Why initialize with the first element?
2. What happens when all values are negative?
3. Why not sort the array?
4. How would you find both minimum and maximum in one traversal?

---

## Interview Takeaway

### Pattern Tested

Running Answer Pattern

### Core Idea

Maintain the best answer while traversing.

### Related Problems

- Find Maximum Element
- Second Largest Element
- Best Time to Buy & Sell Stock
- Maximum Subarray

---

# Problem 4 - Remove Duplicates from Sorted Array

## Pattern

Read Pointer / Write Pointer

---

## Recognition

Use this pattern when:

- The array is sorted.
- The problem asks for **in-place** modification.
- You need to keep only valid elements.
- Extra space is not allowed.

---

## Intuition

Use two pointers with different responsibilities:

- **Read Pointer (R):** Visits every element.
- **Write Pointer (W):** Tracks where the next unique element should be placed.

The write pointer only moves when a new unique value is found.

---

## Algorithm

1. Handle the empty array.
2. Initialize `write = 0`.
3. Traverse the array using `read` from index `1`.
4. If `nums[read] !== nums[write]`:
   - Increment `write`.
   - Copy `nums[read]` to `nums[write]`.

5. Return `write + 1`.

---

## Dry Run

Input

```text
[1,1,2,2,3]
```

```text
W=0 R=1

1 == 1

Move R

------------

R=2

2 != 1

W++

Copy 2

Array

[1,2,2,2,3]

------------

R=3

2 == 2

Move R

------------

R=4

3 != 2

W++

Copy 3

Array

[1,2,3,2,3]
```

Return

```text
3
```

---

## Complexity

```text
Time  : O(n)

Space : O(1)
```

---

## Common Mistakes

- Comparing pointer indices instead of values.
- Swapping instead of overwriting.
- Forgetting `write++` before copying.
- Returning `write` instead of `write + 1`.

---

## Frontend Connection

This pattern is useful when filtering data in-place, compacting arrays, or removing invalid entries while preserving order without creating another array.

---

## Interview Takeaway

### Pattern Tested

Read Pointer / Write Pointer

### Core Idea

One pointer explores.

One pointer builds the result.

### Related Problems

- Move Zeroes
- Remove Element
- Merge Sorted Array
- String Compression
- Partition Array

---

# Problem 6 - Missing Number

## Pattern

HashMap Lookup / Mathematical Formula

---

## Recognition

Use this pattern when:

- Numbers belong to a fixed range.
- Exactly one value is missing.
- The problem guarantees distinct values.

---

## Solution 1 - HashMap

### Intuition

Store every number in a HashMap and check which expected number is missing.

### Algorithm

1. Create a HashMap.
2. Store every number.
3. Check numbers from `0` to `n`.
4. Return the number that does not exist.

### Complexity

Time: **O(n)**

Space: **O(n)**

---

## Solution 2 - Mathematical Formula

### Intuition

The sum of numbers from `0` to `n` is known.

Missing Number = Expected Sum − Actual Sum

### Formula

Expected Sum

n × (n + 1) / 2

### Algorithm

1. Calculate expected sum.
2. Calculate actual array sum.
3. Return the difference.

### Complexity

Time: **O(n)**

Space: **O(1)**

---

## Common Mistakes

- Using `< n` instead of `<= n`.
- Forgetting the formula includes `n`.
- Forgetting the numbers are guaranteed to be distinct.

---

## Interview Takeaway

Always look at the problem constraints first.

If the input guarantees a continuous range with one missing value, consider a mathematical approach before using extra memory.
