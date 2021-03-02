/*#14 Write a JavaScript function to alphabetize a given string. 
console.log(arrange('acab')); //aabc */

const arrange = (a) => {
    let arr = a.split("");
    return arr.sort().join('');
}
console.log(arrange('acab'))