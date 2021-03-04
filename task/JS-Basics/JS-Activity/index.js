//#1  Write a JavaScript function to check whether an input is a string or not.  console.log(isString('nicole') //true
const isString = (char) => {
    return typeof(char) == 'string' ? true : false;
}
console.log(isString(1));

//#2 Write a JavaScript function that takes a string which has lower and upper case letters 
//as a parameter and converts upper case letters to lower case, and lower case letters to upper case. console.log(swapcase('aBcD')) // AbCd
let chars = 'abcdEFG';
const swapCase = (string) => {
    let value = string.split("").map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())
    return value.join("");
}
console.log(swapCase(chars));
/* for(let i = 0; i < values.length; i++)
    {
        if(values[i] == values[i].toUpperCase())
        {
            storeStrings.push(values[i].toLowerCase());
        } else {
            storeStrings.push(values[i].toUpperCase());
        }
    }
*/

//#3 Write a JavaScript function to find a word within a string. console.log(searchKeyword('when you say you want me to go', 'you')) // "you" keyword was found 2 times.
const searchKeyword = (phrase ,toFind) => {
    let count = 0;
    phrase.split(" ").filter(e => e === toFind ? count++ : count);
    console.log(`\'${toFind}' keyword was found ${count} times`);
}
searchKeyword('when you say you want me to go you','you');

//#4  Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. console.log(1) "1st"
const getOrdinal = (number) => {
   let str = number.toString();
   let lastnum = str.length-1;
   str[lastnum] == 1 ? console.log(`${str}st`) :  str[lastnum] == 2 ? console.log(`${str}nd`) :  str[lastnum] == 3 ? console.log(`${str}rd`) :  console.log(`${str}th`)
}
getOrdinal(123123123123123123123123);

//#5 Write a JavaScript function to alphabetize a given string. console.log(arrange('acab')); //aabc
const arrangeToAlphabet = (chars) => { // A = 65, Z = 90, a = 97 , z = 122 
    let getArray = chars.split("").sort();
    return getArray.join(',');
}
console.log(arrangeToAlphabet('AbCdEfGhIjKlM'));