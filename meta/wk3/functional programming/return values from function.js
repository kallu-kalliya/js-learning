// many fuction by deault return the value of undefined 
console.log('hello')// by default return the value of undefined 
function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog('Hello')

function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
        
    }
}

console.log(objectMaker(20));
console.log(typeof(doubleIt(10).toString()))
console.log(objectMaker(doubleIt(100) ));


const meal = ["soup", "steak", "ice cream"]
let starter = meal;
console.log(starter);