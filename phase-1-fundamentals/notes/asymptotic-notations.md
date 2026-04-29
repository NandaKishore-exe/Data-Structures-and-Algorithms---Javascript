# 🧠 DSA Notes — Asymptotic Notations (Cheatsheet)

---

## 📌 1. What are Asymptotic Notations?

👉 Used to describe **how algorithm performance grows with input (n)**

👉 Focus:

- Growth pattern ✔️
- Not exact time ❌

---

## 📌 2. Three Types

### 🔹 Big-O (O) → Worst Case

- Maximum time taken
- Most commonly used

```text
O(n), O(n²), O(log n)
```

---

### 🔹 Omega (Ω) → Best Case

- Minimum time taken

```text
Ω(1), Ω(n)
```

---

### 🔹 Theta (Θ) → Exact / Average Case

- Tight bound (when best = worst)

```text
Θ(n)
```

---

## 📌 3. When to Use What?

| Situation            | Notation |
| -------------------- | -------- |
| Maximum time         | O        |
| Minimum time         | Ω        |
| Same behavior always | Θ        |

---

## 📌 4. Example 1 (Always runs)

```js
for (let i = 1; i <= n; i++) {
  console.log(i);
}
```

- Best → Ω(n)
- Worst → O(n)
- Theta → Θ(n) ✅

👉 Because behavior is same

---

## 📌 5. Example 2 (Condition based)

```js
if (n % 2 !== 0) return 0;

for (let i = 0; i < n; i++) {
  console.log(i);
}
```

- Best → Ω(1)
- Worst → O(n)
- Theta → ❌ Not defined

👉 Because behavior changes

---

## 📌 6. Key Rule (VERY IMPORTANT)

👉 Use Θ only when:

```text
Best case = Worst case
```

---

## 📌 7. Growth Order Reminder

```text
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³)
```

---

## 📌 8. What to Focus

- Identify best / worst case
- Use Big-O most of the time
- Use Theta only when behavior is fixed

---

## 📌 9. What to Ignore

- Mathematical proofs ❌
- Exact constants ❌
- Complex formulas ❌

---

## 🎯 Final Takeaway

👉 Big-O → worst case (most important)
👉 Omega → best case
👉 Theta → exact case (only if consistent)

👉 In practice → **focus mainly on Big-O**

---
