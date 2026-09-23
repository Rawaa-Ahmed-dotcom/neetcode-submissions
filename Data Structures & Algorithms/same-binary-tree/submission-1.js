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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let isEqual = true;
        if (p === null && q === null) return true;
        if ((p === null && q !== null) || (q === null && p !== null)) {
            isEqual = false;
            return isEqual;
        }
        if (p.val !== q.val) {
            isEqual = false;
            return isEqual;
        }
        let left = this.isSameTree(p.left, q.left);
        let right = this.isSameTree(p.right, q.right);
        if(right === false || left === false) {
            return false;
        }else return true;
    }
}
