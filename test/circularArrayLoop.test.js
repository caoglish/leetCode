/*global test  expect*/
const circularArrayLoop = require('../solution/circularArrayLoop');


test('circularArrayLoop', () => {
	expect(circularArrayLoop([2,-1,1,2,2])).toBe(true);
	expect(circularArrayLoop([-1,2])).toBe(false);
	expect(circularArrayLoop( [-2,1,-1,-2,-2])).toBe(false);

});