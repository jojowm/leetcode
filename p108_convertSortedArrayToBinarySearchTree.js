/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  // 二分递归
  if (nums.length === 0) return null;
  var centerIdx = Math.floor(nums.length / 2);
  var node = new TreeNode(nums[centerIdx]);
  node.left = sortedArrayToBST(nums.slice(0, centerIdx));
  node.right = sortedArrayToBST(nums.slice(centerIdx + 1));
  return node;
};