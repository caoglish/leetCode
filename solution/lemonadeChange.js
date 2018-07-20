let lemonadeChange = (bills)=>{
	let casher={
		'5':0,
		'10':0
	};
	for(let b of bills){
	
		if (b === 5) {
			casher['5']++;
		} else if (b === 10 && casher['5'] > 0) {
			casher['5']--;
			casher['10']++;
		} else if (b === 20 && casher['5'] > 0 && casher['10'] > 0) {
			casher['5']--;
			casher['10']--;
		} else if (b === 20 && casher['5'] > 2 ) {
			casher['5']-=3;
		} else if ((b === 10 && casher['5'] <= 0) || (b === 20 && (casher['5'] <= 0 || casher['10'] <= 0))) {
			return false;
		}
	}
	return true;
};
module.exports = lemonadeChange;