$(document).ready(() => {
   $.ajax({
      dataType: 'json',
      url: 'JSON/index.json',
      success: (data) => {
         $('.customer1').on('click', () => {
            getDetails(data.customer1)
         })
         $('.customer2').on('click', () => {
            getDetails(data.customer2)
         })
         $('.customer3').on('click', () => {
            getDetails(data.customer3)
         })
         function getDetails(values) {
            $('.frontImg').attr('src', `${values.image}`)
            $('.project').text(values.project)
            $('.installed').text(values.installed)
            $('.phrase').text(values.description)
            $('.system').text(values.system)
            $('.month').text(values.Monthly)
            $('.ems').text(values.ems)
            $('.total').text(values.total)
         }
      },
      error: () => {
         console.log('Connection Error')
      },
   })
})
