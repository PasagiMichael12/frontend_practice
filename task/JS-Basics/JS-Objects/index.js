let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
//Exercise #1
let keys = Object.keys(student)
console.log(keys.join());

//Exercise #2
delete student.rollno;
console.log(student);

//Exercise #3
let sizeOfStudentObjects = Object.keys(student).length;
console.log(sizeOfStudentObjects);
//=====================================
let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
//Exercise #4
for(let key in library)
{
   console.log([library[key]]); 
}
//Exercise #5
// const getVolume = (radius,height) => {
//     return (Math.PI)*(radius**2)*(height)
// }
// console.log(getVolume(1,2));

//====================
// copies the object to another declared object or variable
let assigned = Object.assign(library); 
console.log(assigned);


//creates new object
const person = {};
const newObj = Object.create(person);
    newObj.firstName = 'Allon';
    newObj.lastName = 'Magtalas';
console.log(newObj);
//OR
animal = {
    breed: {
        value: 'Siberian Husky',
    }
}
console.log(animal.breed.value);


//Adds name property
const dog = {};
Object.defineProperty(dog, 'breed' , {
    value: 'Siberian Husky'
}) 
console.log(dog.breed);

//Adds name properties
const plants = {};
Object.defineProperties(plants, {
    air : {
        value: 'gumamela', 
        writable: true, 
    },
    land: {
        value: 'amayana',
        water: 'everyday',
    }
})
console.log(plants.land);

//Object Entries getting [key,value] pairs
const object1 = {
    allon : 'Dev1', 
    jamol: 'Dev2',
    };

const arrayPairs = (object) => { 
    const a = Object.keys(object);

    const b = a.map(w => {
        return [w, object[w]];
    })
    console.log(b,'test');
    //OR 
    //console.log(Object.entries(object)); // OTHER WAY
};
arrayPairs(object1);

//======================
//freeze the objects connot delete or change properties
Object.freeze(object1);
delete object1.jamol; // could'nt delete because of the Object.freeze(obj)
console.log(object1);

//Object.fromEntries(iterable)
const entries = new Map([
        ['foo', 'bar'],
        ['baz', 42]
    ]);
    
console.log(Object.fromEntries(entries));

//getOwnPropertyDescriptor() syntax is (obj,property) -> configurable
const object1 = {
    property1: 42
  };
  
  const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
  
  console.log(descriptor1.configurable);
  // expected output: true
  
  console.log(descriptor1.value);
  // expected output: 42
  
//getOwnPropertyDescriptor() syntax is (obj) ->writable
const object1 = {
    property1: 42
  };
  
  const descriptors1 = Object.getOwnPropertyDescriptors(object1);
  
  console.log(descriptors1.property1.writable);
  // expected output: true
  
  console.log(descriptors1.property1.value);
  // expected output: 42
  
  //hasOwnProperty(property) prototype undetectable
  const properr = {};
  
const object1 = {
    allon : 'Dev1', 
    jamol: 'Dev2',
    };
const arrayszxc = [];
const arrayPairs = (object) => { 
    
    for(key in object1)
    {
        arrayszxc.push(key,object1[key]);
    }
    return arrayszxc;
    // const a = Object.keys(object);
    // const b = a.map(w => {
    //     return [w, object[w]];
    // })
    // console.log(b,'test');
    //OR 
    //console.log(Object.entries(object)); // OTHER WAY
};
console.log(arrayPairs(object1));
