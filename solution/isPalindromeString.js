/**
 * 125. Valid Palindrome
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	let len = s.length;
	let loopLen = Math.floor(len / 2);
	for (let i = 0; i < loopLen; i++) {
		let first = s[i];
		let last = s[len - 1 - i];
		if (last !== first) return false;
	}
	return true;
};
module.exports = isPalindrome;