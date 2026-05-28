# 🗺️ DSA Roadmap — Frontend Engineer to Product Company

> **Stack:** JavaScript · **Target:** Flipkart · PhonePe · Razorpay · Zepto · CRED  
> **Approach:** AI-mentored · module by module · one concept at a time

---

## 📊 Overall Progress

| Phase | Topic | Modules | Status |
|-------|-------|---------|--------|
| Phase 0 | Foundations — Think Like a Computer | 6 / 6 | ✅ Complete |
| Phase 1 | Core Data Structures | 0 / 7 | 🔲 Not Started |
| Phase 2 | Trees & Graphs | 0 / 6 | 🔲 Not Started |
| Phase 3 | Patterns & Problem-Solving Strategy | 0 / 6 | 🔲 Not Started |
| Phase 4 | Interview Simulation & Company Prep | 0 / 6 | 🔲 Not Started |

---

## ✅ Phase 0 — Foundations (Complete)

> Goal: Read any block of code and estimate its time and space cost — automatically.

### Modules

| # | Module | Status | Key Concept |
|---|--------|--------|-------------|
| 1 | What is Big O Notation? | ✅ Done | Measures growth, not speed. Drop constants and smaller terms |
| 2 | Reading Time Complexity from Loops | ✅ Done | Nested = multiply · Sequential = add · Halving = log n |
| 3 | Space Complexity | ✅ Done | Count extra memory only · Time and space are independent |
| 4 | Recursion and the Call Stack | ✅ Done | Before call = way down · After call = way back up |
| 5 | JS Built-in Complexity | ✅ Done | `includes()` inside a loop = invisible O(n²) |
| 6 | UMPIRE Framework | ✅ Done | Understand → Match → Plan → Implement → Review → Evaluate |

### Concepts Locked In

| Concept | One-line Rule |
|---------|--------------|
| Big O | O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) |
| Loop analysis | Nested loops multiply · Sequential loops add |
| Log n pattern | Any loop that halves/doubles its counter each step |
| Space complexity | Only count extra allocations — not the input |
| Recursion space | Each call = one stack frame = O(n) space for n-deep recursion |
| Array traps | `unshift`, `shift`, `includes` are all O(n) — avoid inside loops |
| Map / Set | Insert, lookup, delete all O(1) — the golden replacement for nested loops |
| UMPIRE | Always clarify before coding · Match pattern before choosing data structure |

---

## 🔲 Phase 1 — Core Data Structures

> Goal: Reach for the right data structure automatically when you read a problem.  
> Problems: ~30 · Timeline: 4–6 weeks

### Modules

| # | Module | Status | Key Pattern |
|---|--------|--------|-------------|
| 1 | Arrays & Two Pointers | 🔲 Not Started | Left/right pointers moving toward each other |
| 2 | Sliding Window | 🔲 Not Started | Expand/shrink a window over the array |
| 3 | Hash Maps & Frequency Counting | 🔲 Not Started | Count occurrences · fast lookups |
| 4 | Stacks & Queues | 🔲 Not Started | LIFO stack · FIFO queue · monotonic stack |
| 5 | Linked Lists | 🔲 Not Started | Reverse · fast/slow pointer · merge · cycle detection |
| 6 | Prefix Sums | 🔲 Not Started | Precompute running totals for O(1) range queries |
| 7 | Sorting & Binary Search | 🔲 Not Started | Know sort cost · binary search on sorted arrays |

### Problem Checklist

