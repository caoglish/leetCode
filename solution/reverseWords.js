/**
 * 557. Reverse Words in a String III
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	return s.split(' ').map((str) => {
		return str.split('').reverse().join('');
	}).join(' ');
};

module.exports = reverseWords;