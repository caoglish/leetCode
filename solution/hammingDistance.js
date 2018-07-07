var hammingDistance = function (x, y) {
	let pad = (2 ** 31).toString(2).replace('1', '0');

	x = (x).toString(2);
	y = (y).toString(2);


	x = pad.substring(0, pad.length - x.length) + x;
	y = pad.substring(0, pad.length - y.length) + y;

	x = x.split('');
	y = y.split('');

	let count = 0;
	for (let i = 0; i < x.length; i++) {
		if (x[i] !== y[i]) {
			count++;
		}
	}
	return count;
};

module.exports = hammingDistance;