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

games.forEach(game => {
    if(game.status == "played"){
        console.log(`${game.title} is already played.`);
    }else{
        console.log(`${game.title} is not yet played.`);
    }
});



// 1.) Create an object called shape that has a type property and a getType method. // ex const shape = {};
// 2.) Define a Triangle constructor function whose prototype is shape. 
//Objects created with Triangle should have three own properties: a, b and c representing the sides of a triangle.
// 3.) Add a new method to the prototype called getPerimeter.

const shape = {
    
}

const Triangle = function(a, b, c){

}
