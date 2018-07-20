/*global test  expect*/
const mergeTrees = require('../solution/mergeTwoBinaryTrees');


function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
let tree1 = new TreeNode(1);
tree1.left = new TreeNode(3);
tree1.left.left = new TreeNode(5);
tree1.right = new TreeNode(2);
 

//console.log(tree1);
let tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.left.right = new TreeNode(4);
tree2.right = new TreeNode(3);
tree2.right.right = new TreeNode(7);
//console.log(tree2);

let treeExpect= new TreeNode(3);
treeExpect.left = new TreeNode(4);
treeExpect.left.left = new TreeNode(5);
treeExpect.left.right = new TreeNode(4);
treeExpect.right = new TreeNode(5);
treeExpect.right.right = new TreeNode(7);
//  console.log(treeExpect);

 


     

test('mergeTrees', () => {
	expect(mergeTrees(tree1, tree2)).toEqual(treeExpect);
    

});

