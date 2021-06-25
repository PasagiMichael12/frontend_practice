// How to sort and array

// Strings
let names = ["Jack", "Loce", "Alice"];
console.log(names.sort());
// [ 'Alice', 'Jack', 'Loce' ]

// How to select a random element
let items = ["Apple", "Banana", "Mango"];
let index = Math.floor(Math.random() * items.length);
console.log(items[index]);

// How to reverse a string
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse("CodingMaster"));

// How to check if element has a class
const element = document.querySelector("el");
element.classList.contains("active");
// returns true or false