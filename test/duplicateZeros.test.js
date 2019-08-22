
const duplicateZeros = require('../solution/duplicateZeros');

test('diStringMatch', () => {
	let s =[1,0,2,3,0,4,5,0];
	duplicateZeros( s);
	expect(s).toEqual([1,0,0,2,3,0,0,4]);
	s =[1,2,3];
	duplicateZeros( s);
	expect(s).toEqual( [1,2,3]);


});