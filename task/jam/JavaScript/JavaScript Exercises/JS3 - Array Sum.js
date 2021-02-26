//#3 Sum of all array values

//Solution #1
const arraySum = (a) => {
    let sum = 0;
    for(let z = 0; z < a.length; z++){
        sum += a[z];
    }
    console.log(sum);
}

arraySum([1,2,3,4,5]);

//Solution #2
let sum = 0;
let arr = [1,2,3,4,9,5];
let result = arr.forEach(newArr => sum += newArr);
console.log(sum);