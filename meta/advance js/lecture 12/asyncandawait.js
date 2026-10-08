// async and await 
// async function always return a promise 
// syntax:
// async function  function_name() {...}
// await pauses the execution of its surrounding async function 
// until the promise is settled
// we can make any function a async function 
// await can only be used inside a async function 


function api () {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve (200);
        }, 2000 );
    })
}

async function getWeatherData() {
    await api(); //1st
    await api(); // 2nd 
    
    
}

/////////////////
function getData (dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data',dataId);
            resolve("success")
        }, 2000);
    })
}

async function func_name (){
    await getData(1);
    await getData(2);

}

/// in general programming we use either .then .catch or async and await !!
