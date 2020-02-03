/**
 * 1295. Find Numbers with Even Number of Digits
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let len = nums.length;
    let result = 0;
    for(let i =0 ; i < len ; i++){
        let digit=0;
        for(let k = nums[i]; k>10;k=k/10 ){
            digit++;
        }
        digit= digit+1;
        if(digit % 2 == 0) {
            result++;
        }
        

    }

    return result;
    
};

module.exports = findNumbers;