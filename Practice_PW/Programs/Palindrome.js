const num=[2,0,0,2]
let s=num.length;

const rev=[];

for (let i=0;i<s;i++)
{
if (num[i]===num[(num.length-1)-i] ) //num[(num.length - 1) - i]
{
  rev.push(num[i])  //rev.push(num[i])
}
  
}

if(num.join(',')===rev.join(','))
{
    console.log("Num is palindrome")
}
else
{
    console.log("Num is not palindrome")
}

//logic is fine but here not good as per utilization

function isPalindromeNumber(num) {
    // Step 1: Convert the number to a string (e.g., 121 -> "121")
    const originalStr = num.toString();
    
    // Step 2: Split into individual characters, reverse them, and join them back
    const reversedStr = originalStr.split('').reverse().join('');
    
    // Step 3: Compare both strings
    if (originalStr === reversedStr) {
        return "Num is palindrome";
    } else {
        return "Num is not palindrome";
    }
}

// Test cases
console.log(isPalindromeNumber(121));  // Output: Num is palindrome
console.log(isPalindromeNumber(123));  // Output: Num is not palindrom




function isPalindromeNumber(num){
const originalstr=num.toString();
const revstr=originalstr.split('').reverse().join('')
if(originalstr===revstr){
return ("Num is palindrome")
}
    else{
        return ("Num is not palindrome")
    }

}
console.log(isPalindromeNumber(121));