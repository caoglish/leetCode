/*global test  expect*/
const toGoatLatin = require('../solution/toGoatLatin');

test('toGoatLatin', () => {
	expect(toGoatLatin('I speak Goat Latin')).toBe('Imaa peaksmaaa oatGmaaaa atinLmaaaaa');
	expect(toGoatLatin('The quick brown fox jumped over the lazy dog')).toBe('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa');
	expect(toGoatLatin('Each word consists of lowercase and uppercase letters only')).toBe('Eachmaa ordwmaaa onsistscmaaaa ofmaaaaa owercaselmaaaaaa andmaaaaaaa uppercasemaaaaaaaa etterslmaaaaaaaaa onlymaaaaaaaaaa');
});