/*global test  expect*/
const numberOfSteps = require('../solution/numberOfSteps');


test('numberOfSteps', () => {
	expect(numberOfSteps(14)).toEqual(6);
    expect(numberOfSteps(8)).toBe(4);
    expect(numberOfSteps(256)).toBe(9);

});
