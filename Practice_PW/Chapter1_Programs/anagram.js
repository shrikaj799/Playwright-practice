

function checkAnagramBySorting(word1, word2) {
    // Step 1: Check lengths
    if (word1.length !== word2.length)
         return false;

    //Box 1 has the word "apple" (5 letters).

/*Box 2 has the word "pear" (4 letters).

Do you even need to tip the boxes over and sort the letters to see if they are a match? Nope! Since 5 letters can never perfectly match 4 letters, you already know the answer is No. In computer language, false means "No". By saying return false, the robot can instantly stop working, take a break, and tell you the answer without wasting any energy sorting letters that will never match anyway!*/

    // Step 2: Sort both words alphabetically
    let sorted1 = word1.split('').sort().join('');
    let sorted2 = word2.split('').sort().join('');

    // Step 3: Compare them
    return sorted1 === sorted2;// matches then true else false
}

console.log(checkAnagramBySorting("listen", "silent")); // true
console.log(checkAnagramBySorting("hello", "world"));  // false