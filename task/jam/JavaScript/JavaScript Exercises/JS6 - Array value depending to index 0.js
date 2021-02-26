//#6 Print array values depending if array[0] is odd/even

//Solution #1
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

//Solution #2
let numArray = [1,4,1,3,3,9,5,7];
let x = numArray[0] % 2 == 0;

const result = numArray.filter(newList => x ? newList % 2 == 0 : newList % 2 != 0);
console.log(result);
