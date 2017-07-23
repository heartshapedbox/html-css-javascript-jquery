var numberOrder = 0;

var soupPrice = 4;
var cakePrice = 5;
var coffeePrice = 2;


function takeOrder1(orderProduct) {
  console.log("Order: " + orderProduct + " = " + getProductPrice1() + "$");
  numberOrder = numberOrder + 1;
}


function takeOrder2(orderProduct) {
  console.log("Order: " + orderProduct + " = " + getProductPrice2() + "$");
  numberOrder = numberOrder + 1;
}


function takeOrder3(orderProduct) {
  console.log("Order: " + orderProduct + " = " + getProductPrice3() + "$");
  numberOrder = numberOrder + 1;
}





//get number of orders
function getNumberOrder() {
  return numberOrder;
}




//get product price
function getProductPrice1() {
  if (orderProduct = "soup") {
    return soupPrice;
  } else {
    return 0;
  }
}


function getProductPrice2() {
  if (orderProduct = "cake") {
    return cakePrice;
  } else {
    return 0;
  }
}


function getProductPrice3() {
  if (orderProduct = "coffee") {
    return coffeePrice;
  } else {
    return 0;
  }
}


//get order price without tax
function getTotalSubPrice() {
  return getProductPrice1() + getProductPrice2() + getProductPrice3();
}


//get order tax (5%)
function getTax() {
  return getTotalSubPrice() * 0.05;
}


//get order price with tax
function getTotalPrice() {
  return getTotalSubPrice() + getTax();
}



//take order
takeOrder1("soup");
takeOrder2("cake");
takeOrder3("coffee");


//log
console.log("Number of order(s): " + getNumberOrder() + ".");
console.log("Order total price without tax: " + getTotalSubPrice() + "$");
console.log("Order tax: " + getTax() + "$");
console.log("Order total price with tax: " + getTotalPrice() + "$")
