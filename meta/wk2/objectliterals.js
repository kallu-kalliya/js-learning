var user = {};// this is a object literal 
//creating object with properties and values 
user = {
    name: "ram",
    age:3,
    bankbalance:5000

}
console.log (user)
console.log (user.age)

// object with bracket notation
user ["color"] = 'white '
// dot notation 
user.name = 'siya'
console.log (user)

var keys =['doors','wheels','speed']
var car = {
    doors:4,
    wheels:4,
    speed:50
}
for (i=0; i<keys.length; i++){
    console.log (car[keys[i]])
}// listing values of each keys 
// car [keys ] is a bracket notation 
// keys[i] is a array
//car.engine = function(){
  //  return (console.log ('engine is turned ON'))}
car.engine = () => console.log ('engine is turned on')
// es 6 the short way to write a function without a name 
console.log(car)
car.engine()// when you console.log this statement u get undefined as it is returning that only 

console.log(typeof(2))// and similary can ask data type of anything 
console.log(typeof('antriksh'))
console.log(typeof(true))
console.log(typeof(Symbol))
console.log(typeof(user))

// symbol is primitive you cannot use new to sym bol 
const sym1 = Symbol("foo");
// foo is the identifier of that symbol 
const sym2 = Symbol("foo");
console.log(typeof(sym2))
console.log (sym1===sym2)

// we use symbol to create a new premitive everytime

//Primitive values are data that are stored directly in a variable.
// These include numbers, booleans, strings, null, and undefined. 
//When we assign a primitive value to a variable, a copy of that value is created and stored in memo

console.log (JSON.stringify(car));
// json . stringfy convert a object to a json

