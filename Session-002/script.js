// let fruits = ["apple", "banana", "orange"];

// //Bracket Notation - Getters
// console.log(fruits[0]); // Output: 'apple'
// console.log(fruits[1]); // Output: 'banana'
// console.log(fruits[2]); // Output: 'orange'

// //Setter
// fruits[1] = "grape";
// console.log(fruits); // Output: ['apple', 'grape', 'orange']
// fruits[5] = "cherry";
// console.log(fruits);

// //Length Property
// let myString = "hello world!";
// console.log(fruits.length); //6

//SIMPLE ARRAY METHODS
//Push
// let numbers = [1, 2, 3];
// numbers.push("string", false);
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

//Pop -- destructive
// let numbers = [1, 2, 3, 4, 5];
// let lastNumber = numbers.pop();
// console.log(numbers); // Output: [1, 2, 3, 4]
// console.log(lastNumber); // Output: 5

//Unshift - destructive
// let numbers = [1, 2, 3];
// numbers.unshift("string", false);
// console.log(numbers); // Output: [0, 1, 2, 3]

//Shift
// let numbers = [1, 2, 3, 4, 5];
// let firstNumber = numbers.shift();
// console.log(numbers); // Output: [2, 3, 4, 5]
// console.log(firstNumber); // Output: 1

//Slice - non-destructive
// let numbers = [1, 2, 3, 4, 5];
// let slicedNumbers = numbers.slice(2, 4);
// console.log(slicedNumbers); // Output: [2, 3, 4]
// console.log(numbers); //

//Splice - destructive
// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1, "a", "b");
// console.log(numbers); // Output: [1, 2, 'a', 'b', 4, 5]

//indexOf()
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.indexOf(3)); // Output: 2
// console.log(numbers.indexOf(6)); // Output: -1 //; falsey

//Multi-dimensional arrays
// let nestedArray = [
//   ["apple", "banana", "orange"],
//   ["red", "green", "blue"],
//   [1, 2, 3, 4, 5],
// ];

// console.log(nestedArray[0]); // Output: ['apple', 'banana', 'orange']
// console.log(nestedArray[0][0]); // Output: 'apple'
// console.log(nestedArray[1][1]); // Output: 'green'
// console.log(nestedArray[2][3]); // Output: 4

//Iterate over array with a for loop

//string and string methods
