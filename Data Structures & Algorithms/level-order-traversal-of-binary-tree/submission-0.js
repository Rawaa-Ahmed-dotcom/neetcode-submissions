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
     * @return {number[][]}
     */

    levelOrder(root) {
        if (root === null) return [];
    
        let queue = [root];
        let finalQueue = [];
        
        finalQueue = [[root]];
        while (queue.length) {
            const queueLength = queue.length;
            let currentLevel = [];
            for (let i = 0; i < queueLength; i++) {
                let node = queue[0];
                queue.shift();
                
                if (node.left) {
                    currentLevel.push(node.left);
                }
                if (node.right) {
                    currentLevel.push(node.right);
                }
            }
            if(currentLevel.length !== 0 ) {
                finalQueue.push(currentLevel);
                queue = [...currentLevel];
            }
        }
        return finalQueue.map((level) => level.map((node) => node.val));
    }
}
