class Animal {
    constructor (color, food)
    {this.color = color; this.food = food }
}
var myDog = Object.create(Animal)// = new Animal()

console.log (Animal)
console.log (myDog)
//To setup the inheritance relation between classes in JavaScript, 
//I can use the extends keyword, as in class B extends A.
//eg. of ploymorphism using classes in js 
class Bird extends Animal { 
    useWings() {
        console.log("flying!")
    }  
}
class Eagle extends Bird{
    useWings() {
        super.useWings()
        console.log("barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin ();

baldEagle.useWings();
kingPenguin.useWings();

console.log("abc".toUpperCase());
// encapsulation 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const bicycle ={
    bell:function (){
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell:function(){
        return "Ring, ring! Come here, please!"
    }
}

bicycle.bell();
door.bell();

// to make code polymorphic 
function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(bicycle);
ringTheBell(door);


//the concat() method is exhibiting polymorphic behavior
// since it behaves differently based on the context - 
//in this case, based on what data types I give it.
console.log ("abc".concat("def"));
var a = ["abc"].concat(["def"]);
console.log(a);
console.log(["abc"] + ["def"]);

class janwar {
    constructor (food,color)
    {this.food = food ; this.color=color }

}
var doggy = new janwar()
console.log (janwar)

