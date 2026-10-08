// A closure is when a function "remembers" the variables from where it was created, 
// even after that outer function has finished running.
// A closure is a function that retains access to its outer scope's variables even after the outer function has returned."


function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

/*
Here's what's happening:

outer() runs, creates count = 0, and returns the inner function
Normally, once a function finishes running, its local variables should disappear
But inner still references count — so JavaScript keeps count alive in memory, just for inner to use
Every time you call counter(), it's using and updating that same count — not creating a fresh one

That "trapped" variable that keeps living on is the closure.

Why it's called a "closure" :

The inner function closes over the variables it needs from its surrounding scope. 
It carries a little backpack of variables with it wherever it goes.
 */

//another example :

function createBankAccount(balance) {
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50);      // 150
account.withdraw(30);     // 120
console.log(account.getBalance()); // 120

console.log(account.balance); // undefined — can't access directly!
// also actually it is undefined 

/*
balance isn't a public property — you can't touch it from outside. 
The only way to interact with it is through the functions that closed over it. 
This is how JS fakes "private" variables (before classes had real private fields with #). */

// interview 
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Logs: 4, 4, 4 (not 1, 2, 3!)
// var and let gives different results !! 
// var is function-scoped, not block-scoped
// let is block-scoped

/* Quick mental model

Think of it like this: every time a function is created, 
it doesn't just remember its own code 
— it keeps a live link back to the scope it was born in. 
As long as something (a returned function, a callback, an event handler) still references those variables, 
JS won't garbage-collect them.
 */



//..  to be continued 
for (var i = 1; i <= 3; i++) {
  (function(i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// what will be logged 
function createFunctions() {
  let funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(() => console.log(i));
  }
  return funcs;
}
const fns = createFunctions();
fns[0](); fns[1](); fns[2]();