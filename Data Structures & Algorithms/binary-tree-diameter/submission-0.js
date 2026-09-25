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

    diameterOfBinaryTree(root) {
        let result = 0;
        function _diameterOfBinaryTree(root) {
            if (root === null) return 0;

            let left = _diameterOfBinaryTree(root.left);
            let right = _diameterOfBinaryTree(root.right);
            result = Math.max(result, left + right);
            return 1 + Math.max(left, right);
        }
        _diameterOfBinaryTree(root);
        return result;
    }
}
