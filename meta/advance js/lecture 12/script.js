//async await >> promise chains >> callback hell
// what is async and sync programming 
// what is callback ?
// A callback is function passed as a argument to another function 
// what is a callback function ?
// what is callback hell?
// nested callback stacked below one another forming a pyramid (pyramid of doom )
// this style of programming become difficult to understand and manage 


// callback hell example 
function getdata (dataid, getNextData){
    setTimeout(() => {
        console.log("data",dataid)
        if (getNextData){
            getNextData()
        }    
    }, 2000);
}

getData(1,()=>{
    getData(2)
})
getData (1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    })
})
// what is promise ?
// promise came to solve the problem of callback  
// promise is for "eventual" completion of a task 
// it is an object in js 
// resolves and reject are two callback provided by js 
// syntax : let promise = new Promise ((resolve,reject)=>{})
// here Promise is a class
// a function with 2 handlers 
// these 2 handlers are themselves a function 
// status : unfulfilled, reject and resolve 
// when we print a promise 
// we get 3 things prototype , promise state , pormise result
// 3 states : fulfilled/ resolve , pending , rejected 
// we generally dont create promises in real life we just handle promises made by others 
// we can handle them via 2 handlers which are .then and .catch .. when through a source we get returned promise?



// promises 
let promise = new Promise((resolve, reject) => {
    console.log("hey, I am a promise ")
    resolve (123)
    // or reject by 
    // reject ("error occured ")
})

function getData (dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data',dataId);
            if (getNextData) {
                getNextData ();
            }
        }, 2000);
    })
}



// how promises help in solving the callback problem ?
// Promises let you chain async tasks instead of nesting.
// Benefits:
// Flattened structure → no pyramid.
// Better error handling → one .catch() can handle all errors.
// Composability → run tasks in sequence or parallel (Promise.all).
// Readability → looks like step-by-step logic.


// promise chaining
function asyncFunc () {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log ("some data 1")
            resolve ("success")
        }, 3000);
    })
}
// the upper code is usually done by api 
// and what we need to do usually is the below part of the code 

console.log ("fetching data1")
let p1 = asyncFunc()
p1.then ((res)=>{
    console.log(res)
})


// promise chaining :
getdata(1)
.then(res=> getdata(2))
.then(res=> getdata(3))
.then(res=> getdata(4))
.then(res=> console.log(res))


