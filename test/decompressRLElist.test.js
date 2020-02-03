const decompressRLElist = require('../solution/decompressRLElist');

test('decompressRLElist', () => {
	expect(decompressRLElist([1,2,3,4])).toEqual([2,4,4,4]);

});