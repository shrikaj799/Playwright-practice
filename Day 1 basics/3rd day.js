/* 
Hoisting in JS
Variables declared with var and function declarations are moved to the top of their scope during compilation. So you can use them before the line where they appear in code — but var is initialized as undefined until its assignment line runs.
TDZ (Temporal Dead Zone)
A state where variables declared with let and const exist in memory but cannot be accessed until the declaration line is executed. Accessing them before declaration throws a ReferenceError. Unlike var, they are not initialized as undefined.
Quick comparison
console.log(a); // undefined (hoisted)
var a = 5;
console.log(b); // ReferenceError: Cannot access 'b' before initialization (TDZ)
let b = 5;

*/