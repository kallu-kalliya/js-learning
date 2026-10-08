// let and const
// arrow functions
// promises
// promise chaining : in .then what to execute next 
// case : data fetching first data 1 then data 2 and so on 
// just like callback hell 

let data = 'one'

const detaileddata = () => {
  return new Promise((abc, def) => {
    if (data == 'two') {
      abc("done");
    } else {
      def("failed");
    }
  });
};

detaileddata().then((message)=>{
    console.log(`yes it is done ${message}`)
}).catch((message)=>{
    console.log(`faileddd ${message}`)
})

