//concepts of FP 
// first class functions 
/*It means that a function in JavaScript is just another value that we can:

>> pass to other functions
>> save in a variable
>>return from other functions
 */
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);//to generate a integer between 1-10 
}

function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

//This works because functions in JavaScript are truly first-class citizens, 
//which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc.

// higher order functions ...
//>>It accepts other functions as arguments
//>>It returns functions when invoked

//A pure function returns the exact same result as long as it's given the same values.

//Another rule for a function to be considered pure is that it should not have side-effects. 
//A side-effect is any instance where a function makes a change outside of itself.

function addTwoNum(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
addTwoNum(specificNum, specificNum); // returned number is 84
addTwoNum(specificNum, randomNum);