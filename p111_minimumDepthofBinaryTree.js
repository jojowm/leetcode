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
var minDepth = function(root) {
  if (root === null) return 0;
  if (root.right === null && root.left === null) return 1;
  var _minDepth = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    _minDepth = Math.min(minDepth(root.left), _minDepth)
  }
  if (root.right) {
    _minDepth = Math.min(minDepth(root.right), _minDepth)
  }
  return _minDepth + 1;
};