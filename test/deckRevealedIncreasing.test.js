const deckRevealedIncreasing = require('../solution/deckRevealedIncreasing');

test('deckRevealedIncreasing', () => {
	expect(deckRevealedIncreasing([17,13,11,2,3,5,7])).toEqual([2,13,3,11,5,17,7]);

});