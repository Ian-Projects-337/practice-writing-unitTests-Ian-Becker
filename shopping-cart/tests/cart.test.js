const { addItem, removeItem, getTotalItems } = require("../cart.js");

// Test 1 with addItem

describe("Testing out addItem function", () => {
  test("Testing positive case adding item and quantity", () => {
    const cart = [];
    addItem(cart, "Apple", 2);

    expect(cart[0].item).toBe("Apple");
    expect(cart[0].quantity).toBe(2);
  })

  test("Negative case: A negative quantity", () => {
    const cart = [];
    addItem(cart, "Apple", -2);
    expect(cart[0].quantity).toBe(-2);
  })

  test("Edge Case: adding a item with quantity of 0", () => {
    const cart = [];
    addItem(cart, "Applee", 0);
    expect(cart[0].quantity).toBe(0);
  })
})

// test 2 ith removeItems
describe("Testing out the removeItems function", () => {
  test(" Positive case: removing an item from the cart", () => {
    const cart = [
      { item: "Apple", quantity: 1 },
      { item: "Banana", quantity: 1 },
    ]

    const newCart = removeItem(cart, "Apple");

    expect(newCart[0].item).toBe("Banana");
  })

  test("Negative case: removing an item not in cart variable", () => {
    const cart = [{ item: "Apple", quantity: 1, }];

    const newCart = removeItem(cart, "Banana");
    expect(newCart[0].item).toBe("Apple");
  })

  test("Edge case: remove item from an empty cart", () => {
    const cart = [];
    const newCart = removeItem(cart, "Apple");
    expect(newCart.length).toBe(0);
  })

})

// test 3: testing cases for getTotalItems function

describe("Testing out getTotalItems function", () => {
  test("Positive case: returning all items in cart", () => {
    const cart = [
      { item: "Apple", quantity: 1 },
      { item: "Banana", quantity: 1 },
    ];

    expect(getTotalItems(cart)).toBe(2);

  })

  test("Negative case: returning negative items in a cart", () => {
    const cart = [
      { item: "Apple", quantity: -1 },
      { item: "Banana", quantity: -1 },
    ];

    expect(getTotalItems(cart)).toBe(-2);

  })

  test("Edge case: a empty cart", () => {
    const cart = [];
    expect(getTotalItems(cart)).toBe(0);
  })

})
