//Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let side_1=0;
let side_2=1;
let side_3=0;

if (side_1==side_2 && side_2==side_3){
    console.log("triangle is equilateral")
}
else if(side_1===side_2) {
    console.log("triangle is isoscalas")
    }
    else if(side_2===side_3)
        console.log("triangle is isoscalas")
     else if(side_1===side_3)
        console.log("triangle is isoscalas")

else{
    console.log("triangle is scalene")
}