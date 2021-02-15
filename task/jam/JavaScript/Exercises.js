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
const compare = (num1, num2) => {
    if (num1 > num2){
        console.log(`${num1}`);
    } else {
        console.log(`${num2}`);
    }
}

compare(6, 31);

//#3 Sum of all array values
const arraySum = (a) => {
    let sum = 0;
    for(let z = 0; z < a.length; z++){
        sum += a[z];
    }
    console.log(sum);
}

arraySum([1,2,3,4,5]);

//#4 Checks the occurence of the 2nd number within the 1st parameter (array)
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

arrList([,2,3,4,5]);