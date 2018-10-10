var fourSum1 = function (nums, target) {
	nums = nums.sort((a, b) => a - b);
	let len = nums.length;

	let result = [];
	for (let a = 0; a < len - 3; a++) {
		for (let b = a + 1; b < len - 2; b++) {
			for (let c = b + 1; c < len - 1; c++) {
				for (let d = c + 1; d < len; d++) {
					if (nums[a] + nums[b] + nums[c] + nums[d] == target) {
						let arr = [nums[a], nums[b], nums[c], nums[d]];
						if (JSON.stringify(result).indexOf(JSON.stringify(arr)) === -1) {
							result.push(arr);
						}
					}
				}
			}
		}
	}
	return result;
};

var fourSum2 = function (nums, target) {
	nums = nums.sort((a, b) => a - b);
	let len = nums.length;

	let result = [];
	for (let a = 0; a < len - 3; a++) {
		if (a !== 0 && nums[a] === nums[a - 1]) continue;
		for (let b = a + 1; b < len - 2; b++) {
			if (b !== a + 1 && nums[b] === nums[b - 1]) continue;
			let c1 = b + 1;
			let c2 = len - 1;
			while (c1 < c2) {
				if (nums[a] + nums[b] + nums[c1] + nums[c2] < target) {
					c1++;
				} else if (nums[a] + nums[b] + nums[c1] + nums[c2] > target) {
					c2--;
				} else {
					result.push([nums[a], nums[b], nums[c1], nums[c2]]);
					c1++;
					c2--;
					while (nums[c1] === nums[c1 - 1]) {
						c1++;
					}
					while (nums[c2] === nums[c2 + 1]) {
						c2--;
					}

				}
			}
		}
	}
	return result;
};


module.exports = {
	fourSum1,
	fourSum2
};