/**
 * 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
var isValidParentheses = function (s) {
	let slist = s.split('');
	let cache = [];
	let map = {
		')': '(',
		']': '[',
		'}': '{'
	};

	let pair;

	while (slist.length>0) {
		let h = slist.pop();
		if (cache.length > 0 &&['(', '[', '{'].includes(h)) {
			pair = cache.pop();
			if (map[pair] == h) {
				continue;
			} else {
				return false;
			}
		}else{
			cache.push(h);
		}
	}
	if(cache.length===0) return true;
	return false;
};

module.exports = isValidParentheses;