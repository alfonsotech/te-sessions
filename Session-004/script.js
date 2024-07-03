//OBJECTS
// Objects Review
const object1 = {
  name: "John Doe",
  age: 30,
  city: "New York",
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



// Creating Object Literals
const myObject = {}; //mutable data type

//Objects WIth Properties
const myPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

// object {} - any type data
const myPet = {
  animal: "dog",
};

// Getting and Setting values with Bracket and Dot Notation
// console.log('myPet["animal"]', myPet["animal"]);
console.log("myPet.animal", myPet.animal);

//Setting
myPet.name = "Dottie";
myPet.animal = "cat";
console.log("myPet>>>>>>>>>", myPet);

myPet.age = 5;
console.log("myPet", myPet);

// function swap(array) {
//   if (array["animal"] === "cat") {
//     array["animal"] = "dog";
//   } else {
//     array["animal"] = "cat";
//   }
// }

// swap(myPet);
// console.log("myPet", myPet);

// swap(myPet);
// console.log("myPet", myPet);

// let x = 1;
// function change(num) {
//   num += 1;
//   console.log(num); //2
// }
// change(x);
// console.log(x); //1

//Example 1: Simple Method

const box = {
  color: "orange",
  //method
  describe: function () {
    // console.log(`This box is orange.`);
    console.log(`box.describe:`, `This is a ${this.color} box.`); //string literal
  },
};

// Let's describe the box:
box.describe();
box.color = "red";
console.log(box);
box.describe();
// console.log(box);
box.size = "large";
console.log(box);
// console.log(box.'color');
// console.log(box["color"]);
box.describe();

//Example 2: Method with dynamic variables
const robot = {
  name: "Brenda",
  type: "Dancing Robot",

  introduce: function () {
    console.log(
      "robot.introduce:",
      `Hello, my name is ${this.name} and I'm a ${this.type}!`
    );
  },

  dance: function (greeting) {
    console.log("robot.dance:", `🎵 ${greeting}, Dancing to the rhythm! 🕺💃`);
  },
};

console.log("robot.name:", robot.name);
robot.name = "Matilda";
robot.color = "purple";
// Now, let's have the robot introduce itself and dance:
console.log(robot);
robot.introduce();

robot.dance("Greetings");
// console.log();

// console.log("robot", robot);

// Example 3: Method with array
const crystalBall = {
  tellFortune: function () {
    const fortunes = [
      "You will have a great day today!",
      "Adventure awaits you.",
      "Someone will surprise you soon.",
      "Luck is on your side.",
      "A mysterious event will change everything.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    console.log("randomIndex", randomIndex);
    console.log("crystalBall.tellFortune:", fortunes[randomIndex]);
  },
};

// Ask the crystal ball for your fortune:
crystalBall.tellFortune();

//Example 4: this keyword
const kitten = {
  name: "Whiskers",

  introduce: function () {
    console.log("kitten.introduce:", `Meeeow! I'm ${this.name}.`);
  },

  changeName: function (newName) {
    this.name = newName;
    console.log("kitten.changeName:", `My new name is ${this.name}!`);
  },
};

// Let the kitten introduce itself:
// kitten.introduce();

// Now, let's change the kitten's name and introduce again:
// kitten.changeName("Fluffy");
// kitten.introduce();

//Example 5: User
const person = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
};

// console.log("user.getFullName():", user.getFullName()); // Outputs: John Doe

// console.log('person["firstName"]:', person["firstName"]);
// console.log("person.lastName", person.lastName);
// console.log(person.lastName);

let fruit = {
  type: "Apple",
  color: "Red",
  "is Ripe": true,
  quantity: 5,
};
//Objects with Nested Objects
const person2 = {
  name: "John Doe",
  age: 30,
  address: ["123 Main", "New York", "NY"],
  favoriteColors: ["red", "blue", "green"],
};

console.log(person2.favoriteColors[0]);
