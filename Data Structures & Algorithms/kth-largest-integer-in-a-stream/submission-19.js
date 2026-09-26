class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.arr = [];
        this.k = k;
        for (let i = 0; i < nums.length; i++) {
            this.arr.push(nums[i]);
        }
        this._heapfy();
        while (this.arr.length > k) {
            this.arr.shift();
            this._heapfy();
        }
    }

    _heapfy() {
        for (let i = this.arr.length - 1; i > 0; i--) {
            let leftChildIndex = 2 * i ;
            let rightChildIndex = leftChildIndex + 1;
            let parentIndex = Math.floor(i / 2);
            if (this.arr[parentIndex] > this.arr[i]) {
                let temp = this.arr[i];
                this.arr[i] = this.arr[parentIndex];
                this.arr[parentIndex] = temp;
            }
            if (this.arr[i] < this.arr[leftChildIndex] && this.arr[i] < this.arr[rightChildIndex]) {
                continue;
            }
            while (
                this.arr[i] > this.arr[leftChildIndex] ||
                this.arr[i] > this.arr[rightChildIndex]
            ) {
                if (this.arr[leftChildIndex] > this.arr[rightChildIndex]) {
                    let temp = this.arr[rightChildIndex];
                    this.arr[rightChildIndex] = this.arr[i];
                    this.arr[i] = temp;
                    
                } else if (this.arr[leftChildIndex] < this.arr[rightChildIndex]) {
                    let temp = this.arr[leftChildIndex];
                    this.arr[leftChildIndex] = this.arr[i];
                    this.arr[i] = temp;
                }
            }
        }
    }
    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.arr.push(val);

        this._heapfy();
        if (this.arr.length > this.k) {
            this.arr.shift();
        }
        return this.arr[0];
    }
}
