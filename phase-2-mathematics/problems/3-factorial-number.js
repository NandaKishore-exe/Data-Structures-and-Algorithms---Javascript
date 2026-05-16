// Iterative solution

function factorialNum(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

// console.log(factorialNum(6));

// Recursive solution

function factorialRecursion(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorialRecursion(n - 1);
}

console.log(`The factorial of given n : ${factorialRecursion(6)}`);

// | Approach  | Time | Space |
// | --------- | ---- | ----- |
// | Iterative | O(n) | O(1)  |
// | Recursive | O(n) | O(n)  |
