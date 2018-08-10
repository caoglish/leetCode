var toLowerCase = function (str) {
	return str.toLowerCase();
};

var toLowerCase1 = function (str) {
	let upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let lowerCase = 'abcdefghijklmnopqrstuvwxyz';

	return str.split('').map((v)=>{
		let index=upperCase.indexOf(v);
		return index>=0? lowerCase[index]:v;
	}).join('');
};

module.exports = {
	toLowerCase: toLowerCase,
	toLowerCase1: toLowerCase1
};