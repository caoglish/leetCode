const removeElement = require('../solution/removeElement');

test('removeElement', () => {

	let input1 = [3, 2, 2, 3];
	let expect1 = [2, 2];
	let input2 = [0, 1, 2, 2, 3, 0, 4, 2];
	let expect2 = [0, 1, 4, 0, 3];

	removeElement(input1,3);
	removeElement(input2,2);

	expect(input1.sort()).toEqual(expect1.sort());
	expect(input2.sort()).toEqual(expect2.sort());
});