
const minimumAbsDifference = require('../solution/minimumAbsDifference');

test('minimumAbsDifference', () => {
	expect(minimumAbsDifference([4,2,1,3])).toEqual( [[1,2],[2,3],[3,4]]);
	expect(minimumAbsDifference( [1,3,6,10,15])).toEqual([[1,3]]);
	expect(minimumAbsDifference( [3,8,-10,23,19,-4,-14,27])).toEqual([[-14,-10],[19,23],[23,27]]);
	expect(minimumAbsDifference( [8,-68,-32,-81,83,93,-96,62,-103,-94,-66,74])).toEqual([[-96,-94],[-68,-66]]);


});