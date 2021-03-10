//1.) Write a function that returns an  array of array like [[key, value]]
const data = { a: 1, b: 2 };
console.log(arraypairs(data)); // [['a', 1], ['b', 2]]
//---------------------------------------------

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

//------------------------------------------------
function Compare(object1, object2) {
    // const obj1 = Object.keys(object1).length;
    // const obj2 = Object.keys(object2).length;
    
    this.try = function(){
        if (Object.keys(object1).length === Object.keys(object2).length) { //if object keys are equal in number

            //this will return true
            //return Object.keys(obj1).every( 
                //key => obj2.hasOwnProperty(key)  //check obj2 for every key from obj1
                   //&& obj2[key] === obj1[key]); //compare values for each key
            
            for (keys in object1){
                if(object2.hasOwnProperty(keys) && object2[keys] === object1[keys]){
                    return true;
                }
            }
        } 
        return false; //if object keys are not equal in number
    }
  }

const object1 = { a: 1, b: 1 };
const object2 = { a: 1, b: 1 };
const object3 = { a: 2, b: 1, c: 3 };

let objCompare = new Compare(object1, object2);
console.log(objCompare.try())

