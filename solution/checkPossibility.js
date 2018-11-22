//665	Non - decreasing Array
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
	let t1, t2, isNeedCheck = false;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			if (i + 1 === nums.length - 1) return true;
			let clone = nums.slice();
			t1 = clone.slice(i + 1);
			t2 = clone.slice(i);
			t2.splice(1, 1);
			if (i > 0) {
				let c1 = clone.slice(i - 1, i)[0];
				t1.unshift(c1);
				t2.unshift(c1);
			}
			isNeedCheck = true;
			break;
		}
	}
	if (!isNeedCheck) return true;

	let t1Increase = true;
	let t2Increase = true;
	for (let i = 0; i < t1.length - 1; i++) {
		if (t1[i] > t1[i + 1]) {
			t1Increase = false;
			break;
		}
	}

	for (let i = 0; i < t2.length - 1; i++) {
		if (t2[i] > t2[i + 1]) {
			t2Increase = false;
			break;
		}
	}
	return t1Increase || t2Increase;
};

module.exports = checkPossibility;