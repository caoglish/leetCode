subtractProductAndSum

/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
     n=n.toString().split("");
     n=n.map(Number);
     product = n.reduce((p,n)=>p*n);
     sum=n.reduce((s,n)=>s+n);
     return product-sum;
};
module.exports = subtractProductAndSum;