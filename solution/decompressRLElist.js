/**
 * 1313. Decompress Run-Length Encoded List
 * @param {number[]} nums
 * @return {number[]}
 * 
 */

var decompressRLElist = function(nums) {
    let result=[];
    for(let i = 0 ; i < nums.length;i=i+2){
        let [a,b] =[nums[i],nums[i+1]];
        for(let k=0;k<a;k++){
            result.push(b);
        }
    }
    return result;
};

module.exports = decompressRLElist;