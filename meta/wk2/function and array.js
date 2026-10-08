var color = ['red', 'blue', 'white', 'pink'];
console.log (color.toString())
let ram = ['boy',5,'delhi']
// but this type of array is not good 
// not a good preference 
console.log (ram)
function colorname(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(i + 1, arr[i])
    }
}

colorname(color);

function findletter(word, match) {
    for (i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log(`match found at ${i + 1} `)
            // $(i+1) is js in a string `` different way to write strings 
            break;
        }
    }
}
findletter("pinkishk", "k")

//arrays are objects
var fruits = [];
fruits.push('apple');
fruits.push('pear');
console.log(fruits);
fruits.pop();
console.log(fruits);
// shift: delete from start and return the value deleted 
//  and unshift: add to start 
// value of arr[n+1] is undefined 
// arrays are mutable 

//for in : Loops over keys (property names) of an object or array.
//for of : Loops over values of an iterable (arrays, strings, maps, sets, etc.).

// slice and splice  methods on array 

let sum = (a,b) =>{
    console.log (a+b)
    return (a+b)
}

console.log (typeof(sum))

// a callback is a function passed as an argument to another function 
// if a function got associated witha object that is called a method 
// methods are functions which are bind with a particular type of data type 