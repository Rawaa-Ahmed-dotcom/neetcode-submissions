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
     * @param {number} targetSum
     * @return {boolean}
     */

    hasPathSum(root, targetSum) {
        if (root === null) return false;
        targetSum -= root.val;

        if (root.left === null && root.right === null) {
            if (targetSum === 0) {
                return true;
            }
        }else {
            let left = this.hasPathSum(root.left , targetSum);
            if(left) return left;
            let right = this.hasPathSum(root.right , targetSum);
            if(right) return right;
        }
        return false;
    }
}
