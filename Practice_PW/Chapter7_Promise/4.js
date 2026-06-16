let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");

});

testRun.then(function (data) { // Resolve
    console.log(data);
}).catch(function (error) { // Reject
    console.log(error);
}).finally(function () { // Always Executed!
    console.log("I will be executed anyhow!!");
});