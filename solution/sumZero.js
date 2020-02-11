/**
 * 1304. Find N Unique Integers Sum up to Zero
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let result = [];
    let len= n / 2;
    if (n % 2 == 1) result.push(0);
    for (let i = 1; i <=len; i++) {
        result.push(i);
        result.push(-i);
    }
    return result;
};
module.exports = sumZero;