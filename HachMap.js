import { LinkedList } from "./LinkedList.js";

class HashMap {
    buckets = new Array(16);
    
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
            this.buckets[index] = { key , value };
        } else {
            if(this.buckets[index].key == key) {
                // the key is already exist!
            } else {
                // collision
            }
        }
    }

}


const myHash = new HashMap();
console.log(myHash.set('john', 1));
console.log(myHash.set('john', 2));
console.log(myHash.set('john', 2));


const test = new LinkedList()
test.append({key : 2, value : "good "});

console.log(test.head.obj.value)




