class MyStack {
    constructor() {
        this.priQueue = [];
        this.secQueue = [];

    }

    
    push(x) {
       this.secQueue.push(x);
       while(this.priQueue.length > 0) {
           this.secQueue.push(this.priQueue.shift());
       }
       let temp = this.priQueue;
       this.priQueue = this.secQueue;
       this.secQueue = temp; 
    }

    
    pop() {
        if(this.priQueue.length === 0) {
            return;
        }
        return this.priQueue.shift();
    }

    
    top() {
        if(this.priQueue.length === 0) {
            return;
        }
        return this.priQueue[0];
    }

    
    empty() {
        return this.priQueue.length === 0 && this.secQueue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
