/**
 * 929. Unique Email Addresses
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
	let list = {};
	for (let m of emails) {
		let parts = m.split("@");
		parts[0] = parts[0].split("+")[0].replace(/\./g, "");
		list[parts.join("@")] = 1;

	}
	return Object.keys(list).length;
};

module.exports = numUniqueEmails;