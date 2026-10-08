//When writing FP code, 
//we keep data and functionality separate and 
//pass data into functions only when we want something computed.
function getTotal(a,b) {
    return console.log(a + b) ;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);

//OOP  we group data and functionality as properties and methods inside objects.

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy=false
    }
}
console.log(virtualPet.sleepy) 
virtualPet.nap()
console.log(virtualPet.sleepy)


/*OOP helps us model real-life objects. 
It works best when the grouping of properties and data in an object makes logical sense - 
meaning, the properties and methods "belong together". 
Functional Programming paradigm works by keeping the data and functionality separate. 
OOP,works by keeping the data and functionality grouped in meaningful objects.

*/
//In other words, a function in JavaScript is just a value - 
// this vantage point, almost no different then a string or a number.
// "Vantage" means a position or pov from which you can see or consider something — basically, your perspective.

//functions in JavaScript are truly first-class citizens, 
//which can be assigned to variable names and 
//passed around just like I would pass around a string, a number, an object, etc.

