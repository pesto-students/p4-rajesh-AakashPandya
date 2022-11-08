const maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }

  let bestBuy = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < bestBuy) bestBuy = prices[i];

    if (prices[i + 1] - bestBuy > profit) profit = prices[i + 1] - bestBuy;
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // bestBuy = 1; bestSell = 6 Hence profit = 6-1 =5
console.log(maxProfit([7, 6, 4, 3, 1])); // no transaction thus profit = 0
