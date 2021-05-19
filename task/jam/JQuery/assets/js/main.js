$(document).ready(function () {

    $( "#num").focus();

    $('input').keypress(function(e) {
        if(e.which == 13) { 
            $('#move').trigger('click');
        }
    });

    $("#move").click(function () {
        $("#check").prop('disabled', false);
        var num = $("#num").val();
        $("#numArr").append(num + ' ');
        $("#num").val('');
    });

    $('body').on('click', '#check', function () {
        var numArr = $('#numArr').val().split(' ');
        console.log(numArr)
        
        let x = numArr[0] % 2 == 0;
        var result = numArr.filter(newList => x ? newList % 2 == 0 : newList % 2 != 0);
        
        alert(result);
        location.reload();
    });
});