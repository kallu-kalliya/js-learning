/**
 * @param {number} n
 * @return {Function} counter
 */

let count = 0 


let createCounter = (n) =>{
    return (()=>{
        b = count + n ;
        count ++;
        return b 
    })
}
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */