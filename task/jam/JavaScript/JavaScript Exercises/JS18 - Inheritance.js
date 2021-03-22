//1.)Write an array of object Games with title 
//and status property then display if the status is already played or not; (i.e. dota 2 is already played); 

const games = [
    {
        title : "dota 1",
        status : "played"
    },
    {
        title : "lol",
        status : "not started"
    },
    {
        title : "GTA",
        status : "not started"
    },
    {
        title : "Race",
        status : "played"
    }
];

const check = (a) => {
    a.forEach(element => {
        if(element.status == "played"){
            console.log(`${game.title} is already played.`);
        }else{
            console.log(`${game.title} is not yet played.`);
        }
    });
}


// 1.) Create an object called shape that has a type property and a getType method. // ex const shape = {};
const shape = {
    type: '',
    getType : function(){
        return this.type;
    }
};

// 2.) Define a Triangle constructor function whose prototype is shape. 
//Objects created with Triangle should have three own properties: a, b and c representing the sides of a triangle.
function Triangle(a, b, c) {
    this.a = a,
    this.b = b,
    this.c = c,
    this.type = 'triangle'
};


Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;

// 3.) Add a new method to the prototype called getPerimeter.
Triangle.prototype.getPerimeter = function() {
return this.a + this.b + this.c;
};


var triangle1 = new Triangle(3, 4, 4);
console.log(triangle1.getPerimeter());
console.log(triangle1.getType());
