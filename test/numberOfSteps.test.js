/*global test  expect*/
const numberOfSteps = require('../solution/numberOfSteps').numberOfSteps;
const numberOfSteps1 = require('../solution/numberOfSteps').numberOfSteps1;


test('numberOfSteps', () => {
    expect(numberOfSteps(14)).toEqual(6);
    expect(numberOfSteps(8)).toBe(4);
    expect(numberOfSteps(256)).toBe(9);

});

test('numberOfSteps1', () => {
    expect(numberOfSteps1(14)).toEqual(6);
    expect(numberOfSteps1(8)).toBe(4);
    expect(numberOfSteps1(256)).toBe(9);

});