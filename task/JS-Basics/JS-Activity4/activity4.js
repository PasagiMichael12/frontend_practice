// 1.) Prompt an alert with the ID of the h1.
//  let welcome = document.getElementById('welcome').value = "Welcome to Mini-Library";
//  window.alert(welcome);

// 2.) 
// <span>
// Shooting <img id="fallenstar" src="star_on.gif">
// </span> 
// Write some JavaScript code below which deletes the star.

//1st way using parentNode.removeChild.
// const imgStar = document.getElementById('fallenstar');
// imgStar.parentNode.removeChild(imgStar);

// //2nd way using .remove
// const removeStar = () => { document.getElementById('fallenstar').remove(); }
// removeStar();

// 3.) <span>
// <span id="source">
//  Here's a star:
//  <img src="star_on.gif">
//  </span>
//  <span id="target">
//   Move it here:
//   </span>
// </span>
// Write some JavaScript code below which moves the star from 'source' to the end of 'target', without changing the text.
// const source = document.getElementById('source'); //getting the parent node
// const sourceValue = source.children[0]; // getting the value inside the parent node wherein its children
// const moveStar = () => { //function create for checking purposes
//     const target = document.getElementById('target'); // getting the parent node target
//     target.appendChild(sourceValue); // putting inside the target
// }
// moveStar();


// 4.) <span id="math">
// ┗ 6 * 7 =
// </span>
// Write some JavaScript code below which completes the equation.
// const mathSequence = document.getElementById('mathContainer');
// let doMath = mathSequence.firstElementChild.innerText.split('').filter(value => {
//    return value == ' ' ? false : true;
// });
// let result = doMath[0] * doMath[2];
// document.getElementById('math').innerHTML = `<p>${doMath[0]} * ${doMath[2]} = ${result} </p>`;

// 5.) This is the DOM tree for the above span:
// <span id="sky">
// </span>
// Write some JavaScript code below which creates an image, sets its 'src' property to a star, and inserts it into the empty span.

//Create Element
// let newImage = document.createElement('img');
// //Add src attribute
// newImage.setAttribute('src','img/sdd.png');
// let span = document.getElementById('sky');
// span.appendChild(newImage);
// console.log(span);


// 6.) Create a webpage with an h1 of "Book archives".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy this array of books:
//   var books = [
//       {title: 'The Design of EveryDay Things',
//        author: 'Don Norman',
//        alreadyRead: false
//       },
//       {title: 'The Most Human Human',
//        author: 'Brian Christian',
//        alreadyRead: true
//       },
//         {title: 'Her',
//        author: 'ad lorem',
//        alreadyRead: true
//       },
//         },
//         {title: 'asira',
//        author: 'uknown',
//        alreadyRead: false
//       }
//       ];
  
// a. Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// b. Use a ul and li to display the books.
// c. Add an img to each book that links to a URL of the book cover.
// d. Change the style of the book depending on whether you have read it or not.