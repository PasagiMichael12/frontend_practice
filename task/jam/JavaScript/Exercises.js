//half pyramid
const numPyramid = (rows) => {
    let result = '';
    for (let x = 1; x <= rows; x++){
      for (let y = 1; y <= x; y++){
      result += y + ' ';
      }
     console.log(result)
     result = '';
     }  
   }

//closest to 100
const compare = (num1, num2) => {
    if (((num1 || num2) > 100) || ((num1 || num2) < 1)){
         console.log('You entered an invalid number. Please try again.');
    } else {
        if (num1 > num2){
            console.log(`${num1} is the number closest to 100.`);
        } else {
            console.log(`${num2} is the number closest to 100.`);
        }
    }
}

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
Write a function arraySum that accepts a numerically indexed array and returns the sum of the elements. For example,
// var = arraySum([1, 2, 3, 4, 5]); // output 15

let arraySum = (a) => {
    let sum = 0;
    for(let z = 0; z < a.length; z++){
        sum += a[z];
    }
    return sum;
}


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

numOccurence([1,2,2,2,3,3,5,6], 3);


//function that checks the 2nd highest number from the array
const highestNum = (a) => {
    let highest = Math.max(...a);
    let numIndx = a.indexOf(highest);
    let newArr = a.splice(numIndx, 1);
    for (let x = 1; x <= newArr.length; x++){
        let b = a[x+1];
        if(a[x] < b){
            return b;
        }
    }
}

console.log(highestNum([1, 10, 30, 45]));

//print array values depending if array[0] is odd/even

const arrList = (arr) => {
    if(arr[0] % 2 == 0){
        for(let x = 0; x < arr.length; x++){
            if(arr[x] % 2 == 0){
                console.log(arr[x]);
            }
        }
    } else {
        for(let x = 0; x < arr.length; x++){
            if(arr[x] % 2 != 0){
                console.log(arr[x]);
            }
        }
    }
}

arrList([1,2,3,4,5]);
