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

---

# Problem 7 - Running Sum of 1D Array

## Pattern

Prefix Sum

---

## Recognition

Use this pattern when:

- You need cumulative totals.
- Each answer depends on the previous answer.
- You want to avoid recalculating sums repeatedly.

---

## Core Idea

Instead of calculating the sum from the beginning every time, reuse the previous running sum.

Running Sum = Previous Running Sum + Current Element

---

## Algorithm

1. Create an empty result array.
2. Initialize `sum = 0`.
3. Traverse the array.
4. Add the current element to `sum`.
5. Store `sum` in the result array.
6. Return the result.

---

## Complexity

Time: O(n)

Space: O(n)

---

## Common Mistakes

- Recalculating the sum for every index (O(n²)).
- Forgetting to update the running sum before storing it.
- Modifying the original array when a new array is required.

---

## Frontend Connection

Useful for:

- Running account balance
- Total calories consumed
- Daily water intake
- Analytics dashboards
- Financial reports

---

## Interview Takeaway

Ask yourself:

> Can I reuse the previous result instead of calculating everything again?

---

# Problem 8 - Find Pivot Index

## Pattern

Prefix Sum

---

## Recognition

Use this pattern when:

- Comparing left and right sums.
- Repeatedly calculating subarray sums.
- A brute-force solution recalculates sums for every index.

---

## Brute Force

### Idea

For every index:

1. Calculate left sum.
2. Calculate right sum.
3. Compare.

### Complexity

Time: O(n²)

Space: O(1)

---

## Optimized Idea

Instead of recalculating:

- Compute `totalSum` once.
- Maintain a running `leftSum`.
- Derive `rightSum` using:

rightSum = totalSum - leftSum - currentElement

---

## Algorithm

1. Compute total sum.
2. Initialize `leftSum = 0`.
3. Traverse the array.
4. Calculate `rightSum`.
5. Compare `leftSum` and `rightSum`.
6. If equal, return the current index.
7. Update `leftSum`.
8. Return `-1` if no pivot exists.

---

## Complexity

Time: O(n)

Space: O(1)

---

## Common Mistakes

- Assuming the pivot is the middle element.
- Including the pivot element in left/right sums.
- Updating `leftSum` before comparison.

---

## Golden Formula

rightSum = totalSum - leftSum - nums[i]

---

## Interview Takeaway

Whenever you recalculate left and right sums for every index, ask:

> "Can I compute the total once and derive one side from the other?"

---

# Problem 9 - Range Sum Query - Immutable

## Pattern

Prefix Sum

---

## Recognition

Use this pattern when:

- Multiple range sum queries need to be answered.
- The array does not change (Immutable).
- The brute-force solution repeatedly calculates sums over the same range.
- Preprocessing the array once can make future queries much faster.

---

## Brute Force

### Intuition

For every query:

1. Traverse from `left` to `right`.
2. Add every element.
3. Return the sum.

### Algorithm

1. Initialize `sum = 0`.
2. Traverse from `left` to `right`.
3. Add every element to `sum`.
4. Return `sum`.

### Complexity

Time: **O(n)** per query

Space: **O(1)**

---

## Optimized Solution (Prefix Sum)

### Intuition

Instead of recalculating the range sum every time:

- Build a Prefix Sum array once.
- Every query becomes a simple subtraction.

The Prefix Sum array stores the cumulative sum from index `0` to the current index.

Example:

nums

```
[-2, 0, 3, -5, 2, -1]
```

Prefix Sum

```
[-2, -2, 1, -4, -2, -3]
```

---

## Prefix Sum Formula

If `left == 0`

```text
Answer = prefix[right]
```

Otherwise

```text
Answer = prefix[right] - prefix[left - 1]
```

---

## Why `left - 1`?

Remember this sentence:

> **Subtract everything before the range starts.**

Example:

Need

```text
sumRange(2,5)
```

```
Index

0   1   2   3   4   5

-2  0   3  -5   2  -1
```

`prefix[5]` contains

```text
-2 + 0 + 3 + (-5) + 2 + (-1)
```

To keep only

```text
3 + (-5) + 2 + (-1)
```

remove everything before index `2`.

Everything before index `2` is stored in

```text
prefix[1]
```

Therefore

```text
prefix[5] - prefix[1]
```

---

## Algorithm

### Preprocessing

1. Create an empty Prefix Sum array.
2. Initialize `sum = 0`.
3. Traverse the array.
4. Add current element to `sum`.
5. Store `sum` in the Prefix Sum array.

---

### Answering a Query

If

```text
left == 0
```

Return

```text
prefix[right]
```

Otherwise

Return

```text
prefix[right] - prefix[left - 1]
```

---

## Complexity

### Building Prefix Sum

Time: **O(n)**

Space: **O(n)**

---

### Each Query

Time: **O(1)**

Space: **O(1)**

---

## Why Is It Faster?

### Brute Force

Every query

```
Loop through the range
```

Time

```
O(n)
```

1000 Queries

```
O(1000 × n)
```

or generally

```
O(q × n)
```

---

### Prefix Sum

Build Prefix Array once

```
O(n)
```

Each query

```
One subtraction
```

Time

```
O(1)
```

Overall

```
O(n + q)
```

where

- `n` = size of array
- `q` = number of queries

---

## Common Mistakes

❌ Using

