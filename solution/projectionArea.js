var projectionArea = function (grid) {
	let yLen = grid.length;
	let c1 = 0;
	let c2 = 0;
	let maxArr = new Array(yLen).fill(0);
	for (let i = 0; i < yLen; i++) {
		//c1
		c1 += grid[i].reduce((sum, v) => {
			return sum += v !== 0 ? 1 : 0
		}, 0);
		//c2
		c2 += Math.max(...grid[i]);
		//c3
		grid[i].forEach((v, i) => {
			if (maxArr[i] < v) maxArr[i] = v;
		});
	}

	let c3 = maxArr.reduce((sum, v) => sum += v, 0);
	return c1 + c2 + c3;
};

module.exports = projectionArea;