var intersection = function (nums1, nums2) {
	nums1 = Array.from(new Set(nums1));


	let result = [];
	nums1.forEach(v => {
		if (nums2.indexOf(v) != -1) {
			result.push(v);

		}
	});
	return result;
};

module.exports = intersection;