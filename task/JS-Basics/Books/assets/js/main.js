$(document).ready(() => {
   $.ajax({
      url: ' ../../objects/objects.json ',
      dataType: 'json',
      success: (data) => {
         $(data).each((index, value) => {
            $('#items').append(
               value.alreadyRead === true
                  ? `<div><img style="background:#98bf21;height:50px;width:50px;position:relative;" src="${value.img}" class="bookImg shadow-lg mb-1"></div>
                  <a href="#" class="btn btn-warning">Read Again</a>
                  <li class="textDeco"><h5>${value.title}</h5></li>
                  <li class="textDeco">${value.author}</li><br>`
                  : //    `<a href="#" class="btn btn-success col-2">Read Again</a>
                    // <li class="list-group-item" >Book Title: ${value.title}</li><li class="list-group-item" >Book Author: ${value.author}</li><br>`
                    `<div><img style="background:#98bf21;height:50px;width:50px;position:relative;" src="${value.img}" class="bookImg shadow-lg mb-1"></div>
                    <a href="#" class="btn btn-dark">Read Book</a>
                    <li class="textDeco"><h5>${value.title}</h5></li>
                  <li class="textDeco">${value.author}</li><br>`

               //    `<a href="#" class="btn btn-primary col-2">Read Book</a>
               // <li class="list-group-item" >Book Title: ${value.title}</li><li class="list-group-item" >Book Author: ${value.author}</li><br>`
            )
         })
         $('.bookImg').animate(
            {
               height: '+=250px',
               width: '+=250px',
            },
            'slow'
         )
      },
      error: (error) => {
         console.log('Error Connection Lost ' + error)
      },
   })
})
