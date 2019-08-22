/**
 * 893. Groups of Special-Equivalent Strings
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
	let sort = (a) => {
		a = a.split('').reduce((sum, a, i) => {
			(i + 1) % 2 == 1 ? sum.odd.push(a) : sum.even.push(a);
			return sum;
		}, {
			odd: [],
			even: []
		});
		a.odd = a.odd.sort();
		a.even = a.even.sort();
		return a;
	};

	let arrayEqual = (a, b) => {
		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	};

	let specialEqual = (a, b) => {
		if (!arrayEqual(a.odd, b.odd)) return false;
		if (!arrayEqual(a.even, b.even)) return false;
		return true;
	};

	let checkInCache = (el) => {
		for (let i = 0; i < cache.length; i++) {
			if (specialEqual(cache[i], el)) {
				return;
			}
		}
		cache.push(el);
	};

	let cache = [sort(A.pop())];

	while (A.length > 0) {
		let el = sort(A.pop());
		checkInCache(el);
	}
	return cache.length;
};

let numSpecialEquivGroups1 = function (A) {
	let set = new Set();

	let sort = (x) => {
		let c = x.split('');
		let even = c.filter((x, i) => i % 2 == 1).sort().join('');
		let odd = c.filter((x, i) => i % 2 == 0).sort().join('');
		return odd + even;
	};

	A.forEach(el => {
		set.add(sort(el));
	});



	return set.size;



}
module.exports = {
	numSpecialEquivGroups,
	numSpecialEquivGroups1
};