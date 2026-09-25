/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    _maxDepth(root) {
        if(root === null) return 0;
        let left = this._maxDepth(root.left);
        let right = this._maxDepth(root.right);
        return 1 + Math.max(left,right);
    }
    maxDepth(root) {
       return this._maxDepth(root);
        
    }
}
