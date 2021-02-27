/*#11 Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
console.log(swapcase('aBcD')) //AbCd */

var regex = /([a-z]+)|([A-Z]+)/g;

const swapCase = (a) => {
    if(regex.test(a)){
        let newVal = a.replace(a, rep(a));
        return newVal;
        // let newA = a.split("");
        // return newA.map(b => b == b.toUpperCase() ? b = b.toLowerCase() : b.toUpperCase()).join('');
    }else{
        return "Please enter string only.";
    }
}

const rep = (x) => {
    return x.replace(/([a-z]+)|([A-Z]+)/g, function(par, res){
        res = par == par.toUpperCase() ? par = par.toLowerCase() : par.toUpperCase()
        return res;
    });
}

console.log(swapCase("sArsa"))