const student = {
    name : "saiva",
    marks : 94,
    printmarks : function() {
        console.log ("marks = ", this.marks)
    }
}

// this.marks = student.marks

let arr = ["apple", "mango", "banana"]
// type of arr is object 
// arrays has also special property called prototype 
// by default methods like push pop and others come from prototype property of array 
// all js objects inherit some property and methods from the prototype object 

const employee = {
    calcTax () {
        console.log ("tax rate is 10%")
    },
    calcTax2 (){
        console.log ("tax rate is 20%")
    }
}

const  karanArjun = {
    salary : 50000,

}

// to use the method of employee in karan arjun 
//__proto__ used to set a prototype
karanArjun.__proto__= employee;
// the type of prototype : null or refernce to an object 