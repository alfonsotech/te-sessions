"use strict";

// Objects Review
const object1 = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    country: "USA",
  },
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  }, //method
};
console.log(object1);

console.log(object1.address.city)

object1.greet()

object1.name = "Mary Jane"
object1.greet()
//Object Methods

//Object literal:
const myObject = {};

//Object
//Object.create(): This method creates a new object and allows you to specify the prototype object from which the new object should inherit properties and methods.
const object2 = Object.create(object1);

console.log("object2.name", object2.name);
object2.name = 'Joe Smoe'
console.log("object2.name", object2.name);
console.log("object2", object2);

const object3 = Object.create(object2);
console.log("object3", object3);
console.log("object3.name", object3.name); //JOe SMoe

// Add additional properties to the 'student' object
object3.course = "Computer Science";
object3.year = 2022;
console.log("object3", object3);
// Access properties and methods from the prototype (person)
// console.log(students.name); // Output: "John Doe"
// student.greet(); // Output: "Hello, my name is John Doe"

// Access the new properties added to the 'student' object
// console.log(student.course); // Output: "Computer Science"
// console.log(student.year); // Output: 2022

//Object.keys(): This method returns an array of a given object's own enumerable string-keyed property names.
console.log(Object.keys(object1));

//Object.values(): This method returns an array of a given object's own enumerable string-keyed property values.
console.log(Object.values(object1));

//Object.entries(): This method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log(Object.entries(object1));

//Object.freeze(): This method freezes an object, preventing new properties from being added, existing properties from being removed, and existing properties, or their enumerability, configurability, or writability, from being changed.
Object.freeze(object1);
// object1.name = "Roger"; //error
const myArray = [1,2,3]
for(let i = 0; i < myArray.length; i++) {
 console.log('hello');
}



// When you use Object.freeze(object3), it makes the student object immutable, meaning that its properties cannot be added, removed, or modified. Any attempt to modify the object or its properties will fail silently in non-strict mode and throw an error in strict mode.
// Object.freeze(object1);

// object1.name = "Roger"; //fail
// console.log(object1);

// console.log(Object.entries(object1));

// console.log(Object.keys(object1));
// console.log(Object.values(object1));

//Iterate over an Object using for...in loop
// Define a new object
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "red",
  mileage: 25000,
};

// Use a for...in loop to iterate over the object's properties
for (let key in car) {
  console.log(`${key}, ${car[key]} is great!`);
}
const car2 = Object.create(car) 
car2.make = "Mazda"
console.log(car2)

for (let key in car2) {
  console.log(`${key}, ${car2[key]} is awesome!`)
}


