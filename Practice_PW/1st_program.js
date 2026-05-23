/*
Question 1 — HTTP Status Code Categorizer
Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid
Sample Input/Output:
Input: 404
Output: Client Error
Input: 200
Output: Success
*/

let range=200;
if (range>=200 && range<=299)
    console.log("sucess");

else if(range>=300 && range<=399)
     console.log("Redirection");

    else if(range>=400 && range<=499)
     console.log("Client Error");

    else if(range>=500 && range<=599)
     console.log("Server Error");
    else
        console.log("Invalid");