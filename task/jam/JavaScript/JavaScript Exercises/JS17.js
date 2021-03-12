/*1.)Write a JavaScript function to delete the property from the following object 
2.) Write a JavaScript function to retrieve all the values of an object's properties.
3.). Write a JavaScript function to check whether an object contains given property.*/

//1
function Delete(object, param){
    this.delete = function(){
        delete object[param];
        return object;
    }
}
const object = { a: 2, b: 1, c: 3 };
let text = 'c';

let objDelete = new Delete(object, text);
console.log(objDelete.delete());

//2
function Retrieve(object){
    this.retrieve = function(){
        return Object.values(object);
    }
}

const object = { a: 2, b: 1, c: 3 };

let objRetrieve = new Retrieve(object);
console.log(objRetrieve.retrieve());

//3
function Present(object, param){
    this.check = function(){
        return param in object;
    }
}

const object = { z: 2, x: 1, c: 3 };
let _check = 'x';

let objCheck = new Present(object, _check);
console.log(objCheck.check());