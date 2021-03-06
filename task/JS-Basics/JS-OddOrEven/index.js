$(document).ready(function () {
   $('#getResult').click(() => {
      let userInput = $('#input').val()
      let message = $('#notInteger')
      isNaN($('#input').val()) == true
         ? message.text('Error! Input is not an Integer')
         : ' '
      const splittedValues = userInput.split('')
      const isEven = splittedValues[0] % 2 == 0
      $('#result').val(
         splittedValues.filter((value) => {
            return isEven ? value % 2 == 0 : value % 2 == 1
         })
      )
   })
})

// function getResult() {
//    //getting the value on html
//    let input = document.getElementById('input').value
//    //check if integer2
//    let message = document.getElementById('notInteger')
//    isNaN(input) == true
//       ? (message.innerHTML = 'Error! Input is not an Integer')
//       : ' '

//    const splittedValues = input.split('') // ['2','3'..]
//    const isEven = splittedValues[0] % 2 == 0 // checking if even

//    document.getElementById('result').value = splittedValues.filter((value) => {
//       // return false values
//       return isEven ? value % 2 == 0 : value % 2 == 1 // if isEven is true -> execute value % 2 == 0 else
//    })
// }
