//11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let c1 = 0;
	let c2 = height.length - 1;
	let area = 0;
	while (c1 < c2) {
		area = Math.max(Math.min(height[c1], height[c2]) * (c2 - c1), area);
		if (height[c1] < height[c2]) {
			c1++;
		} else {
			c2--;
		}
	}
	return area;
};

module.exports = maxArea;