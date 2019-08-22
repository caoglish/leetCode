
/*global test  expect*/
const numSpecialEquivGroups = require('../solution/numSpecialEquivGroups').numSpecialEquivGroups;
const numSpecialEquivGroups1 = require('../solution/numSpecialEquivGroups').numSpecialEquivGroups1;


test('numSpecialEquivGroups', () => {
	expect(numSpecialEquivGroups(['a','b','c','a','c','c'])).toEqual(3);
	expect(numSpecialEquivGroups(['aa','bb','ab','ba'])).toEqual(4);
	expect(numSpecialEquivGroups(['abc','acb','bac','bca','cab','cba'])).toEqual(3);
	expect(numSpecialEquivGroups(['abcd','cdab','adcb','cbad'])).toEqual(1);
});

test('numSpecialEquivGroups1', () => {
	expect(numSpecialEquivGroups1(['a','b','c','a','c','c'])).toEqual(3);
	expect(numSpecialEquivGroups1(['aa','bb','ab','ba'])).toEqual(4);
	expect(numSpecialEquivGroups1(['abc','acb','bac','bca','cab','cba'])).toEqual(3);
	expect(numSpecialEquivGroups1(['abcd','cdab','adcb','cbad'])).toEqual(1);
});