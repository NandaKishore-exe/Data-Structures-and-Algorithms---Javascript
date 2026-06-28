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
