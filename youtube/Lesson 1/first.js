let a = 4;
a = 'ram'
console.log (a)

let arr= [3,4,5,6]
console.log(arr.splice(1,0))
console.log (arr)

function showName() {
  return console.log(this.name)
}

const person = { name: "John" };

showName();
showName.call(person);