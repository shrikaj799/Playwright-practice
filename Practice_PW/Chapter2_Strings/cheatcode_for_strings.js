
/*
Prompt--Please create cheat sheet for functions which are available for strings with simple exaple

1) Cutting and Splitting Text

split(separator)	Cuts a string into a list (array).	
"A-B-C".split("-")


👉 ["A", "B", "C"]

slice(start, end)	Extracts a section of a string.	
"JavaScript".slice(0, 4)


👉 "Java"

substring(start, end)	Similar to slice, extracts characters.	
"Hello".substring(1, 4)


👉 "ell"

2) Changing the Casing

toUpperCase()	Makes all letters CAPITAL.	
"hello".toUpperCase()


👉 "HELLO"

toLowerCase()	Makes all letters lowercase.	
"WORLD".toLowerCase()


👉 "world"

3) Finding and Checking Text

includes(text)	Checks if a word/letter is inside.	
"Coding is fun".includes("fun")


👉 true

indexOf(text)	Finds the position of a character.	
"Apple".indexOf("p")


👉 1 (starts at 0)

startsWith(text)	Checks if it begins with specific text.	
"Batman".startsWith("Bat")


👉 true

endsWith(text)	Checks if it ends with specific text.	
"Batman".endsWith("man")


👉 true


4) Cleaning and Modifying

trim()	Removes extra spaces from both ends.	
" hi ".trim()


👉 "hi"

replace(old, new)	Swaps the first match with new text.	
"I like cats".replace("cats", "dogs")


👉 "I like dogs"

replaceAll(old, new)	Swaps every match with new text.	
"cat cat".replaceAll("cat", "dog")


👉 "dog dog"

repeat(count)	Repeats the string.	
"Ha".repeat(3)


👉 "HaHaHa"


5) Getting Single Characters

0
[index] (Bracket)	Gets character at index (returns undefined if empty).	
"Hey"[0]


👉 "H"

charAt(index)	Gets character at index (returns "" if empty).	
"Hey".charAt(0)


👉 "H"


NOTE

Two Golden Rules to Always Remember:
Index starts at 0: The first letter of any string is always at position 0, the second is 1, and so on.

Strings are Immutable: None of these methods actually change your original variable. They always return a brand new string or array. You must save the result if you want to use it!

JavaScript
let name = "  sam  ";
name.trim();          // ❌ Doesn't change 'name'
name = name.trim();   //  Correct! 'name' is now "sam"


*/
