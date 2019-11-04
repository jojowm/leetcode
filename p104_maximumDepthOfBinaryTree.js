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
var maxDepth = function(root) {
  function getDepth (root, leftDepth, rightDepth) {
    if (root !== null) {
      leftDepth = getDepth(root.left);
      rightDepth = getDepth(root.right);
      return Math.max(leftDepth, rightDepth) + 1;
    } else {
      return 0;
    }
  }
  return getDepth(root);
};