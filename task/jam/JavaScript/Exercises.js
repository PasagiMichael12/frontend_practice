//ARRAY & FUNCTION

//#1 Half Pyramid
const numPyramid = (r) => {
    let result = '';
    
    for (let x = 1; x <= r; x++){
      
        for (let y = 1; y <= x; y++){
            result += y + ' ';
        }
        
        console.log(result)
        result = ''; 
   }
}

numPyramid(3);

//#2 Print number closest to 100
//***Solution #1***
const compare = (num1, num2) => {
    if (num1 > num2){
        console.log(`${num1}`);
    } else {
        console.log(`${num2}`);
    }
}

compare(6, 31);

//***Solution #2***
const compare = (num1, num2) => {
    let result = (num1 > num2) ? num1 : num2;
    return result;
}

console.log(compare(69, 31));


//#3 Sum of all array values
//***Solution #1***
const arraySum = (a) => {
    let sum = 0;
    for(let z = 0; z < a.length; z++){
        sum += a[z];
    }
    console.log(sum);
}

arraySum([1,2,3,4,5]);

//***Solution #2***
let sum = 0;
let arr = [1,2,3,4,9,5];
let result = arr.forEach(newArr => sum += newArr);
console.log(sum);


//#4 Checks the occurence of the 2nd number within the 1st parameter (array)
//***Solution #1***
const numOccurence = (a, b) => {
    let val = 0;
    for(let x = 0; x < a.length; x++){
        if(a[x] == b){
            val += 1;
        }
    }  
    console.log(val);
}

numOccurence([1,2,2,2,3,3,5,6], 3);

//***Solution #2***
// let result = 0;
// let values = [[1,2,3,3,4,4,4,4,4,5], 4];


// let arrResult = values[0].forEach(newResult);
// console.log(arrResult); 


//#5 Checks the 2nd highest number from the array
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

//#6 Print array values depending if array[0] is odd/even
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



let numArray = [1,4,1,3,3,9,5,7];
let x = numArray[0] % 2 == 0;

const result = numArray.filter(newList => x ? newList % 2 == 0 : newList % 2 != 0);
console.log(result);


//Function with no parameter
const helloWorld = () => {
    return "Hello World!";
}

console.log(helloWorld());


//Write a function repeated that accepts three arguments (a function f, an integer n, and another integer x). The function should apply f to x n times. For examples:
//repeated(addOne, 2, 3); //5
    

const addOne = (a) =>{
    let newValue = a + 1;
    return newValue;
}

const repeated = (f,n,x) =>{
    let addFunc = f(x);
    let arrVal = [addFunc];
    for(let x = 0; x < n; x++){
        let num = f(arrVal[x]);
        arrVal.push(num);
    }
    //console.log(arrVal);
    console.log(arrVal[n - 1]);
}

repeated(addOne, 2, 3);