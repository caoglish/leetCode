


var trapRainWater = function (heightMap) {
    let xLen = heightMap[0].length
    let yLen = heightMap.length
    let count=0

    for (let i = 1; i < yLen - 1; i++) {
        for (let j = 1; j < xLen - 1; j++) {
            let self = heightMap[i][j];
            let up = heightMap[i - 1][j];
            let left = heightMap[i][j-1];
            let right = heightMap[i][j+1];
            let down = heightMap[i+1][j];
            
            let minNum=Math.min(up,right,down,left);
            //console.log(`x=${j},y=${i},self=${self},up=${up},left=${left},right=${right},down=${down},minNum=${minNum}`);
            if(self<minNum){
                count += minNum-self
            }
        }
    }
     return count;

};

// console.log(trapRainWater([
//     [1, 4, 3, 1, 3, 2],
//     [3, 2, 1, 3, 2, 4],
//     [2, 3, 3, 2, 3, 1]
// ]));

    //    let index = v.charCodeAt(0) - codeOffset;
    //    return index >= 0 && index < 26 ? morseCode[v.charCodeAt(0) - codeOffset] : "";
let pass=1;


module.exports = {
    pass: pass,
   
    trapRainWater: trapRainWater

}