# 🧠 DSA Notes — Order of Growth (Cheatsheet)

---

## 📌 1. What is Order of Growth?

👉 Describes how fast an algorithm grows with input size (n)

👉 Focus:

- Growth pattern ✔️
- Not exact time ❌

---

## 📌 2. Core Rule (MOST IMPORTANT)

👉 Keep only the **highest growing term**

Ignore:

- constants (2, 5, 100…)
- smaller terms

---

## 📌 3. Examples

```text
f(n) = 2n² + n + 6 → O(n²)
g(n) = 100n + 3 → O(n)
h(n) = 5n log n + 20n → O(n log n)
```

---

## 📌 4. Growth Order (MEMORIZE THIS)

```text
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ)
```

👉 Left = faster
👉 Right = slower

---

## 📌 5. How to Identify Final Complexity

### Step 1 → Write expression

- Loop → n
- Nested loop → n²
- Doubling → log n

---

### Step 2 → Combine

- Separate loops → add
- Nested loops → multiply

---

### Step 3 → Simplify

👉 Pick highest growing term

---

## 📌 6. Common Patterns

| Code Pattern     | Complexity |
| ---------------- | ---------- |
| Single loop      | O(n)       |
| Nested loop      | O(n²)      |
| i \*= 2          | O(log n)   |
| i /= 2           | O(log n)   |
| Nested (log × n) | O(n log n) |

---

## 📌 7. Addition Rule

```text
O(n + n²) → O(n²)
O(n + log n) → O(n)
O(n + n + log n) → O(n)
```

👉 Keep dominant term only

---

## 📌 8. Multiplication Rule

```text
Outer → n
Inner → n

→ O(n × n) = O(n²)
```

```text
Outer → log n
Inner → n

→ O(n log n)
```

---

## 📌 9. Important Comparisons

```text
log n << n << n log n << n²
```

👉 Always pick the biggest

---

## 📌 10. Mental Model

Ask:

- How many times does it run?
- Is it linear or doubling?
- Is it nested or separate?

---

## 🎯 Final Takeaway

👉 Order of Growth = how fast your code slows down when input increases

👉 Always:

- Ignore constants
- Ignore smaller terms
- Focus on biggest growth

---
