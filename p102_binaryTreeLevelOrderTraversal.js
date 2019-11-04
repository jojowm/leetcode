/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  var result = [];
  var curNodes = [root];

  while(curNodes.length > 0) {
    var subResult = [];
    var nextNodes = [];
    for (let i = 0; i < curNodes.length; i++) {
      subResult.push(curNodes[i].val);
      if (curNodes[i].left) {
        nextNodes.push(curNodes[i].left);
      }
      if (curNodes[i].right) {
        nextNodes.push(curNodes[i].right);
      }
    }
    result.push(subResult);
    curNodes = nextNodes;
  }
  return result;
};