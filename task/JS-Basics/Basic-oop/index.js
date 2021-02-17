// const Book = function(t, a) {
//     let title = t; 
//     let author = a; 
//     return {
//        summary : function() { 
//          console.log(`${title} written by ${author}.`);
//        } 
//     }
//  }
//  const book1 = new Book('Hippie', 'Paulo Coelho');
//  book1.summary();

const Book = function(getTitle, getAuthor) { 
    // Private variables / properties  
    let title = getTitle; 
    let author = getAuthor;
 // Public method 
    this.giveTitle = function() {
       return title;
    }
    
    // Private method
    const summary = function() {
       return `${title} written by ${author}.`
    }
 // Public method that has access to private method.
    this.giveSummary = function() {
       return summary()
    } 
 }
 const book1 = new Book('Hippie', 'Paulo Coelho');
 console.log(book1.giveTitle());

 console.log(book1.giveSummary());























// const values = { 


//     a: 100, 
//     b: 200,
//     addValues: function () { return this.a + this.b}
// };
// console.log(values.addValues());

// const programmer = {
//     mentor: 'mic',
//     student2: 'Allon',
//     student1: 'Jamol',
//     greetings: function () {
//         return `Hello sir ${this.mentor} with ${this.student1} and ${this.student2}`;
//     }
// }
// console.log(programmer.greetings());



// //constructor
// function AddPerson(first,last,age,gender,interest) {
//     this.name = {
//         first : first,
//         last : last,
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;
//     this.bio = () => {
//         alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old, He Likes' + this.interest[0] + this.interest[1] )
//     };
//     this.greetings = () => {
//         alert('Hi I\'m ' + this.first)
//     }
// }


// let person1 = new AddPerson('Allon','Magtalas',22,"Male",['Guitar','Singing']);

// let obj = { value: 11};

// const increase = (obj) => {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// function Circle(radius)
// {
//     this.radius = radius;
//     this.defaultLocation = {x: 0 , y: 0};
//     this.computeOptimumLocation = function (){
//         // ...
//     }
//     this.draw = function ()
//     {
//         this.computeOptimumLocation();
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);