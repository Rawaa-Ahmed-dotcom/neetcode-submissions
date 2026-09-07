class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyLinkedList {
      constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    
   

    
    get(index) {
        if(this.count === 0) return -1;
        if (index < 0 || index >= this.count) return -1;
        if(index === 0) return this.head.value;
        if(index === this.count - 1) return this.tail.value;
        let current = this.head;
        let counter = -1;
        while(current) {
            counter++;
            if(counter === index) {
                return current.value;
            }
            current = current.next;
        }
    }

   
    addAtHead(val) {
        const newNode = new Node(val);
        if(this.count === 0) {
             this.head = newNode;
             this.tail = newNode;
         
            this.count++;
            return null;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        newNode.prev = null;
        this.head = newNode;
        this.count++;
        return null;
    }

    
    addAtTail(val) {
        const newNode = new Node(val);
        if(this.count === 0) {
            this.head = newNode;
            this.tail = newNode;
           
            this.count++;
            return null;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.count++;
        return null;
    }

  
    addAtIndex(index, val) {
        if (index < 0 || index > this.count) return;
        const node = new Node(val);
        if(index === 0) {
           return this.addAtHead(val);
        }
        if(index === this.count) {
           return this.addAtTail(val);
        }
        let current = this.head;
        let counter = -1;
        while(current) {
            counter++;
            if(counter === index -1) {
                const nextNode = current.next;
                node.next = nextNode;
                node.prev = current;
                current.next = node;
                
                nextNode.prev = node;
                
                this.count++;
                return null;
            }
            current = current.next;
            
        }
    }

 
    deleteAtIndex(index) {
        if(this.count === 0) return -1;
        if(index < 0 || index >= this.count) return -1;
        if(index === 0) {
            let deleted = this.head;
            if(this.count === 1) {
               this.head = null;
               this.tail = null;
               this.count--;
               return null;
            }
            
            this.head = deleted.next;
            this.head.prev = null;
            deleted.next = null;
            this.count--;
            
            return null;
            
        }
        if(index === this.count - 1) 
            { 
                let deleted = this.tail;
                
                this.tail = deleted.prev; 
                deleted.prev = null; 
                this.tail.next = null; 
                this.count--; 
                return null; 
            }
        
        let current = this.head;
        let counter = -1;
        while(current) {
            counter++;
            if(counter === index - 1) {
                let deleted = current.next;
                current.next = current.next.next;
                current.next.prev = current;
                deleted.next = null;
                deleted.prev = null;
                this.count--;
                return null;
                
            }
            current = current.next;
            
        }
    }
}
