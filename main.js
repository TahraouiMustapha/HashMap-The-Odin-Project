import { HashMap } from "./HachMap.js";

const test = new HashMap() 
test.loadFactor = 0.75;

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.capacity)
console.log(test.buckets.length)
test.set('moon', 'silver')
test.set('moon', 'silv')
test.set('lion', 'gg')


console.log(test.capacity)
console.log(test.buckets.length)



console.log(test.length())
console.log(test.entries())
