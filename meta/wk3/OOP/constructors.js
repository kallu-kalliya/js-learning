// built - objects or native objects 
//  Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON,

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}// function to create a object just like a class 

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");

kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

kiwiIcecream.meltIt();
console.log(appleIcecream);
kiwiIcecream;
appleIcecream.meltIt();

let apple = new String("apple");
apple; // --> String {'apple'} apple is an object 
let pear = "pear";
pear; // --> "pear" it is just a string

"abcd".match(/d/);
"abcd".match(/a/);

new Date();
new Error();
new Map();
//new Promise();
new Set();
new WeakSet();
new WeakMap();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function Example() {
    return (
            Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"
    )
}
Example();


class Car {
    constructor (color, part, speed) 
    {this.color = color;
    this.speed = speed;
    this.part = part;
    }
    distanceCovered (){
        console.log ("4000");
    }
}

const car1 = new Car ("red", 8 , 60)

console.log (car1)
car1.distanceCovered();
