
type Pizza = {
    id:number
    name: string 
    price: number 
}
type Order = {
    id : number 
    pizza: Pizza
    status : "completed" | "ordered"
}

let cashInRegister :number = 100
let nextOrderId: number = 1
let nextPizzaId : number = 1
const orderQueue: Order[] = []

const menus: Pizza[] = [
    { id:nextPizzaId++,name: "Margherita", price: 8 },
    { id:nextPizzaId++,name: "Pepperoni", price: 10 },
    { id:nextPizzaId++,name: "Hawaiian", price: 10 },
    { id:nextPizzaId++,name: "Veggie", price: 9 },
]

function addNewPizza(pizzaObj:Pizza):void {
     pizzaObj.id = nextPizzaId++
    menus.push(pizzaObj)
}

function placeOrder(pizzaName:string) : Order | undefined {
    const selectedPizza = menus.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza){
        console.error (` ${pizzaName} this pizza that you mentioned does not exist ! `)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId:number): Order| undefined{
    const order = orderQueue.find(order => order.id === orderId)
    if (!order){
        console.error ("this order id does not exist")
        return
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menus.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menus.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}


addNewPizza({ id:5,name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id:6,name: "BBQ Chicken", price: 12 })
addNewPizza({ id:7,name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menus)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)