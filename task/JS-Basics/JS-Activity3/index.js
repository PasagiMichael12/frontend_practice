//1.)Write an array of object Games with title and status property then display if the status is already played or not; (i.e. dota 2 is already played); 
//#1
const Games = [
    {
        title: 'Dota2',
        status: true
    },
    {
        title: 'Valorant',
        status: true
    },
    {
        title: 'CSGO',
        status: true
    },
    {
        title: 'GenshinImpact',
        status: false
    }
];
const getGames = (game, arrOfObj) => {
    const gameStatus = arrOfObj.filter(obj => obj.title === game && obj.status === true);
    if (gameStatus.length) {
        console.log(`${gameStatus[0].title} is already played`);
    } else {
        console.log(`${game} is not yet played`);
    }
};
getGames('CSGO', Games);
/* 
    Evaluation  = What method to be used. but then i used filter method
*/


/* 2.) Write a function to get the volume of a Cylinder with 2 decimal places using object.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.

 ex. var cyl1 = new Cylinder(7,4) // volume = 87.96; */
//#2
function Cylinder(height,diameter) {
    this.diameter = diameter;
    this.height = height;
}
Cylinder.prototype = Cylinder;
Cylinder.getVolumeOfCylinder = function()
{ 
    let radius = this.diameter/2;
    return console.log('Volume = '+ (Math.PI*radius**2*this.height).toFixed(2));
}
let cyl1 = new Cylinder(7,4);
cyl1.getVolumeOfCylinder();

// Evaluation = I'm confused in making Cylinder constructor to prototype itself.