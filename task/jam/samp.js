var z = 0;

const arraySum = (a) => {
    let sum = 0;
    for(var z; z < a.length; z++){
        sum += a[z];
        console.log(sum);
    }
    //return sum;
    
}

console.log(arraySum([1,2,3,4,5,6,7,8,9,10]));


let block scope
var global scope
const constant