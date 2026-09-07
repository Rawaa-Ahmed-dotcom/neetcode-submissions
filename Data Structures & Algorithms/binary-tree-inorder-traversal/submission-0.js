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
     * @return {number[]}
     */
   
    
    inorderTraversal(root) {
        if(root === null) return [];
     
        let left = this.inorderTraversal(root.left);
        let right = this.inorderTraversal(root.right);
        return [...left , root.val , ...right];
    }
}
