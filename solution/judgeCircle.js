var judgeCircle = function (moves) {
	let loc = {
		x: 0,
		y: 0
	};

	for (let i = 0; i < moves.length; i++) {
		switch (moves[i]) {
		case 'U':
			loc.y++;
			break;
		case 'D':
			loc.y--;
			break;
		case 'L':
			loc.x--;
			break;
		case 'R':
			loc.x++;
			break;

		default:
			break;
		}
	}

	return loc.x == 0 && loc.y == 0;

};

module.exports = judgeCircle;