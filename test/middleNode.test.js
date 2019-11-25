const middleNode = require('../solution/middleNode');
const ListNode = require('../helper/ListNode');

let input1= new ListNode(1);
input1.next = new ListNode(2);
input1.next.next = new ListNode(3);
input1.next.next.next = new ListNode(4);
input1.next.next.next.next = new ListNode(5);

let expect1= new ListNode(3);
expect1.next = new ListNode(4);
expect1.next.next = new ListNode(5);

let input2= new ListNode(1);
input2.next = new ListNode(2);
input2.next.next = new ListNode(3);
input2.next.next.next = new ListNode(4);
input2.next.next.next.next = new ListNode(5);
input2.next.next.next.next.next = new ListNode(6);

let expect2= new ListNode(4);
expect2.next = new ListNode(5);
expect2.next.next = new ListNode(6);


test('middleNode', () => {
	expect(middleNode(input1)).toEqual(expect1);
	expect(middleNode(input2)).toEqual(expect2);

});

