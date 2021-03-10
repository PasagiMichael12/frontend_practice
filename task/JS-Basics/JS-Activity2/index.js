const shape = {
    type: '',
    sides: '',
    getType: function() {
        return `The Shape is ${this.type}`;
    },
    getSides: function() {
        return `It has ${this.sides} sides`;
    }
}
//setting up the type of a shape

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'triangle';
    this.sides = 3;
}
// having a 3 parameters as side of shape as triangle
// the type triangle is inside the constructor Triangle
Triangle.prototype = shape;

//after declaring the prototype via shape
shape.getPerimiterOfTriangle = function(){
    return this.a + this.b + this.c;
}

//shape object inherited the data inside the triangle which is a b c type
let tria = new Triangle(1,2,3);

//creating new object call tria
let tra = tria.getType();

let numOfSides = tria.getSides();
//tria inherited the data inside shape so it can acces the getType method.
console.log(tria.getPerimiterOfTriangle());;
console.log(tra);
console.log(numOfSides);

function Square(valOfSides){
    this.a = valOfSides;
    this.type = 'Square';
    this.sides = 4;
}

Square.prototype = shape;
shape.getAreaOfSquare = function () {
    return this.a**2;
}
shape.getPerimeterOfSquare = function () {
    return this.a * 4
}
let squaree = new Square(5);
console.log(squaree.getAreaOfSquare());
console.log(squaree.getType());
console.log(squaree.getPerimeterOfSquare());







