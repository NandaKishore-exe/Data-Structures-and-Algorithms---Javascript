// brute force approach
// const prices = [2, 10, 1, 5];
// const prices = [7, 1, 5, 3, 6, 4];

// function bruteForceSolution(prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] > prices[i]) {
//         let currentProfit = prices[j] - prices[i];
//         if (currentProfit > maxProfit) {
//           maxProfit = currentProfit;
//         }
//       }
//     }
//   }
//   return maxProfit;
// }

// console.log(bruteForceSolution(prices));

const prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // 1. Calculate profit if we sell today
    let currentProfit = prices[i] - minPrice;

    // 2. Update maximum profit
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }

    // 3. Update minimum price for future days
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
}

console.log(maxProfit(prices));
