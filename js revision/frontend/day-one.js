//async vs defer 
// var let and const 
// basics of functions 

console.log (sum (1,0))
function sum (a,b) {
    if (a>1){
        return a+b
    }
    return a-b 
    console.log ('this will never run')

}

//In simple terms hoisting is the mechanism that allows you to define a function at the bottom of your file 
// yet still use it at the top of the file before it is defined.
// hoisting as JavaScript moving something to the top of the file.
// your JavaScript code it will put your function into memory before running the code 
// which means it will be available as if it was defined at the start of your file.
// arrow functions are not hoisted.
//JavaScript does not hoist const/let variables and since an arrow function must be defined 
// as a variable it will not be hoisted to the top of your file.
//variables defined with the var keyword are actually hoisted. 


if ({} == null){
    console.log ('true')
}

console.log(typeof(null))
