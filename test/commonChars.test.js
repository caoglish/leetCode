/*global test  expect*/
const commonChars = require('../solution/commonChars');


test('commonChars', () => {
	expect(commonChars( ["bella","label","roller"])).toEqual(["e","l","l"]);
	expect(commonChars(["cool","lock","cook"])).toEqual( ["c","o"]);
	expect(commonChars(["bcaddcdd","cbcdccdd","ddccbdda","dacbbdad","dababdcb","bccbdaad","dbccbabd","accdddda"])).toEqual(["c","d","d"]);
	

});