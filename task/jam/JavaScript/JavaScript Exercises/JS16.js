//1.) Write a function that returns an  array of array like [[key, value]]
const data = { a: 1, b: 2 };
console.log(arraypairs(data)); // [['a', 1], ['b', 2]]

//Answer
const Pair = function(x, y) {
    let data = {
        a: x,
        b: y
    }

    this.returnArray = function(){
        return Object.entries(data);
    }
}

let data1 = new Pair(4, 6);
console.log(data1.returnArray());

//2.)Write a function that compare two objects, True if objects are identical, false if objects are different.
const obj1 = { a: 1, b: 1 };
const obj2 = {a:1,b:1};
const obj3 = {a:2,b:1};

console.log(obj1,obj2) // true: obj1 and obj2 has the same value
console.log(obj1,obj3) //false: obj1 and obj 3 dont have the same value