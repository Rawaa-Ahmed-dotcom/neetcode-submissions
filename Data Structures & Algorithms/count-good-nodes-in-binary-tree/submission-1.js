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
    _goodNodes(root, maxVal , goodNodes) {
        if(root === null) return 0;
        if(root.val >= maxVal) {
            maxVal = root.val;
            goodNodes.push(maxVal);
        }
        this._goodNodes(root.left ,maxVal , goodNodes);
        this._goodNodes(root.right , maxVal , goodNodes);
        return goodNodes.length;
    }
    goodNodes(root) {
        if(root === null) return null;
        let goodNodes = [];
        return this._goodNodes(root, root.val, goodNodes);
        
    }
}
