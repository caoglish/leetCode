const maxProfit1 = require('../solution/maxProfit').maxProfit1;
const maxProfit2 = require('../solution/maxProfit').maxProfit2;
const maxProfit3 = require('../solution/maxProfit').maxProfit3;

test('maxProfit1', () => {
	expect(maxProfit1([7, 1, 5, 3, 6, 4])).toBe(5);
	expect(maxProfit1([7, 6, 4, 3, 1])).toBe(0);
	expect(maxProfit1([1, 2])).toBe(1);

});

test('maxProfit2', () => {
	expect(maxProfit2([7, 1, 5, 3, 6, 4])).toBe(5);
	expect(maxProfit2([7, 6, 4, 3, 1])).toBe(0);
	expect(maxProfit2([1, 2])).toBe(1);

});


test('maxProfit3', () => {
	expect(maxProfit3([7, 1, 5, 3, 6, 4])).toBe(5);
	expect(maxProfit3([7, 6, 4, 3, 1])).toBe(0);
	expect(maxProfit3([1, 2])).toBe(1);

});