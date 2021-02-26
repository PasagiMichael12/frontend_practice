//#8 Create a regex that validates a valid html tag then a function that returns the end tag

var regex = /<(“[^”]*”|'[^’]*’|[^'”>])*>/;

const htmlEndTag = (a) => {
    if(regex.test(a)){
        let endTag = a.split("");
        endTag.splice(1, 0, '/');
        let x = endTag.join('')
        return x;
    }else{
        return 'Not a valid HTML Tag';
    }
}
console.log(htmlEndTag("h1>"))