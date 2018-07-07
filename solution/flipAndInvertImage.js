var flipAndInvertImage = function (A) {
	return A.map((v) => {
		let len = v.length;
		for (let i = 0; i < (len - 1) / 2; i++) {
			[v[i], v[len - 1 - i]] = [v[len - 1 - i], v[i]];
		}
		return v.map((vl) => {
			return +!vl;
		});
	});
};

module.exports = flipAndInvertImage;