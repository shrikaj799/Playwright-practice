//// This is the Higher-Order Function because it takes "action" (a function) as a parameter
function repeatAction(count, action) {
    for (let i = 0; i < count; i++) {
        action(i + 1); // Running the function passed to it
    }
}

// This is a simple callback function
const sayHello = (itemNumber) => {
    console.log(`Hello! This is message number ${itemNumber}`);
};

// We pass "sayHello" inside "repeatAction"
repeatAction(3, sayHello);//Passing a Function as an Argument