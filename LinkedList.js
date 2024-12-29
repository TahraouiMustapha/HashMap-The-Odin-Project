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
                if(loopNode.obj.key == obj.key) {
                    loopNode.obj.value = obj.value;
                    return false;
                }
                loopNode = loopNode.nextNode;
            } 
            // to check the last node 
            if(loopNode.obj.key == obj.key) {
                loopNode.obj.value = obj.value;
                return false;
            }
            loopNode.nextNode = node;
            return true;
        }
    }

    getValue(key) {
        if(this.head == null) {
            return null;
        } else {
            let node = this.head ;
            while(node != null) {
                if(node.obj.key == key) {
                    return node.obj.value;
                }
                node = node.nextNode;
            }
            return null;
        }
    }   

    remove(key) {
        if(this.head == null) {
            return false;
        } else {
            if(this.head.obj.key == key) {
                this.head = this.head.nextNode;
                return true;
            }
            let node = this.head.nextNode;
            let previous = this.head;
            while(node != null) {
                if(node.obj.key == key) {
                    previous.nextNode = node.nextNode;
                    return true;
                }
                previous = node;
                node = node.nextNode;
            }

            return false;
        }
    }

    getArrayOfKeys(node) {
        if(node != null) {
            return [node.obj.key].concat(this.getArrayOfKeys(node.nextNode));
        }
        return [];
    }

    getArrayOfValues(node) {
        if(node != null) {
            return [node.obj.value].concat(this.getArrayOfValues(node.nextNode));
        }
        return [];
    }

    getEntries(node) {
        if(node != null) {
            return [node.toArray()].concat(this.getEntries(node.nextNode));
        }
        return [];
    }

}


class Node {
    constructor() {
        this.obj = null;
        this.nextNode = null;
    }

    toArray() {
        return [this.obj.key, this.obj.value];
    }
}

export { LinkedList }

