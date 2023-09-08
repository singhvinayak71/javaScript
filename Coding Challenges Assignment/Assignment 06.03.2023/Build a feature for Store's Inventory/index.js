const listItems = [
    {
        itemName : "OPPO f19 Pro",
        priceInUSD : 200
    },
    {
        itemName : "Vivo y21",
        priceInUSD : 210
    },
    {
        itemName : "Boat headphone",
        priceInUSD : 20
    },
    {
        itemName : "i phone 13",
        priceInUSD : 1900
    },
    {
        itemName : "hp leptop",
        priceInUSD : 400
    },
    {
        itemName : "Lenovo ideapad",
        priceInUSD : 380
    },
    {
        itemName : "macbook 20I",
        priceInUSD : 2010
    },
]
let itemStore = document.getElementById('itemStore')
listItems.map((items)=>{
    let price = items.priceInUSD;
    let priceInINR = price * 80
    // console.log(itemStore)
    itemStore.innerHTML += `<div><div>${items.itemName}</div><div>$${price}<span> or ${priceInINR} INR</span> </div></div>`
    console.log(`${items.itemName} is in ${price} USD or ${priceInINR} INR`)
})