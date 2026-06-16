//Strings--sequence of char
console.log(String(true));
let str="   Hello world    ";
console.log(str.trim())
console.log(str.length)

console.log(str[0])
console.log(str.charAt(0))
console.log(str.charCodeAt(0));
/* IMP diffrence between str[0]  & str.charAt(0)

1. Handling Out-of-Bounds Indexes (The Biggest Difference)
What happens if the string is empty, or you look for an index that doesn't exist?

str[0] returns undefined If the index is missing, it treats the string like an object and returns undefined.

str.charAt(0) returns an empty string "" It is designed specifically for strings, so it always returns a string back to you.
Example 
const str = "";

console.log(str[0]);       // Output: undefined
console.log(str.charAt(0)); // Output: ""

*/

let url="https://staging.com/api/login";
console.log(url.includes ("com"));
console.log(url.startsWith("https1"))
console.log(url.endsWith("login1"))
console.log(url.indexOf("a"))
console.log(url.lastIndexOf("a"))
console.log(url.substring(0,5))
console.log(str.toUpperCase())
console.log(str.toLowerCase())

let msg = "test:fail retry:fail"
console.log(msg.replace("fail","pass"))
console.log(msg.replaceAll("fail","pass"))

let r="pass, fail, skip".split(",")
//r.split(", ")
console.log(r) 
//VIMP note 
let data = "A-B-C";

data.split("-"); // ❌ This does nothing useful because the result is lost!
console.log(data); // Output: "A-B-C"

//created other variable to store 

let lettersArray = data.split("-"); //  Saves the new array
console.log(lettersArray); // Output: ["A", "B", "C"]

let sentence = "JavaScript is awesome";
let words = sentence.split(" ");

console.log(words);

let r1="pass, fail, skip"
let p1=r1.split(",")
console.log(p1)