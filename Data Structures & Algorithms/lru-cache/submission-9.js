class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
        this.lru = null;
        this.mru = null;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let node = this.map.get(key);
        if (node !== undefined) {
            if (node.key === this.mru.key) {
                return node.value;
            } else if (node.key === this.lru.key) {
                this.lru = this.lru.next;
                node.next.prev = null;
                node.next = null;
            } else {
                node.prev.next = node.next;
                node.next.prev = node.prev;
            }
            this.mru.next = node;
            node.prev = this.mru;
            node.next = null;
            this.mru = node;
            return node.value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node = this.map.get(key);
        if (node !== undefined) {
            node.value = value;
            if (this.mru === this.lru || this.mru.key === key) {
                return;
            } else if (this.lru.key === key) {
                this.lru = this.lru.next;
                node.next.prev = null;
                node.next = null;
            } else {
                node.next.prev = node.prev;
                node.prev.next = node.next;
            }

            node.prev = this.mru;
            this.mru.next = node;
            this.mru = node;
            return;
        }
        if (this.map.size === this.capacity) {
            let lruNode = this.lru;
            if (this.capacity === 1) {
                this.lru = null;
                this.mru = null;
            } else {
                lruNode.next.prev = null;
                let temp = lruNode.next;
                lruNode.next = null;
                this.lru = temp;
            }
            this.map.delete(lruNode.key);
        }
        if (this.map.size === 0) {
            let node = { key, value, prev: null, next: null };
            this.map.set(key, node);
            this.mru = node;
            this.lru = node;
            return;
        }
        if (this.map.size < this.capacity) {
            let node = { key, value, prev: this.mru, next: null };

            this.map.set(key, node);

            this.mru.next = node;
            this.mru = node;
            return;
        }
    }
}
