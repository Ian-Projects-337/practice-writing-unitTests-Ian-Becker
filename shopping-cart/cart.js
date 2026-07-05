function addItem(cart, item, quantity) {
  cart.push({
    item: item,
    quantity: quantity,
  });

  return cart;
}

function removeItem(cart, item) {
  return cart.filter(product => product.item !== item);
}

function getTotalItems(cart) {
  let total = 0;

  for (let product of cart) {
    total += product.quantity
  }

  return total;
}

module.exports = {
  addItem, removeItem, getTotalItems
};
