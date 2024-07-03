


//HIGHER ORDER FUNCTIONS - .forEach(), .map(), .reduce(), .filter()

// forEach()
// The forEach() method is a convenient way to iterate over the values of an array or an array-like object, such as the one returned by Object.values().

const fruits = ["apple", "banana", "orange", "kiwi", "mango"];
// for (let i=0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

// .forEach() Complex
fruits.forEach(fruit => console.log(fruit) );


const newBook = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

// Using Object.entries() to get an array of key-value pairs
const entries = Object.entries(newBook);
console.log("entries", entries);

// Iterating over the entries using forEach()
entries.forEach(function ([key, value]) {
  console.log(`${key}: ${value}`);
});

//Alternate chaining syntax
Object.entries(newBook).forEach(function ([key, value]) {
  console.log(`${key}: ${value}`);
});



// .map()
// The .map() method creates a new array with the results of calling the provided function on every element in the original array. It does not modify the original array.

const numbers = [1,2,3,4,5];


// array.forEach(function (arg) {});


//.filter()

const filterNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterNumbers.filter(function (num) {
  return num % 2 === 0;
});

// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//FIlter Complex

const products = [
  { name: "Shirt", price: 25, category: "Clothing" },
  { name: "Pants", price: 40, category: "Clothing" },
  { name: "Hat", price: 15, category: "Accessories" },
  { name: "Socks", price: 8, category: "Clothing" },
  { name: "Sunglasses", price: 20, category: "Accessories" },
];

const clothingProducts = products.filter(
  (product) => product.category === "Clothing"
);
// console.log(clothingProducts);

// .reduce()

const reduceNumbers = [1, 2, 3, 4, 5];

// const sum = reduceNumbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15

//Reduce Complex
const orders = [
  { id: 1, total: 100 },
  { id: 2, total: 200 },
  { id: 3, total: 150 },
  { id: 4, total: 75 },
];

// const totalRevenue = orders.reduce(
//   (accumulator, order) => accumulator + order.total,
//   0
// );
// console.log(totalRevenue); // Output: 525
