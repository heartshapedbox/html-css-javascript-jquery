
var orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust pizza with ' + topping);
  orderCount = orderCount + 1;
}

takeOrder('bacon', 'regular');
takeOrder('olive', 'thin');
takeOrder('cheese', 'thick');


function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

console.log('Order count without tax: ' + getSubTotal(orderCount) + '$');



function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

console.log('Order tax: ' + getTax() + '$');



function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

console.log('Order count with tax: ' + getTotal() + '$');