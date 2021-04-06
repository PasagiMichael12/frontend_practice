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
    

    alert("First Name: " + fname + "\nLast Name: " + lname + "\nUsername: " + uname 
    + "\nBirthdate: " + bdate + "\nPhone Number: " + phone + "\nAddress: " + address + "\nEmail: " + email
    + "\n\nTo confirm, click 'ok'");


}  