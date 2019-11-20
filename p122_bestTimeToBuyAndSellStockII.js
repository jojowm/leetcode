/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profit = 0
  for (var i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
};
;

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))
console.log(maxProfit([6,1,3,2,4,7]))