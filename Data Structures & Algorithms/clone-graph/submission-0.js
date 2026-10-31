/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    clone(node, graph) {
        if (!graph.has(node)) {
            const newNode = new Node(node.val);
            graph.set(node, newNode);
            for (const neighbor of node.neighbors) {
                if (!graph.has(neighbor)) {
                    const newNeighbor = this.clone(neighbor, graph);
                    newNode.neighbors.push(newNeighbor);
                    graph.set(neighbor, newNeighbor);
                } else {
                    newNode.neighbors.push(graph.get(neighbor));
                }
            }
            return newNode;
        }
    }
    cloneGraph(node) {
        if (node === null) return null;
        const newGraph = new Map();
        const newNode = this.clone(node, newGraph);
        console.log(newNode);
        return newNode;
    }
}
