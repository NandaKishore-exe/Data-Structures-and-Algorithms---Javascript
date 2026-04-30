# 🧠 DSA Notes — Complexity Analysis (Cheatsheet)

---

## 📌 1. What is Time Complexity?

- Measures how **time grows with input (n)**
- Focus is on **growth**, not exact time

---

## 📌 2. Constants (C1, C2, C3…)

- Represent **constant time operations**
- Example: assignment, addition, comparison

👉 We **ignore constants** in final answer

---

## 📌 3. Basic Complexities

| Pattern            | Complexity |
| ------------------ | ---------- |
| Constant work      | O(1)       |
| Single loop        | O(n)       |
| Nested loops       | O(n²)      |
| Halving / Doubling | O(log n)   |
| Mixed (n × log n)  | O(n log n) |

---

## 📌 4. Loop Patterns

### 🔹 Single Loop

```js
for (let i = 1; i <= n; i++) {}
```

👉 O(n)

---

### 🔹 Nested Loop

```js
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {}
}
```

👉 O(n²)

---

### 🔹 Increasing Pattern

```js
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {}
}
```

👉 1 + 2 + ... + n → O(n²)

---

### 🔹 Decreasing Pattern

```js
for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {}
}
```

👉 n + (n-1) + ... + 1 → O(n²)

---

### 🔹 Doubling Pattern

```js
for (let i = 1; i <= n; i *= 2) {}
```

👉 O(log n)

---

### 🔹 Halving Pattern

```js
for (let i = n; i > 1; i /= 2) {}
```

👉 O(log n)

---

### 🔹 Mixed Pattern

```js
for (let i = 1; i <= n; i *= 2) {
  for (let j = 1; j <= n; j++) {}
}
```

👉 O(n log n)

---

### 🔹 Separate Loops

```js
for (let i = 1; i <= n; i++) {}
for (let j = 1; j <= n; j++) {}
```

👉 O(n + n) → O(n)

---

## 📌 5. Important Rules

### ✅ Rule 1: Ignore constants

```text
C1 → O(1)
C2*n + C3 → O(n)
```

---

### ✅ Rule 2: Focus on highest power

```text
n² + n → O(n²)
```

---

### ✅ Rule 3: Add vs Multiply

- Separate loops → **Add**
- Nested loops → **Multiply**

---

### ✅ Rule 4: Identify loop behavior

- i++ → O(n)
- i \*= 2 → O(log n)
- i /= 2 → O(log n)

---

## 📌 6. Mental Model

👉 Ask:

- How many times does this run?
- Is it increasing linearly or exponentially?
- Is it nested or separate?

---

## 📌 7. Key Takeaway

👉 We don’t measure exact time
👉 We measure **growth of operations**

---
