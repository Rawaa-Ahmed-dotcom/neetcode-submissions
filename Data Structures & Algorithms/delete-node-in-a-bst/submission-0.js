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
     * @param {number} key
     * @return {TreeNode}
     */
    findMax(root) {
       if(root === null) return null;
       if(root.right === null) return root;
       return this.findMax(root.right);
    }
    deleteNode(root, key) {
        if(root === null) return null;
        if(key < root.val) {
            root.left = this.deleteNode(root.left , key);
            return root;
        }
        if(key > root.val) {
            root.right = this.deleteNode(root.right , key);
            return root;
        }
        if(key === root.val) {
            if(root.left === null && root.right === null) {
                return null;
            }
            if(root.left !== null && root.right === null) {
               return root.left;
            }
            if(root.right !== null && root.left === null) {
                return root.right;
            }
            let max = this.findMax(root.left);
            root.val = max.val;
            root.left = this.deleteNode(root.left, max.val);
            return root;
        }
    }
}
