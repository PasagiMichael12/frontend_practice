/*
1.) Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)

2.) Add a link back to the source of the text after the paragraph tag.(https://allon.com/)

3.) Split each new sentence on to a separate line in the paragraph text.
    A sentence can be assumed to be a string of text terminated with a period (.)

4.) Count the number of words in the paragraph tag and display the count afer the heading.
You can assume that all words are separated by one singular whitespace.

5.) Replace all question marks (?) with asterisk (*) and exclamation marks (!) with ampersand (&) 

*/
//#1
const paragraph = document.querySelector('#paragraph'); // getting id of p
const splitPara = paragraph.innerText.split(' ').map(word => word.length >= 8 ? `<label style="background-color: yellow" >${word} </label>` : word).join(' '); 
// getting the value => splitting and storing as array => map array with condition
paragraph.innerHTML = splitPara.toString(); // change the innerHTML

//#2
const addLink = document.createElement('a'); //create elemeent a
addLink.textContent = "Link to Source"; // declare the value inside the tag
addLink.href = "https://allon.com/"; //declared href link

paragraph.parentNode.appendChild(addLink, paragraph); // putting the addlink inside the body of html

//#3
paragraph.innerHTML = paragraph.innerHTML.split(/\.[^./]/).join('.</p><p>'); //regex?? // split with one dot at a time => join to have p tags every sentence

//#4
const numOfWords = paragraph.innerText.split(' ').length; // get the value and split every word into array
const tags = document.createElement('p'); // create p element
tags.innerText = numOfWords+'words'; // set te tags variable into innertext with corresponding value
const body = document.body; //call the body of html

body.insertBefore(tags, paragraph); // insert before paragraph inside body

//#5
const marks = document.querySelectorAll('p') // get all p tags that is set
    .forEach(p => { // iterate every element
        p.innerHTML = p.innerHTML.replace(/\?/g,'*').replace(/\!/g,'&'); // for global changes // regex is = matches with ? or ! // replace with * or &
});
