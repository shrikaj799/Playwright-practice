let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
})

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });

    /*Promise.all() behaves like an AND logical operator. If any single promise in the array fails (rejects), the entire Promise.all() immediately rejects right then and there. It does not wait to see if the remaining promises finish.

Control Flow Shift: Because the second promise rejects with "DB DOWN", the execution skips the .then() block entirely and jumps straight into the .catch() block.

The .catch() Callback: The error reason ("DB DOWN") is caught and passed into the err parameter.*/