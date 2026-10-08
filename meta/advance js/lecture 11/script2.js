// classes in js 
// below we are  defining a class 
class toyotaCar {
    start () {
        console.log ("start")

    } stop () {
        console.log ("stop")

    } setBrand (brand) {
        this.brandName = brand
    }
}

// let obejct_name = new classname ()
// new is a keyword that is used to crate a new object through classes 

let fortuner = new toyotaCar ()
fortuner.setBrand("fortuner")
let lexus = new toyotaCar()
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//constructor in js
//constructor is a method in class but it is a special method 
// and it is a reserved keyword 
// it is automatically invoked by new even though we did not mention in the class defination 
// its use is to initalize a object 
// constructor method is invoked whenever we use new 


