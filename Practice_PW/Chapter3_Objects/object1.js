/*
In JavaScript, an object is a standalone entity that holds data and functionality. Think of it like a real-world object: a car, for example, has properties (color, brand, weight) and methods (start, brake, accelerate).

Instead of storing a single value (like a string or a number), an object allows you to store a collection of key-value pairs inside curly braces {}.

1) Creating a Basic Object

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true
};

console.log(person.firstName); // Output: John
console.log(person["age"]);    // Output: 30

How to Access Object Properties
You can access the data inside an object in two ways:

Dot Notation (Most common): object.property

Bracket Notation (Useful if the key is stored in a variable or has spaces): object["property"]

2) Adding Methods (Functions Inside Objects)
Objects don't just store static data; they can also perform actions. When a function is stored inside an object, it is called a method.

To reference other properties inside the same object, we use the this keyword.

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024,
  
  // This is a method
  startEngine: function() {
    return `The ${this.brand} ${this.model}'s engine is now running!`;
  }
};

// Calling the method
console.log(car.startEngine()); 
// Output: The Toyota Camry's engine is now running!

3). Modifying an Object
Objects in JavaScript are mutable, meaning you can change them after they are created, even if they are declared with const.

const user = {
  username: "coder123",
  score: 100
};

// 1. Update an existing property
user.score = 150;

// 2. Add a new property
user.location = "New York";

// 3. Delete a property
delete user.username;

console.log(user); 
// Output: { score: 150, location: 'New York' }

4) Summary Cheat Sheet
Property: A variable inside an object (e.g., color: "red").

Method: A function inside an object (e.g., drive: function() {}).

this Keyword: Refers to the current object you are inside of.

Accessing: Use object.key or object["key"].


*/