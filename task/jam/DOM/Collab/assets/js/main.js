




$(document).ready( () => { 
    $.ajax( () => {
        url: '../json/object.json',
        type: 'get',
        dataType: 'json',
        succes : ( data ) => {
            console.log(data);
        } ,
        error: (error) => {
            console.log('Error Exception Thrown ' + error);
        },
    })
}