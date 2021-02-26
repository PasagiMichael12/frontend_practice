//#4 Checks the occurence of the 2nd number within the 1st parameter (array)

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