| # | Problem | Difficulty | Pattern | Status |
|---|---------|------------|---------|--------|
| 1 | Two Sum | 🟢 Easy | Hash Map | 🔲 |
| 2 | Best Time to Buy and Sell Stock | 🟢 Easy | Sliding Window | 🔲 |
| 3 | Valid Parentheses | 🟢 Easy | Stack | 🔲 |
| 4 | Contains Duplicate | 🟢 Easy | Set | 🔲 |
| 5 | Maximum Subarray | 🟢 Easy | Kadane's / Prefix | 🔲 |
| 6 | Move Zeroes | 🟢 Easy | Two Pointers | 🔲 |
| 7 | First Non-Repeating Character | 🟢 Easy | Frequency Map | 🔲 |
| 8 | Reverse Linked List | 🟢 Easy | Linked List · Iterative reverse | 🔲 |
| 9 | Merge Two Sorted Lists | 🟢 Easy | Linked List · Two pointers | 🔲 |
| 10 | Linked List Cycle | 🟢 Easy | Linked List · Fast/slow pointer | 🔲 |
| 11 | Longest Substring Without Repeating Chars | 🟡 Medium | Sliding Window | 🔲 |
| 12 | Group Anagrams | 🟡 Medium | Hash Map | 🔲 |
| 13 | Product of Array Except Self | 🟡 Medium | Prefix Sums | 🔲 |
| 14 | Top K Frequent Elements | 🟡 Medium | Map + Sort | 🔲 |
| 15 | 3Sum | 🟡 Medium | Two Pointers | 🔲 |
| 16 | Subarray Sum Equals K | 🟡 Medium | Prefix Sum + Map | 🔲 |
| 17 | Reorder Linked List | 🟡 Medium | Linked List · Fast/slow + reverse | 🔲 |
| 18 | Remove Nth Node From End | 🟡 Medium | Linked List · Two pointers | 🔲 |
| 19 | Minimum Window Substring | 🔴 Hard | Sliding Window | 🔲 |
| 20 | Merge K Sorted Lists | 🔴 Hard | Linked List · Priority queue | 🔲 |

---

## 🔲 Phase 2 — Trees & Graphs

> Goal: Exploit the DOM-tree advantage · DFS and BFS become second nature.  
> Problems: ~25 · Timeline: 4–5 weeks

### Modules

| # | Module | Status | Key Pattern |
|---|--------|--------|-------------|
| 1 | Binary Trees — DFS | 🔲 Not Started | Pre / In / Post order traversal |
| 2 | Binary Trees — BFS | 🔲 Not Started | Level-order using a queue |
| 3 | Binary Search Trees | 🔲 Not Started | Insert · search · validate · LCA |
| 4 | Tree Recursion | 🔲 Not Started | Most tree problems = a recursive subproblem |
| 5 | Graph Basics | 🔲 Not Started | Adjacency list · BFS · DFS · cycle detection |
| 6 | Matrix as Graph + DOM Problems | 🔲 Not Started | Islands · flood fill · serialize tree |

### Problem Checklist

| # | Problem | Difficulty | Pattern | Status |
|---|---------|------------|---------|--------|
| 1 | Invert Binary Tree | 🟢 Easy | DFS Recursion | 🔲 |
| 2 | Maximum Depth of Binary Tree | 🟢 Easy | DFS Recursion | 🔲 |
| 3 | Symmetric Tree | 🟢 Easy | DFS Recursion | 🔲 |
| 4 | Path Sum | 🟢 Easy | DFS Recursion | 🔲 |
| 5 | Binary Tree Level Order Traversal | 🟡 Medium | BFS Queue | 🔲 |
| 6 | Validate Binary Search Tree | 🟡 Medium | DFS with bounds | 🔲 |
| 7 | Lowest Common Ancestor BST | 🟡 Medium | BST property | 🔲 |
| 8 | Number of Islands | 🟡 Medium | DFS / BFS on matrix | 🔲 |
| 9 | Flood Fill | 🟡 Medium | DFS on matrix | 🔲 |
| 10 | Binary Tree Right Side View | 🟡 Medium | BFS level tracking | 🔲 |
| 11 | Course Schedule (Cycle Detection) | 🟡 Medium | Graph DFS | 🔲 |
| 12 | Rotting Oranges | 🟡 Medium | Multi-source BFS | 🔲 |
| 13 | Serialize and Deserialize Binary Tree | 🔴 Hard | DFS + string encoding | 🔲 |

---

## 🔲 Phase 3 — Patterns & Problem-Solving Strategy

> Goal: Stop solving problems one-off — recognise the ~10 patterns that cover 90% of questions.  
> Problems: ~20 · Timeline: 3–4 weeks

### Modules

| # | Module | Status | Key Pattern |
|---|--------|--------|-------------|
| 1 | Sliding Window (Advanced) | 🔲 Not Started | Dynamic window · substring problems |
| 2 | Binary Search Variants | 🔲 Not Started | Rotated array · peak · answer-space search |
| 3 | Backtracking | 🔲 Not Started | Explore + undo · subsets · permutations |
| 4 | Dynamic Programming — 1D | 🔲 Not Started | Memoisation first · Fibonacci · climbing stairs |
| 5 | Dynamic Programming — 2D | 🔲 Not Started | Grid DP · longest common subsequence |
| 6 | Greedy Algorithms | 🔲 Not Started | Locally optimal choice · intervals · jump game |

### Problem Checklist

