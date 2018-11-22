/**
 * 121. Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 * maxProfit1: 384ms  - 504ms
 */
var maxProfit1 = function (prices) {
	let max = 0;
	for (let t1 = 0; t1 < prices.length - 1; t1++) {
		let t2Max = t1 + 1;
		for (let t2 = t1 + 1; t2 < prices.length; t2++) {
			if (prices[t2Max] < prices[t2]) {
				t2Max = t2;
			}
		}
		if (max < prices[t2Max] - prices[t1]) max = prices[t2Max] - prices[t1];

	}
	return max;
};

//maxProfit2: 808ms - 1120ms
var maxProfit2 = function (prices) {
	let max = 0;
	while (prices.length > 0) {
		let num = prices.shift();
		let large = Math.max(...prices);

		if (large - num > max) max = large - num;
	}

	return max;
};


//maxProfit3:
// 56ms;
var maxProfit3 = function (prices) {
	let max = 0;
	let t1 = 0;
	for (let t2 = t1 + 1; t2 < prices.length; t2++) {
		if (prices[t1] > prices[t2]) {
			t1 = t2;
			continue;
		} else if (prices[t1] < prices[t2]) {
			max = Math.max(max, prices[t2] - prices[t1]);
		}
	}

	return max;
};



module.exports = {
	maxProfit1,
	maxProfit2,
	maxProfit3
};