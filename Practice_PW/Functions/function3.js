//IIFN
/*
(function(){
    console.log("hi");
})
();*/

//default parameter
/*
function retry(testName, maxreties=3,delay=5){
    console.log(`retrying ${testName} upto ${maxreties} times ${delay} ms`
)}
retry("loginTest");//default
retry("registration",6, 8);*/

//function as expression of above one

/*function runtest(name,status,duration){
    return (`${name} ${status} ${duration} ms `)}

const r=runtest("login","pass",6)
console.log(r);*/

//spread parameter with function
/*function test(suitName, ...results)

{
    console.log(suitName);
    console.log(results);

}
const r= test

r("logintest",1,2,3,4)*/

//spread parameter with arrow function

const test =(suitName, ...results)=>{
console.log(suitName);
    console.log(results);

}
test("registration", "Hi", 12)