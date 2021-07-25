const removeDuplicates = require('../solution/removeDuplicates');

test('removeDuplicates', () => {
	// console.log(removeDuplicates([1, 1, 2]));
	// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
	let input1 = [1, 1, 2];
	let expect1 = [1, 2];
	let input2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
	let expect2 = [0, 1, 2, 3, 4];
	
	removeDuplicates(input1);
	removeDuplicates(input2);

	expect(input1).toEqual(expect1);
	expect(input2).toEqual(expect2);
});