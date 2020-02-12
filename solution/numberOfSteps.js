/**
 * 1342. Number of Steps to Reduce a Number to Zero
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    if (num == 0) return 0;
    let log2 = Math.log2(num);
    if (Math.floor(log2) == log2) return log2 + 1;
    let count = 0;
    while (num > 0) {
        if (num % 2 == 0) num /= 2;
        else num -= 1;
        count++;
    }
    return count;
};

var numberOfSteps1 = function (num) {
    if (!num) return 0;
    let count = 0;
    while (!!num) {
        count += (num & 1) ? 2 : 1;
        num >>= 1;
    }
    return count - 1;
};
module.exports = {
    numberOfSteps,
    numberOfSteps1
};