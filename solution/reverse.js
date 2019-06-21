/**
 * 7. Reverse Integer
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let digit =    parseInt( Math.log10(Math.abs(x))+1);
	let result =0;
	for(let i = digit , j =0; i >0 ; i--,j++)	{
		result= result+parseInt(x/(10**(i-1)))%10*(10**j);
	if( result <= -2147483648 ||result >= 2147483647) return 0;
	return result;
};

module.exports=reverse;