//1021. Remove Outermost Parentheses
var removeOuterParentheses = function(S) {
	let count=0;
	let newS='';
	for(let i=0;i<S.length;i++){
		if(S[i]=='(') {
			if(count !==0){
				newS += '(';//due to really know the string will be '(', it's faster than S[i].
			}
			count++;
		}
		if(S[i]==')'){ 
			if( count!==1){
				newS += ')';
			}
			count--;
		}
	}
	return newS;
};
	



module.exports = removeOuterParentheses;
