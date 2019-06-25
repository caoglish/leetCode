/**
 * 9. Palindrome Number
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	let str=""+x;
	return str.split("").reduce((r,e)=>r=e+r) ===str? true:false;
};

module.exports =isPalindrome;