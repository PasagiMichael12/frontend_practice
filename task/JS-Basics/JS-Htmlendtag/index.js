function getHtmlEndTag()
{
<<<<<<< HEAD
    let input = document.getElementById('input').value.match(/[a-zA-Z]/g);//removing escapes <>
    const valid = !(document.createElement(input) instanceof HTMLUnknownElement); 
    return valid == true ?  document.getElementById('result').innerText = `The </${input}> is a HTML tag` : document.getElementById('result').innerHTML = "Invalid HTML tag";
=======
    let input = document.getElementById('input').value.match(/[a-zA-Z]/g);//removing escape strings
    const valid = !(document.createElement(input) instanceof HTMLUnknownElement); 
    return valid == true ?  document.getElementById('result').innerText = "The \</"+input+"\> is a HTML tag" : document.getElementById('result').innerHTML = "Invalid HTML tag";
>>>>>>> c197d0b8796645dc2a37aa5a2b60aa43c4f82f06
}   
    //creating element base on the input/ if the created element is present in HTML tags
    // for example: input = a -> true but with htmlunknownelement and makes the input tags invalid to make it false, if we added "!" the value will be true
    //shortcase: <asd> is not a html tag valid = true , <a> = is a html tag = false; but with "!" vice versa
<<<<<<< HEAD
=======

>>>>>>> c197d0b8796645dc2a37aa5a2b60aa43c4f82f06
