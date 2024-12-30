import { LinkedList } from "./LinkedList.js";

class HashMap {
    
    constructor() {
        this.buckets = new Array(16);
        this.storedKeys = 0;
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

    checkTimeToGrowth() {
        return this.storedKeys > (this.loadFactor * this.capacity);
    }

    growth() {
        let newBuckets = new Array(this.capacity * 2);
        const myEntries = this.entries();
        this.buckets = newBuckets;
        this.capacity = this.buckets.length;
        this.storedKeys = 0;
        
        myEntries.forEach((pair) => {
            this.set(pair[0], pair[1]);
        })
    }

    set(key, value) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if(!this.buckets[index]) {
            const bucket = new LinkedList();
            bucket.append( {key, value} );
            // add a new key , stored keys +1
            this.storedKeys += 1;
            this.buckets[index] = bucket;
            // check the growth's time
            if(this.checkTimeToGrowth()) {
                this.growth();
            }
        } else {
            const myList = this.buckets[index];
            const myObj = myList.head.obj; 
            if(myObj.key == key) {
                // the key is already exist! so Update it
                myObj.value = value;
                this.buckets[index].head.obj = myObj;
            } else {
                // handle collisions with linked lists
                const addSuccess = myList.append( {key, value} );
                // add a new key , stored keys +1
                if(addSuccess) this.storedKeys += 1;
                if(this.checkTimeToGrowth()) {
                    this.growth();
                }
            }
        }

    }

    get(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
          
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
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
          
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
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
          
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

    values() {
        let arr = [];
        this.buckets.forEach((bucket) => {
            if(bucket) {
                arr = arr.concat(bucket.getArrayOfValues(bucket.head));
            }
        })
        return arr;
    }

    entries() {
        let arr = [];
        this.buckets.forEach((bucket) => {
            if(bucket) {
                arr = arr.concat(bucket.getEntries(bucket.head));
            }
        })
        return arr;
    }

}

export { HashMap }







