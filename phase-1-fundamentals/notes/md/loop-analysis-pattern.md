# 🧠 DSA Notes — Loop Analysis Patterns (Cheatsheet)

---

## 📌 1. Single Loop

```js
for (let i = 0; i < n; i++) {}
```

- Best → Ω(n)
- Worst → O(n)
- Theta → Θ(n)

👉 Always runs n times

---

## 📌 2. Nested Loop (Full)

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}
```

- Best → Ω(n²)
- Worst → O(n²)
- Theta → Θ(n²)

👉 Inner loop runs every time → multiply

---

## 📌 3. Increasing Pattern (Triangle)

```js
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {}
}
```

- Best → Ω(n²)
- Worst → O(n²)
- Theta → Θ(n²)

👉 1 + 2 + ... + n → n²

---

## 📌 4. Decreasing Pattern

```js
for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {}
}
```

- Best → Ω(n²)
- Worst → O(n²)
- Theta → Θ(n²)

👉 n + (n-1) + ... + 1 → n²

---

## 📌 5. Logarithmic Loop (Doubling)

```js
for (let i = 1; i <= n; i *= 2) {}
```

- Best → Ω(log n)
- Worst → O(log n)
- Theta → Θ(log n)

👉 Value doubles → fewer steps

---

## 📌 6. Logarithmic Loop (Halving)

```js
for (let i = n; i > 1; i /= 2) {}
```

- Best → Ω(log n)
- Worst → O(log n)
- Theta → Θ(log n)

👉 Value halves → log steps

---

## 📌 7. Mixed Nested (log × n)

```js
for (let i = 1; i <= n; i *= 2) {
  for (let j = 0; j < n; j++) {}
}
```

- Best → Ω(n log n)
- Worst → O(n log n)
- Theta → Θ(n log n)

👉 multiply → log n × n

---

## 📌 8. Separate Loops

```js
for (let i = 0; i < n; i++) {}
for (let j = 0; j < n; j++) {}
```

- Best → Ω(n)
- Worst → O(n)
- Theta → Θ(n)

👉 add → n + n → n

---

## 📌 9. Early Exit (Break / Return)

```js
for (let i = 0; i < n; i++) {
  if (condition) break;
}
```

- Best → Ω(1)
- Worst → O(n)
- Theta → ❌ Not defined

👉 may exit early or run full

---

## 📌 10. Conditional + Inner Loop

```js
for (let i = 0; i < n; i++) {
  if (condition) {
    for (let j = 0; j < n; j++) {}
    break;
  }
}
```

- Best → Ω(n)
- Worst → O(n)
- Theta → ❌ Not defined

👉 inner loop runs only once

---

## 📌 11. If Condition Inside Loop

```js
for (let i = 0; i < n; i++) {
  if (arr[i] === target) return true;
}
```

- Best → Ω(1)
- Worst → O(n)
- Theta → ❌ Not defined

👉 depends on position

---

## 📌 12. Always Constant

```js
let x = 10;
return x;
```

- Best → Ω(1)
- Worst → O(1)
- Theta → Θ(1)

👉 no dependency on n

---

# 🔥 KEY RULES

## ✅ Rule 1: Add vs Multiply

- Separate loops → Add
- Nested loops → Multiply

---

## ✅ Rule 2: Early Exit

- Best → Ω(1)
- Worst → O(n)
- Theta → ❌

---

## ✅ Rule 3: Theta Condition

👉 Use Θ only when:

```text
Best case = Worst case
```

---

## ✅ Rule 4: Log Pattern

- i \*= 2 → O(log n)
- i /= 2 → O(log n)

---

## 🎯 Final Takeaway

👉 Always ask:

- Does it always run same? → Θ
- Can it exit early? → Ω(1)
- Is it nested? → multiply
- Is it separate? → add

---
