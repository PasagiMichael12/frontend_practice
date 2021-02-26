//#4 Checks the occurence of the 2nd number within the 1st parameter (array)

//Solution #1
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

//Solution #2
let result = 0;
let values = [[1,2,3,3,4,4,4,4,4,5], 4];


let arrResult = values[0].forEach(newResult);
console.log(arrResult); 
