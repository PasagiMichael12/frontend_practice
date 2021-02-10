//declaring variables

let firstNumber = 100;
let secondNumber = 200;
let thirdNumber = 50;
let fourthNumber = 50;


const getHundred = (a,b) => a === 100 || b === 100 || a + b === 100 ? console.log('true'): console.log('false');

getHundred(thirdNumber,fourthNumber);



const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');
    
console.log(moveCharsForward('fghi'));

const dateToday = (today = new Date()) => {
    const months = today.getMonth();
    const day = today.getDay();
    const year = today.getFullYear();
    console.log(`${months}-${day}-${year}`);
}
dateToday();

const addNew = (str) => str.indexOf('New')  === 0 ? str :  `New! ${str}`;
console.log(addNew('New! offers'));



const anyNumbers = [5,23,5,6,7,75,845,64,23];
let temp = 0;
let storeArray = [];
for (let i = 0; i < anyNumbers.length; i++) {
    if(temp < anyNumbers[i])
    {
        temp = anyNumbers[i];
    }
    storeArray.push(temp);
}
console.log(storeArray);


const person = {
    firstName: 'Allon',
    lastName: 'Magtalas',
    age: 22,
}
console.log(person.firstName.concat(person.lastName));


//Methods
//charAt ----
const userName = 'Allon';
    //console.log(userName.charAt(4)); // fijnding the value using the index provided

    //console.log(userName.charCodeAt(0)); // returns the unicode value of letter A

    //console.log(userName.substring(0,3)); // getting from 0 index to 3 - 1

    

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();

for (x of f) {
 console.log(x);
}

var ages = [32, 33, 16, 40];
const filterAges = ages.filter(value => {
    return value >= 18 ? value : false;
});
console.log(filterAges);
