class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = [];
        this.k = k;
        for (let num of nums) {
            this.add(num);
        }
    }

    heapfyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) {
                break;
            }
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }
    heapfyDown() {
        let i = 0;

        while (true) {
            let leftChild = 2 * i + 1;
            let rightChild = 2 * i + 2;
            let smallest = i;
            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }

            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }

            if (smallest === i) break;

            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];

            i = smallest;
        }
    }
    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        this.heapfyUp();
        if (this.heap.length > this.k) {
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this.heapfyDown();
        }
        return this.heap[0];
    }
}
