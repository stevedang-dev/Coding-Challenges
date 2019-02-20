// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7]

//      3
//     / \
//    9  20
//      /  \
//     15   7

// return its depth = 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Traversal the tree from the root:
// 3
// LST: turn left: 1 + 1 = 2
// RST: 
// turn right: 1 + root at 20
// turn right: 1 + 2 = 3

// turn left: 1 + root at 15 <--- return 1 = 2
// turn right: 1 + root at 7 <--- return 1 = 2
// back to line 35

// Find max depth of the subtree

var maxDepth = function(root) {
    if(root === null) return 0;
    return Math.max(
        1 + maxDepth(root.left), 
        1 + maxDepth(root.right)
    );
};
