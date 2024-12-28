class LinkedList {

    constructor() {
        this.head = null;
    }

    append(obj) {
        const node = new Node();
        node.obj = obj;
        if(this.head == null) {
            this.head = node;
        } else {
            let loopNode = this.head;
            while( loopNode.nextNode != null ) {
                loopNode = loopNode.nextNode;
            } 
            loopNode.nextNode = node;
        }
    }

}

class Node {
    constructor() {
        this.obj = null;
        this.nextNode = null;
    }
}

export { LinkedList }

