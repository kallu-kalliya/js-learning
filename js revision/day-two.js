// // async and awwait 
// // async function always return a prmise 
// destructuring 


// /// callback example 

// function task1 (callback) {
//     let a= 2+3
//     console.log (a)
//     callback ();
// }

// function task2 (xyz) {
//     let b = 5+6 
//     console.log(b)
//     xyz ();
// }

// function task3 (xyz) {
//     let c = 5+6+9 
//     console.log(c)
//     xyz ();
// }
// function task4 (xyz) {
//     let d = 5+6+7
//     console.log(d)
//     xyz ();
// }
// //task1()
// // task1(task2)

// task1(task2)
// task1 ( ()=>{
    //task2(task3)})

// //task1 (task2(task3(task4))).. this is the wrong way // task1(task2())
// task1 (()=>{
//         task2(()=>{
//             task3 (()=>{
//                 task4()
//             })
//         }

//         )
// })


// //

// let number1 =4 
// let number2= 6
// function sumsss (a,b) {
//     let c= a+b ;
// }

// sumsss (number1 , number2)

let location = 'google'
let location2 = 'google'

function makerequest (location) {
    return new Promise ((resolve,reject)=>{
        if (location=='google') {
            resolve('google says hi')

        }else {
            reject ('we only have google locatioon ')
        }
    })
}

function afterrequest (response) {
    return new Promise((resolve, reject) => {
        if (response && location2== 'meta') {
            resolve ('response has recieved ')
        }else {
            reject('response has not recived ')
        }
    })
}

// makerequest(location).then((message)=>{
//     console.log(message)
//     return afterrequest(message)
// }).then((message)=>{
//         console.log (message)
            
//     }).catch((err)=>{
//         console.log(err)
//     })

// async function () {
// }