/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root === null) return false;
  return (Math.abs(depth(root.left) - depth(root.right)) < 1 || Math.abs(depth(root.left) - depth(root.right)) === 1) && isBalanced(root.left) && isBalanced(root.right)
  function depth(root) {
    if (root === null) return 0;
    return Math.max(depth(root.left), depth(root.right)) + 1
  }
  // return depth(root) !== -1;
  // function depth(root) {
  //   if (root === null) return 0;
  //   var left = depth(root.left);
  //   if (left === -1) return -1;
  //   var right = depth(root.right);
  //   if (right === -1) return -1;

  //   return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
  // }
};