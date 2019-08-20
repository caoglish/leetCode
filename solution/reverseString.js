/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
	let times=s.length%2==1?s.length/2-0.5:s.length/2;
	let last=s.length-1;
	for(let i=0;i<times;i++){
		let temp=s[i];
		s[i]=s[last-i];
		s[last-i]=temp;
	}
};

module.exports = reverseString;