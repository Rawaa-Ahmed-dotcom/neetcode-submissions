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
     * @param {number} k
     * @return {number}
     */
    inOrder(root) {
        if (root === null) return [];
        let left = this.inOrder(root.left);
        let right = this.inOrder(root.right);
        return [...left, root.val, ...right];
    }
    kthSmallest(root, k) {
        const arr = this.inOrder(root);
        return arr[k - 1];
    }
}
