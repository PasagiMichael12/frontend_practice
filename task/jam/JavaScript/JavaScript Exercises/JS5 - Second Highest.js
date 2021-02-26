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
