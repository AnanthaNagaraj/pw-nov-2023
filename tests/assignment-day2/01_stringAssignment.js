/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

const str1 = "Hello World";
const str2 = "   fly me   to   the moon  ";

function countLastWord(str1){

    if(str1.length==0)
    {
        console.log("No string");
    }
    let arrStr = str1.trim().split(' ');
    console.log(`The last word is "${arrStr[arrStr.length-1]}" with length ${arrStr[arrStr.length-1].length}`)     
    
}

// Example 1
countLastWord(str1)
// Example 2
countLastWord(str2)


function isAnagram(myStr1,myStr2){
    const outPut1=myStr1.split('').sort().join('').toLowerCase();
    const outPut2=myStr2.split('').sort().join('').toLowerCase();
    
    if(outPut1===outPut2){
        console.log(true);
    }else{
        console.log(false);
    }
}

//Example 3: 
isAnagram('listen', 'silent');
isAnagram('hello', 'world'); 