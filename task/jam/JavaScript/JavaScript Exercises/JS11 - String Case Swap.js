/*#11 Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
console.log(swapcase('aBcD')) //AbCd */

var regex = /^[a-zA-Z]+$/;

const swapCase = (a) => {
    if(regex.test(a)){
        let newA = a.split("");
        for(let x = 0; x < newA.length; x++){
            if(newA[x] == newA[x].toUpperCase()){
                newA[x] = newA[x].toLowerCase();
            }else{
                newA[x] = newA[x].toUpperCase();
            }
        }
        let finalResult = newA.join('');
        return finalResult;
    }else{
        return "Please enter string only.";
    }
}

console.log(swapCase("StRing"))