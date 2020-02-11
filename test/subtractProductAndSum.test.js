
/*global test  expect*/
const subtractProductAndSum = require('../solution/subtractProductAndSum');


test('subtractProductAndSum', () => {
	expect(subtractProductAndSum(234)).toEqual(15 );
    expect(subtractProductAndSum(4421)).toBe(21);
    

});