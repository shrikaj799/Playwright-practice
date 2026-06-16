function boilWater(callback) {
    setTimeout(() => {
        console.log("1. Water is boiled 💧");
        callback();
    }, 2000);
}

function makeCoffee(callback) {
    setTimeout(() => {
        console.log("2. Coffee is brewed ☕");
        callback();
    }, 2000);
}

function toastBread(callback) {
    setTimeout(() => {
        console.log("3. Bread is toasted 🍞");
        callback();
    }, 1000);
}

// Triggering the Callback Hell
boilWater(() => {
    makeCoffee(() => {
        toastBread(() => {
            console.log("Breakfast is ready! 🎉");
        });
    });
});

/* Why this code is problematic:
The "Pyramid" Shape: Look at the bottom of the script. The }) brackets form a distinct pyramid shape (>). If you had 10 steps, your code would move completely off the right side of your screen.

Hard to Handle Errors: If makeCoffee fails, trying to catch that error and stop the subsequent steps requires messy if/else checks inside every single layer of your code.

Coupling: The functions are tightly bound to one another, making it tough to reuse makeCoffee anywhere else independently.*/

/* Callback hell is simply the visual and logical mess created by deeply nesting functions to control the order of asynchronous operations. Moving to Promises or async/await is the standard way to fix it.*/


// Assume the functions above return Promises instead of using callbacks...

