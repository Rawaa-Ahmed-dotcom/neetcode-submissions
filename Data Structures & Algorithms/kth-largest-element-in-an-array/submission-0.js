class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    heapfyUp(heap) {
        let i = heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (heap[parent] <= heap[i]) {
                break;
            }
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    }
    heapfyDown(heap) {
        let i = 0;

        while (true) {
            let leftChild = 2 * i + 1;
            let rightChild = 2 * i + 2;
            let smallest = i;
            if (leftChild < heap.length && heap[leftChild] < heap[smallest]) {
                smallest = leftChild;
            }

            if (rightChild < heap.length && heap[rightChild] < heap[smallest]) {
                smallest = rightChild;
            }

            if (smallest === i) break;

            [heap[smallest], heap[i]] = [heap[i], heap[smallest]];

            i = smallest;
        }
    }
    findKthLargest(nums, k) {
        let heap = [];
        for (let num of nums) {
            heap.push(num);
            this.heapfyUp(heap);
        }
        while (heap.length > k) {
            heap[0] = heap[heap.length - 1];
            heap.pop();
            this.heapfyDown(heap);
        }
        return heap[0];
    }
}
