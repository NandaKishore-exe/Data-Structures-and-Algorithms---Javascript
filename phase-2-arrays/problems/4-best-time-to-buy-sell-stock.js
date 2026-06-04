// Problem:
//     Best Time to Buy and Sell Stock

// Pattern:
//     Single Pass / Running Minimum

// Algorithm:
//     1. Initialize minPrice with first day's price.
//     2. Initialize maxProfit as 0.
//     3. Traverse the array from left to right.
//     4. If current price is smaller than minPrice:
//            update minPrice.
//     5. Calculate profit by selling today:
//            current price - minPrice.
//     6. If profit is greater than maxProfit:
//            update maxProfit.
//     7. Return maxProfit.

// Time Complexity:
//     O(n)

// Space Complexity:
//     O(1)

// Key Learning:
//     Keep track of the lowest buying price seen so far.
//     At every step, calculate the best profit possible
//     if the stock is sold on the current day.

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
