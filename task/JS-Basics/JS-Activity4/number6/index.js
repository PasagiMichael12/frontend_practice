// 6.) Create a webpage with an h1 of "Book archives".
// // Add a script tag to the bottom of the page, where all your JS will go.
// // Copy this array of books:
// //   var books = [
// //       {title: 'The Design of EveryDay Things',
// //        author: 'Don Norman',
// //        alreadyRead: false
// //       },
// //       {title: 'The Most Human Human',
// //        author: 'Brian Christian',
// //        alreadyRead: true
// //       },
// //         {title: 'Her',
// //        author: 'ad lorem',
// //        alreadyRead: true
// //       },
// //         },
// //         {title: 'asira',
// //        author: 'uknown',
// //        alreadyRead: false
// //       }
// //       ];
  
// // a. Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// // b. Use a ul and li to display the books.
// // c. Add an img to each book that links to a URL of the book cover.
// // d. Change the style of the book depending on whether you have read it or not.+

const addBorder = (e) => {
    e.classList.add('visited');
}
const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: true
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    },
    {
        title: 'Her',
        author: 'ad lorem',
        alreadyRead: true
    },
    {
        title: 'Asira',
        author: 'Michael Pasagi',
        alreadyRead: false
    }
];
const ul = document.getElementById('items');
const booksHTML = books.map(book => {
    const { alreadyRead, title, author } = book;
        return `<li><a href="#"><img onclick="addBorder(this)" src="${alreadyRead ? '../img/green.png' : '../img/red.png'}"width="100" "></img></a><li>${title}</li><li>${author}</li>`;
});
ul.innerHTML = booksHTML.toString();
