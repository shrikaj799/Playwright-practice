let order= new Promise (function(resolve,reject){
let foodready=false;
if (foodready)
    resolve("Pizz ready")
else
    reject("order cancelled")

}

);
console.log(order);

//here resolve,reject is a callback function 