var uncommonFromSentences = function (A, B) {
	let words= A + ' ' + B;
	let list = [];
	let result=[];
	words.split(' ').forEach((v) => {
		if (!list[v]) list[v] = 1;
		else list[v]++;
	});
	for (let key in list) {
		if (list[key] === 1) result.push(key);
	}
	return result;
};


module.exports = uncommonFromSentences;