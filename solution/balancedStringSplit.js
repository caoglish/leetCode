/**
 * 1221. Split a String in Balanced Strings
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0;
    let r = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'R') r++;
        else r--;
        if (!r) count++;
    }
    return count;
};

module.exports = balancedStringSplit;