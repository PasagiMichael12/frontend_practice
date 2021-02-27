/*#12 Write a JavaScript function to find a word within a string. 
console.log(searchKeyword('when you say you want me to go', 'you')) 
// "you" keyword was found 2 times */

const searchKeyword = (a, b) => {
    let arr = a.split(" ");
    let val = 0;
    if(arr.includes(b)){
        arr.filter(newArr => newArr === b ? val += 1 : val)
        return `"${b}" keyword was found ${val} times.`
    }else{
        return `"${b}" keyword not found.`;
    }
}

console.log(searchKeyword('when you say you want me to go', 'you'))