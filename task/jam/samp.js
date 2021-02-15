//a function that calculates the sum of all array inputs

const arraySum = (a) => {
    let sum = 0;
    for(let z = 0; z < a.length; z++){
        sum += a[z];
    }
    return sum;
    
}

console.log(arraySum([1,2,3,4,5]));


let block scope
var global scope
const constant


//a function that checks the instance of the 2nd number within the 1st parameter (array)
const numContent = (a, b) => {
    let val = 0;
    for(let x = 0; x < a.length; x++){
        if(a[x] == b){
            val += 1;
        }
    }  
    return val;
}

console.log(numContent([42,65,84,83,45,31,10,69,69,70,71,84,84,85], 84));