// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
// here we called the function first before defining it and this is called hoisting 
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
console.log(posNumbers);

// Keep only positive numbers
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

///////////////////////////////////////////////////
// another example 

function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


//// SET TIMEOUT 
setTimeout(myFunctiontwo, 3000);

function myFunctiontwo() {
    console.log("I love You !!");
}
//// SET INTERVAL 
//setInterval(myFunction, 5000);

function myFunction() {
    let d = new Date();
    //console.log( d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
    // better if we do  this fuction on html 
}

