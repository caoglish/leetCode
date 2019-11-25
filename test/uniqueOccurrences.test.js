

const uniqueOccurrences = require('../solution/uniqueOccurrences');

test('uniqueOccurrences', () => {
	expect(uniqueOccurrences([1,2,2,1,1,3])).toBe( true);
	expect(uniqueOccurrences( [1,2])).toBe(false);
	expect(uniqueOccurrences( [-3,0,1,-3,1,1,1,-3,10,0])).toBe(true);
	


});