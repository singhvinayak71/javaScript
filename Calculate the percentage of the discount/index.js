
const itemName = document.querySelectorAll('.itemName').length;

for(let i = 0; i < itemName; i++){
    const itemPrice = document.querySelectorAll('.orignalPrice')[i].outerText;
    const disprice = document.querySelectorAll('.priceWithDiscount')[i].outerText;
    console.log("hello");
    let percentage = (100 - (disprice * 100) / itemPrice).toFixed(2);
    console.log(` discount is ${percentage}%`)

    document.querySelectorAll('.percentage')[i].innerHTML += `${percentage}%`

}