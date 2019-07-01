/**
 * 1051. Height Checker
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
	let count=0;
	let sorted= heights.map(a=>a).sort((a,b)=> a-b);
	for(let i =0;i<heights.length;i++){
		if(heights[i]!==sorted[i])	count++;
	}
	return count;
};

module.exports = heightChecker;
