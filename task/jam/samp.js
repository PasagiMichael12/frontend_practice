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


//function that checks the occurence of the 2nd number within the 1st parameter (array)
const numOccurence = (a, b) => {
    let val = 0;
    for(let x = 0; x < a.length; x++){
        if(a[x] == b){
            val += 1;
        }
    }  
    return val;
}

console.log(numOccurence([1,2,2,2,3,3,5,6], 3));


//function that checks the 2nd highest number from the array
const highestNum = (a) => {
    let highest = Math.max(...a);
    let numIndx = a.indexOf(highest);
    let newArr = a.splice(numIndx, 1);
    for(let x = 1; x <= newArr.length; x++){
        let b = a[x+1]
        if(a[x] < b){
            return b;
        }
    }  
}

console.log(highestNum([1, 10, 75, 100]));




