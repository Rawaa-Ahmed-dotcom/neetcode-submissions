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
     * @return {boolean}
     */
    _isValidBST(root, min = -Infinity, max = Infinity) {
        if (root === null) return true;
        if (root.val <= min || root.val >= max) {
            return false;
        }
        return (
            this._isValidBST(root.left, min, root.val) &&
            this._isValidBST(root.right, root.val, max)
        );
    }
    isValidBST(root) {
        return this._isValidBST(root);
    }
}
