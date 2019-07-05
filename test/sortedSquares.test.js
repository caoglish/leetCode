
/*global test  expect*/
const sortedSquares = require('../solution/sortedSquares');


test('sortedSquares', () => {
	expect(sortedSquares( [-4,-1,0,3,10])).toEqual([0,1,9,16,100]);
	expect(sortedSquares(  [-7,-3,2,3,11])).toEqual([4,9,9,49,121]);
	expect(sortedSquares(  [-20,-19,-14,-12,-7,-5,2,2,4,6,6,7,8,9,10,12,17,17,18,18])).toEqual([4,4,16,25,36,36,49,49,64,81,100,144,144,196,289,289,324,324,361,400]);
});
