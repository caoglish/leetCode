/**
 * 14. Longest Common Prefix
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(strs.length===0) return '';
	if(strs.length===1) return strs.pop();
	let first=strs.pop().split('');
	let result='';
	for(let i = 0;i<first.length;i++){
		let letter= first[i];
		let flag;
		for(let word of strs){
			if(word[i]==letter){
				flag=letter;
			}else{
				return result;
			}
		}
		result+=flag;

	}
	return result;
};

module.exports = longestCommonPrefix;