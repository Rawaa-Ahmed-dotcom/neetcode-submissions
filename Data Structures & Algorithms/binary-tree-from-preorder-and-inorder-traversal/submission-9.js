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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    build(preorderStart, inorderStart, inorderEnd) {
        if (inorderStart >= inorderEnd) return null;
        let root = this.preorder[preorderStart];
        let rootIndex = this.inorder.indexOf(root);

        let left = this.build(preorderStart + 1, inorderStart, rootIndex);
        let right = this.build(
            preorderStart + 1 + (rootIndex - inorderStart),
            rootIndex + 1,
            inorderEnd,
        );

        const node = new TreeNode(root);
        node.left = left;
        node.right = right;
        return node;
    }
    buildTree(preorder, inorder) {
        this.preorder = preorder;
        this.inorder = inorder;
        return this.build(0, 0, inorder.length);
    }
}
