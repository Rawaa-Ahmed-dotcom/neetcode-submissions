class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    heapifyUP(heap) {
        let i = heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (heap[parent] > heap[i]) {
                break;
            }
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    }
    heapifyDown(heap) {
        let i = 0;
        while (true) {
            let leftChild = 2 * i + 1;
            let rightChild = 2 * i + 2;
            let largest = i;

            if (leftChild < heap.length && heap[leftChild] > heap[largest]) {
                largest = leftChild;
            }

            if (rightChild < heap.length && heap[rightChild] > heap[largest]) {
                largest = rightChild;
            }
            if (largest === i) {
                break;
            }

            [heap[largest], heap[i]] = [heap[i], heap[largest]];

            i = largest;
        }
    }
    lastStoneWeight(stones) {
        let heap = [];
        for (let stone of stones) {
            heap.push(stone);
            this.heapifyUP(heap);
        }
        while (true) {
            if(heap.length === 1) {
                return heap[0];
                
            } 
            if(heap.length === 0) return 0;
            let heavyStones = [];
            for (let i = 0; i < 2; i++) {
                let stone = heap[0];
                heap[0] = heap[heap.length - 1];
                heap.pop();
                this.heapifyDown(heap);
                heavyStones.push(stone);
            }
            if (heavyStones[0] === heavyStones[1]) {
                heavyStones.pop();
                heavyStones.pop();
            } else {
                heavyStones[0] -= heavyStones[1];
                heavyStones.pop();
                heap.push(heavyStones[0]);
                this.heapifyUP(heap);
            }
        }
    }
}
