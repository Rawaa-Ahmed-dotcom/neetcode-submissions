class Node {
    constructor(url) {
        this.url = url;
        this.next = null;
        this.prev = null;
    }
}
class BrowserHistory {
    
    constructor(homepage) {
        const newNode = new Node(homepage);
    
        this.current = newNode;
     
    }

   
    visit(url) {
        const newNode = new Node(url);
        this.current.next = newNode;
        newNode.prev = this.current;
        this.current =  newNode;
        return  null;
    }

    
    back(steps) {
        let  current = this.current;
        while(steps > 0 && current.prev) {
            current = current.prev;
            steps--;
        }
        this.current = current;
        return current.url;
    }

   
    forward(steps) {
        let current = this.current;
        while(steps > 0 && current.next) {
            current = current.next;
            steps--;
        }
        this.current = current;
        return current.url;
    }
}
