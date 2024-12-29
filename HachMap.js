import { LinkedList } from "./LinkedList.js";

class HashMap {
    buckets = new Array(16);
    storedKeys = 0;
    
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = this.buckets.length;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode %= this.capacity;
        }
     
        return hashCode;
    } 

    set(key, value) {
        const index = this.hash(key);
        if(!this.buckets[index]) {
            const bucket = new LinkedList();
            bucket.append( {key, value} );
            // add a new key , stored keys +1
            this.storedKeys += 1;
            this.buckets[index] = bucket;
        } else {
            const myList = this.buckets[index];
            const myObj = myList.head.obj; 
            if(myObj.key == key) {
                // the key is already exist! so Update it
                myObj.value = value;
                this.buckets[index].head.obj = myObj;
            } else {
                // handle collisions with linked lists
                myList.append( {key, value} )
                // add a new key , stored keys +1
                this.storedKeys += 1;
            }
        }

    }

    get(key) {
        const index = this.hash(key);
        if(!this.buckets[index] || !this.buckets[index].head) {
            return null;
        } else {
            const myList = this.buckets[index];
            const head = myList.head;
            if(head.obj.key == key) {
                return head.obj.value;
            } else {
                return myList.getValue(key);
            }
        }
    }

    has(key) {
        const index = this.hash(key);
        if(!this.buckets[index]) {
            return false;
        } else {
            const myList = this.buckets[index];
            const head = myList.head;
            if(head.obj.key == key) {
                return true;
            } else {
                return !!myList.getValue(key);
            }
        }
    }

    remove(key) {
        const index = this.hash(key);
        if(!this.buckets[index]) {
            return false;
        } else {
            const result = this.buckets[index].remove(key);// remove method in linkedList
            if (result) {
                // succesful removed an entry with that key
                this.storedKeys -= 1;
            }
            return result;
        }
    }

    length() {
        return this.storedKeys;
    }

    clear() {
        this.buckets.forEach((bucket) => {
            if(bucket) {
                bucket.head = null;
            }
        })
        this.storedKeys = 0;
    }

    keys() {
        let arr = [];
        this.buckets.forEach((bucket) => {
            if(bucket) {
                arr = arr.concat(bucket.getArrayOfKeys(bucket.head));
            }
        })
        return arr;
    }

}


const myHash = new HashMap();
myHash.set('rabi3a', 17);
myHash.set('john', 1);
myHash.set('john', 2);// hash  = 11
myHash.set('k', 2);// hash  = 11
myHash.set('how', 2);// hash  = 11

console.log(myHash.length())

console.log(myHash.keys())








