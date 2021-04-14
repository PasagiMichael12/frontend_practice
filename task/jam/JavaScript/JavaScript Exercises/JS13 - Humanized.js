/*#13 Write a JavaScript function to humanized number (Formats a number to a human-readable string.) 
with the correct suffix such as 1st, 2nd, 3rd or 4th. console.log(1) "1st" */

/*
th - 0, 4, 5, 6, 7, 8, 9
st - 1
nd - 2
rd - 3
*/

const conv = (num) => {
    let numArr = num.toString().split("").pop();
    let th = [0, 4, 5, 6, 7, 8, 9];
    if(th.some(n => n == numArr)){
        return `${num}th`
    }else if(numArr == 1){
        return `${num}st`
    }else if(numArr == 2){
        return `${num}nd`
    }else{
        return `${num}rd`
    }
}

console.log(conv(2803))