// this is closures..
let names = 'yogita'

if (names== 'yogita'){
    let rama = 'sitaram'
    console.log (rama)
}

function init() {
console.log(names)
console.log(rama)
 names = "Mozilla"
  function displayName() {
    console.log(names); }
  displayName();
  console.log(names)
}
init();
console.log (names)


 // js is asi 

 //A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
 // In other words, a closure gives a function access to its outer scope. 
 // In JavaScript, closures are created every time a function is created, 
 // at function creation time.
