function validate(){  
    var fname = document.registrationForm.fname.value; 
    var lname = document.registrationForm.lname.value; 
    var uname = document.registrationForm.uname.value; 
    var bdate = document.registrationForm.bdate.value; 
    var phone = document.registrationForm.phone.value; 
    var address = document.registrationForm.address.value;  
    var email = document.registrationForm.email.value; 
    var p1 = document.registrationForm.p1.value; 
    var p2 = document.registrationForm.p2.value; 
    
    var fields = document.forms["registrationForm"].elements;
    var submit = true;

    for (var x = 0; x < fields.length; i++) {
        if (fields[i].value.length == 0){
            submit = false;
        }
    }

    document.getElementById('register').setAttribute("disabled", "disabled") = !submit;

    alert("Registered Successfully. \n\nFirst Name: " + fname + "\nLast Name: " + lname + "\nUsername: " + uname 
    + "\nBirthdate: " + bdate + "\nPhone Number: " + phone + "\nAddress: " + address + "\nEmail: " + email);


}  