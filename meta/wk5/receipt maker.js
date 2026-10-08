const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

function getPrices(taxBoolean) {
    var dish;
    for (dish of dishData) {
        var finalprice;

        if (taxBoolean == true) {
            finalprice = dish.price * tax;

        } else if (taxBoolean == false) {
            finalprice = dish.price;

        } else {
            console.log("you need to pass a boolean to get the prices done ")
            return;

        }
        console.log(`Dish: ${dish.name} price: $ ${finalprice}`)
    }

}

getPrices();

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (guests > 0 && guests < 30) {
        var discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log(`Discount is: ${discount}%`)
    } else { console.log(`the second argument must be between 0 and 30 `) }


}

getDiscount(true, 2);
getDiscount(false, 10);

getPrices(true);
getPrices(false);




