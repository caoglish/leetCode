/**
 * 876. Middle of the Linked List
 * Definition for singly-linked list.
 * 
 */  
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const ListNode = require('../helper/ListNode');


var middleNode = function(head) {
	let count=1;
	let pointer=head;
	while(pointer.next!=null){
		count++;
		pointer=pointer.next;
	}
	let middle=Math.floor(count/2);
	pointer=head;
	for(let i=0;i<middle;i++){
		pointer=pointer.next;
	}
	
	return pointer;
    
};

module.exports = middleNode;