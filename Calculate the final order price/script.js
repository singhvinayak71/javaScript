const displayName = document.getElementById("itemName");
const displayQuantity = document.getElementById('itemQuentity');
const displayPrice = document.getElementById("itemPrice");
const displayEachItemTotal = document.getElementById("itemTotal")
const displayGrandTotal = document.getElementById("totalPrice")
// displayQuantity.innerHTML = "hello" 
let obj = [
    {
        item: "Apple",
        quantity: 1,
        price: 140,
    },
    {
        item: "Banana",
        quantity: 1,
        price: 40,
    },
    {
        item: "Orange",
        quantity: 2,
        price: 70,
    },
    {
        item: "Pomegranete",
        quantity: 2,
        price: 110,
    },
    {
        item: "Pineapple",
        quantity: 3,
        price: 70,
    },
    {
        item: "Grapes",
        quantity: 2,
        price: 100,
    },
    {
        item: "Lemon",
        quantity: 0.5,
        price: 120,
    }
]
console.log(obj.length);

let total_price = 0;
let item = 0;
for (let i = 0; i < obj.length; i++) {
    // item++
    total_price += obj[i].price * obj[i].quantity
    console.log(`${obj[i].item}'s price is ${obj[i].price * obj[i].quantity}`);

    displayName.innerHTML += `<td>${obj[i].item}  </td> <br />`
    displayPrice.innerHTML += `<td>${obj[i].price}</td> /kg <br />`
    displayQuantity.innerHTML += `<td>${obj[i].quantity}</td> <br />`
    displayEachItemTotal.innerHTML += `<td>${obj[i].price * obj[i].quantity}</td> <br />`

}
console.log(`Total Price Is ${total_price}`);
displayGrandTotal.innerHTML = `Total price is  ${total_price}` 


