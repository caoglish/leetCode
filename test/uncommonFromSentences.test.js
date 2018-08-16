const uncommonFromSentences = require('../solution/uncommonFromSentences');

test('uncommonFromSentences', () => {
	expect(uncommonFromSentences('this apple is sweet', 'this apple is sour')).toEqual(['sweet', 'sour']);
	expect(uncommonFromSentences('apple apple', 'banana')).toEqual(['banana']);
	expect(uncommonFromSentences("s z z z s", 's z ejt')).toEqual(['ejt']);

});