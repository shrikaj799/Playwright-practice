/*let fruits= ["banana","Apple", "cherry"]

fruits.sort();
console.log(fruits);*/

/*let s=[30, 5 ,71, 1]
s.sort();
console.log(s)*/

let s=[30, 5 ,71, 1]

s.sort((a,b) => a-b);//acending & for b-a decending 
console.log(s)

console.log(s.slice(1,3));

console.log(s.every(s=> s>=9))


console.log(s.some(s=> s>=9))
