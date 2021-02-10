function getHtmlEndTag()
{
    let input = document.getElementById('input').value.match(/[a-zA-Z]/g);//removing escapes <>
    const valid = !(document.createElement(input) instanceof HTMLUnknownElement); 
    return valid == true ?  document.getElementById('result').innerText = `The </${input}> is a HTML tag` : document.getElementById('result').innerHTML = "Invalid HTML tag";
}   
    //creating element base on the input/ if the created element is present in HTML tags
    // for example: input = a -> true but with htmlunknownelement and makes the input tags invalid to make it false, if we added "!" the value will be true
    //shortcase: <asd> is not a html tag valid = true , <a> = is a html tag = false; but with "!" vice versa
