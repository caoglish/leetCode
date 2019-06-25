/**
 * 13. Roman to Integer
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let map = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	};

	let charlist=s.split('');
	let result=0;
	for(let i =0;i<charlist.length-1;i++){
		let char=charlist[i];
		if (map[char]>=map[charlist[i+1]]){
			result+=map[char];
		}else{
			result-=map[char];
		}
	}
	return result+map[charlist[charlist.length-1]];
};

module.exports = romanToInt;