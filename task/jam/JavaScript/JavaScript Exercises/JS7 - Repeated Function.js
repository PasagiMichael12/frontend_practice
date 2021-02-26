/*#7Write a function repeated that accepts three arguments (a function f, an integer n, and another integer x)
The function should apply f to x n times. For example:

repeated(addOne, 2, 3); //5 */  


//Solution #1
const addOne = (a) =>{
    return a + 2;
}

const repeated = (f,n,x) => {
    for(let y = 0; y < n; y++){
        x = f(x);
    }
    return x;
}

console.log(repeated(addOne, 5, 3))


//Solution #2
const addOne = (a) =>{
    return a + 1;
}

const arr = [1, 2, 3, 4];
const result = arr.map(newArr => addOne(newArr));
console.log(result);