| # | Problem | Difficulty | Pattern | Status |
|---|---------|------------|---------|--------|
| 1 | Climbing Stairs | 🟢 Easy | 1D DP / Fibonacci | 🔲 |
| 2 | Jump Game | 🟡 Medium | Greedy | 🔲 |
| 3 | Merge Intervals | 🟡 Medium | Greedy + Sort | 🔲 |
| 4 | Find Minimum in Rotated Sorted Array | 🟡 Medium | Binary Search | 🔲 |
| 5 | Search in Rotated Sorted Array | 🟡 Medium | Binary Search | 🔲 |
| 6 | Coin Change | 🟡 Medium | 1D DP | 🔲 |
| 7 | Longest Increasing Subsequence | 🟡 Medium | 1D DP | 🔲 |
| 8 | Subsets | 🟡 Medium | Backtracking | 🔲 |
| 9 | Permutations | 🟡 Medium | Backtracking | 🔲 |
| 10 | Combination Sum | 🟡 Medium | Backtracking | 🔲 |
| 11 | Unique Paths | 🟡 Medium | 2D DP | 🔲 |
| 12 | Word Break | 🟡 Medium | DP + Memoisation | 🔲 |
| 13 | N-Queens | 🔴 Hard | Backtracking | 🔲 |
| 14 | Word Break II | 🔴 Hard | Backtracking + Memo | 🔲 |

---

## 🔲 Phase 4 — Interview Simulation & Company Prep

> Goal: Perform under pressure · communicate like a senior engineer.  
> Timeline: Ongoing

### Modules

| # | Module | Status | Focus |
|---|--------|--------|-------|
| 1 | Timed Mock Sessions | 🔲 Not Started | 25 min solve + explain · full debrief |
| 2 | Frontend-Specific Coding Questions | 🔲 Not Started | Debounce · throttle · deep clone · event emitter |
| 3 | JS DSA Polyfills | 🔲 Not Started | Array.flat · Promise.all · groupBy from scratch |
| 4 | System Design Lite | 🔲 Not Started | Autocomplete · infinite scroll · rate limiter |
| 5 | Blind 75 Coverage Pass | 🔲 Not Started | Aim for 80%+ solved |
| 6 | Company-Specific Prep | 🔲 Not Started | Razorpay · PhonePe · CRED · Zepto patterns |

### Frontend Machine Coding Checklist

| # | Problem | Status |
|---|---------|--------|
| 1 | Implement debounce from scratch | 🔲 |
| 2 | Implement throttle from scratch | 🔲 |
| 3 | Implement deep clone | 🔲 |
| 4 | Implement event emitter (on/off/emit) | 🔲 |
| 5 | Implement LRU Cache | 🔲 |
| 6 | Implement Promise.all polyfill | 🔲 |
| 7 | Implement Array.flat polyfill | 🔲 |
| 8 | Implement curry function | 🔲 |
| 9 | Implement memoize function | 🔲 |
| 10 | Design autocomplete component | 🔲 |

---

## 📖 Resources

| Resource | Use for |
|----------|---------|
| [Namaste DSA Sheet](https://namastedev.com/namaste-dsa-sheet) | Primary problem bank — JS solutions |
| [Striver DSA Sheet](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/) | Extended coverage Phase 3–4 |
| [GreatFrontend — Algorithms](https://www.greatfrontend.com/front-end-interview-playbook/algorithms) | Frontend-specific DSA focus |
| [NeetCode 150](https://neetcode.io/roadmap) | Final coverage pass Phase 4 |
| [LeetCode](https://leetcode.com) | Problem practice platform |

---

## 🧠 UMPIRE Quick Reference

```
U — Understand : Restate problem · ask about edge cases (empty, negatives, special chars)
M — Match      : "Have I seen this?" → Set · "Count freq?" → Map · "Find pair?" → Two pointers
P — Plan       : Pseudocode out loud before touching keyboard
I — Implement  : Code only after U M P are done
R — Review     : Trace small example · check empty / single / all-duplicate edge cases
E — Evaluate   : State time AND space complexity with reasoning
```

---

## ⚡ Complexity Cheatsheet

```
O(1)      Constant     → arr[0], map.get(), set.has()
O(log n)  Logarithmic  → binary search, loop that halves
O(n)      Linear       → single loop, Array.map/filter/reduce
O(n log n)             → Array.sort()
O(n²)     Quadratic    → nested loop — replace with Map/Set
O(2ⁿ)    Exponential  → naive recursion without memoisation
```

---

*Updated after each module. Track commits to see progress over time.*
