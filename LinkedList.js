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

}


class Node {
    constructor() {
        this.obj = null;
        this.nextNode = null;
    }
}

//  for test
const linked = new LinkedList();
linked.append({key: 'j', value : 1})
linked.append({key: 'h', value : 2})
linked.append({key: 'bb', value : 3})


console.log(linked.getValue('not'))

export { LinkedList }

