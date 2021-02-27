/*#10 Write a JavaScript function to check whether an input is a string or not. 
console.log(isString('nicole') //true */

var regex = /^[a-zA-Z]+$/;

const isString = (a) => {
    let result = regex.test(a) ? true : false;
    return result;
}

console.log(isString("GG1GGGGG"))