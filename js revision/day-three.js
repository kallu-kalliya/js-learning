// spread and rest 
// map filter and reduce 

// spread opertor ...
// works on arrays,objects and function argument 
// spread means open up or expand something 
// rest collect the remaining items 
// same operator but different name based on which case it is been used for 
// rest is usually used with destructuring 


// map : changes each element and returns a new array of the same length 
// filter : keep only what matches .. removes items based on conditionn
// reduce : boils the array down to one single result .. could be number string object array 



let items = [1,2,3]
let copy = [items,4,5]
console.log (copy)
let copy2 = [...items,4,5]
console.log(copy2)

// rest eg 
let a = [1,2,3,4,5,8]
let [b,c,...rest]= a
console.log(b,c,rest)

b=a.map(x => x * 2)
b=a.filter(x=>x>3)
console.log (b)

let d = a.reduce((acc,x)=>{
   return acc+=x
},0)

console.log(d)