/**
 * 1122. Relative Sort Array
* @param {number[]} arr1
* @param {number[]} arr2
* @return {number[]}
*/
var relativeSortArray = function(arr1, arr2) {
	let a=[];
	let b=[];
	for(let i = 0; i< arr1.length;i++)	{
		let index=arr2.indexOf(arr1[i]);
		if(index>=0){
			a[index]=a[index]!==undefined?a[index]+1:1;
		}else{
			b.push(arr1[i]);
		}
	}
	return arr2.reduce((sum,item,i)=>{
		return sum.concat( Array(a[i]).fill(item));
	},[]).concat(b.sort((a,b)=>a-b));

};

module.exports = relativeSortArray;