// strings are immutable 
// string methods give us a new value but do not the original thing 

var greet = 'Hello';
var user = 'neha';
console.log (greet.length )
console.log(greet.charAt(0)) // kind of array property
console.log("siya".concat('pati').concat('ram'))// concat method on string 
console.log("ho-ho-ho".indexOf('h')); // 0
console.log("ho-ho-ho".indexOf('o')); // 1
console.log("ho-ho-ho".indexOf('-')); // 2
console.log("ho-ho-ho".split("-"))// is this how string work as array
console.log(greet.toUpperCase())
console.log(greet.toLowerCase())
console.log(greet[2]);// this is why string work as array 
console.log("ho-ho-ho".lastIndexOf('o'))
console.log("  hey you  ".trim())
// remove the whitespaces of start and the end 
console.log ("hey saiva".slice(4))
console.log ("hey saiva".slice(0,3))// number 3 index value does not get included 
console.log ("hey ram".replace("ram","raja ram"))
// replace just replace the first occurance of the search element 
// replaceAll replace all the occurance of the search element 
console.log ("hey ram! hey sita".replaceAll ("hey","hello"))


