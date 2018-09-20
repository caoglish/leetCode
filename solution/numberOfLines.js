var numberOfLines = function (widths, S) {


	let lastWidth = 0;
	let line = 1;
	for (let letter of S.split('')) {
		let w = widths[letter.charCodeAt(0) - 97]; //97 is charCode of 'a'
		lastWidth += w;
		if (lastWidth > 100) {
			line++;
			lastWidth = w;
		}
	}
	return [line, lastWidth];

};


module.exports = numberOfLines;