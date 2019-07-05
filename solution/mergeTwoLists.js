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
	let link=new ListNode(0);
	let root=link;
	while(true){
		if((l2!==null&&l1!==null&&l1.val<=l2.val)||(l1!==null&&l2===null)){
			link.next=l1;
			l1=l1.next;
		}else if((l1!==null&&l2!==null&&l1.val>l2.val)||(l1===null&&l2!==null)){
			link.next=l2;
			l2=l2.next;
		}else{
			break;
		}

		link=link.next;

	}
	return root.next;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}


module.exports = {mergeTwoLists,ListNode};