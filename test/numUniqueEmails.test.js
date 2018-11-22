const numUniqueEmails = require('../solution/numUniqueEmails');

test('numUniqueEmails', () => {
	expect(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])).toBe(2);

});