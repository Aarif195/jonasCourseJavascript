// !Importing Module

// import { addToCart, totalPrice as price, totalQuantity } from './shopping.js'

// console.log("Importing Module");
// console.log("am here");
// addToCart('bread', 5);

// console.log(price, totalQuantity);


///////////////////////
// Importing all exporting item at the same time
// import * as shoppingCart from './shopping.js'
// shoppingCart.addToCart('bread', 5)

// console.log(shoppingCart.totalPrice, shoppingCart.totalQuantity);


///////////////////////
//2/. example of unname export/ default export
import add, { totalPrice, totalQuantity } from './shopping.js'
add('pizza', 4)
console.log(totalPrice, totalQuantity);

///////////////////////
// we can use name and default export together
// import add, { totalPrice, totalQuantity, } from "./shopping.js";
// add('fruit', 6)
// console.log(totalPrice, totalQuantity);


/////////////////////////////////
// Top-Level await/ using awiat outside async function
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data);
