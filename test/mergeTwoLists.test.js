
/*global test  expect*/



const mergeTwoLists = require('../solution/mergeTwoLists').mergeTwoLists;
const ListNode=require('../solution/mergeTwoLists').ListNode;



let  l1= new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);


let  l2= new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
console.log(l1);

console.log(l2);

let treeExpect= new ListNode(1);
treeExpect.next = new ListNode(1);
treeExpect.next.next = new ListNode(2);
treeExpect.next.next.next = new ListNode(3);
treeExpect.next.next.next.next = new ListNode(4);
treeExpect.next.next.next.next.next = new ListNode(4);



test('mergeTwoLists', () => {
	expect(mergeTwoLists(l1, l2)).toEqual(treeExpect);

});
