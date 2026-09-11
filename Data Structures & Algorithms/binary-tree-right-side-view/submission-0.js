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
    rightSideView(root) {
        if (root === null) return [];
        let queue = [root];
        let finalQueue = [[root]];
        while (queue.length) {
            let queueLength = queue.length;
            let currentLevel = [];
            for (let i = 0; i < queueLength; i++) {
                let node = queue[0];
                queue.shift();

                if (node.right) {
                    currentLevel.push(node.right);
                } else if (node.right === null) {
                    currentLevel.push(null);
                }

                if (node.left) {
                    currentLevel.push(node.left);
                } else if (node.left === null) {
                    currentLevel.push(null);
                }
            }
            if (currentLevel.length !== 0) {
                finalQueue.push(currentLevel);
                queue = [...currentLevel.filter(node => node !== null)];
            }
        }
        let rightQueue = [];
        for(let i = 0; i < finalQueue.length; i++){
           for(let j = 0; j < finalQueue[i].length ; j++) {
            if(finalQueue[i][j] !== null) {
                rightQueue.push(finalQueue[i][j]);
                break;
            }
            
           }
        }
        return rightQueue.map(node => node.val);
    }
}
