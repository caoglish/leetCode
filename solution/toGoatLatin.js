var toGoatLatin = function (S) {
	const vowel = ['a', 'e', 'i', 'o', 'u'];
	let slist = S.split(' ');

	return slist.map(function (word, i) {
		let letters = word.split('');
		let first = letters[0];
		let aWords = 'ma' + 'a'.repeat(i + 1);

		if (vowel.indexOf(first.toLowerCase()) >= 0) {
			return word + aWords;
		} else {
			letters.push(first);
			letters.shift();
			return (letters.join('')) + aWords;
		}
	}).join(' ');


};

module.exports = toGoatLatin;