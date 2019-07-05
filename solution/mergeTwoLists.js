/**
 * 21. Merge Two Sorted Lists
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var mergeTwoLists = function(l1, l2) {
	let link=null; 
	let root=null;
	while(true){
		let node;

		if(l1===null&&l2===null){
			break;
		}else if((l1!==null&&l2===null)||(l2!==null&&l1!==null&&l1.val<=l2.val)){
			node=new ListNode(l1.val);
			l1=l1.next;
		}else if((l1===null&&l2!==null)||(l1!==null&&l2!==null&&l1.val>l2.val)){
			node=new ListNode(l2.val);
			l2=l2.next;
		}

		if(link==null){
			link=node;
			root=link;
		}else{
			link.next=node;
			link=link.next;
		}



	}
	return root;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}


module.exports = {mergeTwoLists,ListNode};