const car = {
    speed: 100,
    color: "blue"
}

try {
    for (prop of car) {
    console.log(prop)
    }
}catch (e){
    console.log ('there was an error')
}

const colors = ['red','orange','yellow'];
for (var color of colors) {
    console.log(color);
}

// built in methods 
// 1. The Object.keys() method
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

// 2. The Object.values() method
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

//3. The Object.entries() method
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

// loop over any object's own property keys and values.
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

//OR 

for( prop of Object.keys(clothingItem) ) {
    console.log(prop, ":", clothingItem[prop])
}



function testBracketsDynamicAccess() {
    var dynamicKey;
    if(0.1 > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

 // prop and prototype is different 