```text
prefix[right] - prefix[left]
```

instead of

```text
prefix[right] - prefix[left - 1]
```

---

❌ Forgetting the special case

```text
left == 0
```

---

❌ Rebuilding the Prefix Sum array for every query.

Build it **once**, reuse it for all queries.

---

## Frontend Engineering Connection

Prefix Sum is useful in:

- 📊 Analytics Dashboards
- 💰 Expense Tracking
- 🏋️ Fitness Apps (Calories / Water Intake)
- 📈 Financial Charts
- 📅 Calendar Statistics
- 📉 Sales Reports

Example:

A fitness app stores daily calories.

Instead of recalculating calories every time the user changes the date range, build the Prefix Sum once and answer every query instantly.

---

## Interview Takeaway

When you see:

- Multiple range sum queries
- Immutable array
- Repeated calculations

Ask yourself:

> **Can I preprocess the data once and answer every query in O(1)?**

If yes,

👉 Think **Prefix Sum**.

---

## Revision Notes

### Running Sum

```
runningSum += nums[i]
```

↓

Builds the Prefix Sum array.

---

### Prefix Sum Meaning

```
prefix[i]
```

means

```
Sum from index 0 to index i
```

---

### Golden Formula

If

```
left == 0
```

```
answer = prefix[right]
```

Otherwise

```
answer = prefix[right] - prefix[left - 1]
```

---

### Memory Trick

Don't memorize the formula.

Remember:

> **Subtract everything before the range starts.**

---

# Problem 10 - Best Time to Buy and Sell Stock

## Pattern

Greedy

---

## Recognition

Use this pattern when:

- Find maximum profit / minimum cost.
- Only one traversal is needed.
- The decision at the current step depends only on the best value seen so far.
- You need to maximize or minimize a value while traversing.

---

## Brute Force

### Intuition

Try every possible buying day.

For each buying day, try every possible future selling day.

Calculate the profit and keep the maximum.

---

### Algorithm

1. Pick a buying day.
2. Check every future selling day.
3. Calculate profit.
4. Update maximum profit.
5. Repeat for all buying days.

---

### Complexity

Time: **O(n²)**

Space: **O(1)**

---

# Why Brute Force is Slow

Many comparisons are repeated.

For every buying day we again scan all future days.

Example

```
Buy Day 0

→ Sell Day 1
→ Sell Day 2
→ Sell Day 3

----------------

Buy Day 1

→ Sell Day 2
→ Sell Day 3

----------------

Buy Day 2

→ Sell Day 3
```

Lots of repeated work.

---

# Greedy Insight

When standing on any day,

you don't need to remember every previous price.

You only need to remember

> **The minimum price seen so far.**

If today's price is

```
prices[i]
```

then today's profit is

```
prices[i] - minPrice
```

---

# Greedy Algorithm

Maintain two variables:

```javascript
minPrice;
```

Cheapest buying price seen so far.

```javascript
maxProfit;
```

Maximum profit found so far.

For every day:

1. Calculate today's profit.
2. Update maximum profit.
3. Update minimum price.

---

# Optimized Algorithm

1. Initialize

```
minPrice = prices[0]
maxProfit = 0
```

2. Traverse from index 1.

3. Calculate

```
currentProfit = prices[i] - minPrice
```

4. Update

```
maxProfit = max(maxProfit, currentProfit)
```

5. If today's price is smaller,

update

```
minPrice = prices[i]
```

6. Return

```
maxProfit
```

---

# Complexity

Time: **O(n)**

Space: **O(1)**

---

# Dry Run

Example

```
prices = [7,1,5,3,6,4]
```

| Day | Price | Min Price | Profit Today | Max Profit |
| --- | ----: | --------: | -----------: | ---------: |
| 0   |     7 |         7 |            0 |          0 |
| 1   |     1 |         1 |           -6 |          0 |
| 2   |     5 |         1 |            4 |          4 |
| 3   |     3 |         1 |            2 |          4 |
| 4   |     6 |         1 |            5 |          5 |
| 5   |     4 |         1 |            3 |          5 |

Answer

```
5
```

---

# Common Mistakes

❌ Find the global minimum first.

Example

```
[2,10,1,5]
```

Global minimum is

```
1
```

Profit becomes

```
5 - 1 = 4
```

Wrong.

Correct answer

```
2 -> 10

Profit = 8
```

---

❌ Using two loops.

The whole point of Greedy is to solve it in one traversal.

---

❌ Updating `minPrice` first and then calculating today's profit.

Correct order:

```
Today's Profit

↓

Update maxProfit

↓

Update minPrice
```

---

# Interview Takeaway

Ask yourself:

> **What is the best value I've seen so far?**

Store that value while traversing.

This is one of the most common Greedy interview patterns.

---

# Revision Notes

### Maintain

```
minPrice
```

and

```
maxProfit
```

---

### Formula

```
currentProfit = prices[i] - minPrice
```

---

### Update Order

```
1. Calculate today's profit

↓

2. Update maxProfit

↓

3. Update minPrice
```

---

### Memory Trick

Don't search for the smallest price in the entire array.

Instead remember:

> **The cheapest buying opportunity seen so far.**

---

# Pattern Summary

Running Maximum ✔️

Running Minimum ✔️

Greedy Decision ✔️

Single Traversal ✔️
