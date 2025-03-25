// !Exporting Module
// typeof of export
// 1. name and unnamd export/ default export

//1. example of name export
console.log("Exporting Module");

const shoppingCost = 10;
const cart = [];

// example
export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${product}, ${quantity}`);
};

// example
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

//2/. example of unname export
export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${product}, ${quantity}`);
}
