
/*#9 Write a function that compare two array. True if array have same data and vice versa.
Example:
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false */

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];

const compare = (a, b) => {
    if(a.length === b.length && a.every((v, i) => v === b[i])){
        return true;
    }else{
        return false;
    }
}
console.log(compare(arr1, arr3))

