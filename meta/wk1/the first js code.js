console.log ("happy me")// always print a message in next line 
console.log ("%shappy neha ","color:blue; font-size:20px;")
// %c is css formatting placeholder it says apply the following css after this character 
var petDog = "Rex"
var petCat  = "Pepper"
// we dont use var in coding .. var is not good 
//var ignores block boundaries (if, for, {} etc.) and only cares about function scope.
//var is just old and clumsy as compared to let and const 
//let and const are block-scoped, so they stay where they’re declared.
console.log (petDog)
console.log (petCat)
console.log ( "My pet dog's name is:",petDog)
console.log ( "My pet cat's name is:", petCat)
var catSound  = "purr"
var dogSound  = "woof"
console.log ( petDog +" says "+ dogSound)// concatentation 
//concatenation is just a fancy word for “joining things together in a sequence.”=
console.log ( petCat ,"says", catSound)
console.log("%chello guys","color:pink; font-size:20px")
/* this is a multi-line comment on a single line */
//this is also a comment
var x = 'hi ' // x is identifier and we are declaring a variable in this statement 
//In programming, an identifier is just the name you give to something so you can refer to it later (a variable, function, class, etc.).
//A “placeholder” usually means a temporary stand-in value or symbol used until something real is substituted.
var y = 'neha'
console.log ("welcome to the world of programming", x + y)
// = is a assignment operator 
//the value of the variable is called literal 
//A literal is a value that’s written directly in your code — exactly as it should be used — without needing to be computed or looked up.
// variable name can start with alphabets and _ and $
// 8pine as a variable name will throw a syntax error 
// js is case sensitive 
let d = BigInt("536")
console.log(typeof(d));
console.log(d);
let a = null // a has value of null 
let e; // here value of e is undefined 
// when we check type of any idenitifer which holds the value of null it gives object 