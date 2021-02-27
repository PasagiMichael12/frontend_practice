/*#11 Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
console.log(swapcase('aBcD')) //AbCd */

var regex = /^[a-zA-Z]+$/;

const funx = (value, index, array) => {
    value == value.toUpperCase() ? value = value.toLowerCase() : value = value.toUpperCase();
}


const swapCase = (a) => {
    if(regex.test(a)){
        let newA = a.split("");
        return newA.map(b => b == b.toUpperCase() ? b = b.toLowerCase() : b.toUpperCase()).join('');
    }else{
        return "Please enter string only.";
    }
}


console.log(swapCase("StRing"))