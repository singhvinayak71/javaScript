// custamer information 
let username, mobile;
document.getElementById("name").addEventListener("keyup", () => {
  username = document.getElementById("name").value;
  console.log(username);
  document.getElementById("displayUserName").innerHTML = username;
});

document.getElementById("phone").addEventListener("keyup", () => {
  mobile = document.getElementById("phone").value;
  console.log(mobile);
  document.getElementById("displayMobile").innerHTML = mobile;
});

// items 
let pizza_prize = 350;
let burger_prize = 150;
let samosa_prize = 15;
let iceCream_prize = 150;

//pizza field
let pizza_quantity = 0;
let displayPizzaField = "";
let pizzaTotalPrize = '';

document.getElementById("pizza").addEventListener("keyup", () => {

  pizza_quantity = document.getElementById("pizza").value;
  pizzaTotalPrize = pizza_prize * pizza_quantity;

  // cheak quantity field
  if (pizza_quantity == "" || pizza_quantity == 0) {
    displayPizzaField = "";
    showBill()
  } else {
    displayPizzaField = `<tr><td>Pizza</td> <td>Rs. ${pizza_prize}</td> <td> ${pizza_quantity} </td> <td> ${pizzaTotalPrize
      } </td></tr>`;
    showBill()
  }
});


// bugrer field
let burger_quantity = 0;
let displayBurgerField = "";
let burgerTotalPrize = '';

document.getElementById("burger").addEventListener("keyup", () => {
  burger_quantity = document.getElementById("burger").value; 

  burgerTotalPrize = burger_prize * burger_quantity
  console.log(burgerTotalPrize)
  
  // check quantity field
  if (burger_quantity == "" || burger_quantity == 0) {
    displayBurgerField = "";
    showBill()
  } else {
    displayBurgerField = `<tr><td>Burger</td> <td>Rs. ${burger_prize}</td> <td> ${burger_quantity} </td> <td> ${burgerTotalPrize
      } </td></tr>`;
    showBill()
  }

});


// samosa field
let samosa_quantity = 0;
let displaySamosaField = "";
let samosaTotalPrize = '';

document.getElementById("samosa").addEventListener("keyup", () => {
  samosa_quantity = document.getElementById("samosa").value;

  samosaTotalPrize = samosa_prize * samosa_quantity;

  // check quantity field
  if (samosa_quantity == "" || samosa_quantity == 0) {
    displaySamosaField = "";
    showBill()
  } else {
    displaySamosaField = `<tr><td>Samosa</td> <td>Rs. ${samosa_prize}</td> <td> ${samosa_quantity} </td> <td> ${samosaTotalPrize
      } </td></tr>`;
    showBill()
  }

});


// icecream field
let iceCream_quantity = 0;
let displayIceField = "";
let iceCreamTotalPrize = '';

document.getElementById("IceCream").addEventListener("keyup", () => {
  iceCream_quantity = document.getElementById("IceCream").value;
  iceCreamTotalPrize = iceCream_prize * iceCream_quantity
  
  // check quantity field
  if (iceCream_quantity == "" || iceCream_quantity == 0) {
    displayIceField = "";
    showBill()
  } else {
    displayIceField = `<tr><td>IceCream</td> <td>Rs. ${iceCream_prize}</td> <td> ${iceCream_quantity} </td> <td> ${iceCreamTotalPrize} </td></tr>`;
    showBill()
  }

});

// display multiple bills
function showBill() {
  document.getElementById('billStatement').innerHTML = displayBurgerField + displayPizzaField + displaySamosaField + displayIceField;

  let totalAmount = document.getElementById('totalAmount');
  totalAmount.innerHTML = `${pizzaTotalPrize + samosaTotalPrize+ burgerTotalPrize + iceCreamTotalPrize}`;
  // console.log('burger'+ burgerTotalPrize)
}