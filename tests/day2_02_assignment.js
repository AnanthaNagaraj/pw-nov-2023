/*

Classroom Assignment 1:

let yourName = "suresh";
write a function to reverse the string.

// hints
1) convert the input into characters
2) loop them in reverse direction
3) concate the string
4) print the new string

Classroom Assignment 2:

If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

let fName = "MadaM";
function revrese(str){
    let outPut="";
    for(let i=str.length-1;i>=0;i--){
        let ele= str.charAt(i);
        outPut+= ele
    }

    if(str===outPut){
        console.log("Palindrome");
    }else{
        console.log("Not a Palindrome");
    }
    return outPut
}

let result=revrese(fName);
console.log("Reverse String :: " +result);



