const addOne = (value) => value + 1;
let result = 0;
const repeater = (f,times,value) => {
    //for (let i = 0; i < times; i++) { // i = 0 -> result = 4 -> i = 1 -> result = 5 -> i = 2
        result = f(f(f(f(value))));
    //}
    return result;
} 
console.log(repeater(addOne,3,8)); 









//1.41 && 1.42 && 1.43
/*Define a procedure double that takes a procedure of one argument as argument 
and returns a procedure that applies the original procedure twice. 
For example, if inc is a procedure that adds 1 to its argument, 
then (double inc) should be a procedure that adds 2. What value is returned by

*/
//execute 2x ung function

const double = (f) => f(f(x));
const inc = (value) => value + 1; 
console.log( double(inc(5)));


