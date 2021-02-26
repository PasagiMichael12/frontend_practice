//#2 Print number closest to 100

//Solution #1
const compare = (num1, num2) => {
    if (num1 > num2){
        console.log(`${num1}`);
    } else {
        console.log(`${num2}`);
    }
}

compare(6, 31);

//Solution #2
const compare = (num1, num2) => {
    let result = (num1 > num2) ? num1 : num2;
    return result;
}

console.log(compare(69, 31));

