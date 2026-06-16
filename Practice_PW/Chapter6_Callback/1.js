//1st  example
/*function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ajay", sayBye);*/
//Here, sayBye() is passed as a callback to greet(), which executes after the greeting.

//2nd example VIMP see output

console.log("Start");

setTimeout(function () {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");

//Working of Callbacks in JavaScript
//JavaScript executes code line by line (synchronously), but sometimes we need to delay execution or wait for a task to complete before running the next function. Callbacks help achieve this by passing a function that is executed later.

//setTimeout() is an asynchronous function that takes a callback to execute after 2 seconds.
//The rest of the code continues executing without waiting.
