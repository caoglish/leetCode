
/*global test  expect*/
const numSpecialEquivGroups = require('../solution/numSpecialEquivGroups');


test('numSpecialEquivGroups', () => {
	expect(numSpecialEquivGroups(['a','b','c','a','c','c'])).toEqual(3);
	expect(numSpecialEquivGroups(['aa','bb','ab','ba'])).toEqual(4);
	expect(numSpecialEquivGroups(['abc','acb','bac','bca','cab','cba'])).toEqual(3);
	expect(numSpecialEquivGroups(['abcd','cdab','adcb','cbad'])).toEqual(1);
	

});