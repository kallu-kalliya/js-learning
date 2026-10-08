try {
    Number(5).toPrecision(300)
    // to precision means we need to write a number in n number of digits 
    // eg . 123.45.toPrecision(2)gives 1.2e+2
    // eg. 123.45.toPrecision(4)gives 123.4
} catch (e){
    console.log ('there was an error')
}

console.log ((10).toString(8));//12 octal
console.log ((10).toString(2));//1010 binary
//console.log ((10).toString(100));//uncaught range error cuzzrange is upto only 2-36


try {
    console.log('hello')
} catch (e){
    console.log('caught')
}

try {
    throw newError ('there was an error');
    console.log ('hi cutieee');
} catch (err) {
    console.log (err)
}

// Error prevention 
// we prevent error to occur using try and catch block

function addTwoNums(a,b){
    try {
        if (typeof(a)!='number' || typeof(b)!='number'){
            throw new ReferenceError('one of the argument is not number');
        }else {
            console.log(a+b)
        }
    }catch(err){
        console.log("Error!",err)
    }
}
addTwoNums (5,'5')
console.log('it still works')

// defensive programming 
// we code for all scenarios as in this case for all type of input 
// //a user can enter and ask again to enter the right thing 
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; 
    var condition2 = typeof(match) == 'string' && match.length == 1; 
    if(condition1 && condition2) { 
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i+1)
                break;
            } else {
                console.log('---No match found at', i+1)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","t")

var c;
console.log(c);// undefined 
var d =''
console.log(d)
console.log(typeof(d));