/*Dynamic property access in JavaScript means accessing an object's properties using a variable or an expression, rather than hardcoding the property name.

To do this, you must use bracket notation ([]) instead of dot notation (.).*/

const user = {
    name: "Raj",
    age: 28,
    role: "QA Engineer"
};

// 1. Hardcoded (Static) Access - Using Dot Notation
console.log(user.name); // Output: Raj

// 2. Dynamic Access - Using Bracket Notation
let keyToLookUp = "age"; 
console.log(user[keyToLookUp]); // Output: 28

// Change the variable dynamically
keyToLookUp = "role";
console.log(user[keyToLookUp]); // Output: QA Engineer