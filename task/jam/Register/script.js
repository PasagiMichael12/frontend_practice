function dataValidate() {
    var fname = document.registrationForm.fname.value;
    var lname = document.registrationForm.lname.value;
    var uname = document.registrationForm.uname.value;
    var bdate = document.registrationForm.bdate.value;
    var phone = document.registrationForm.phone.value;
    var address = document.registrationForm.address.value;
    var email = document.registrationForm.email.value;
    var p1 = document.registrationForm.p1.value;
    var p2 = document.registrationForm.p2.value;

    alert("Registered Successfully. \n\nFirst Name: " + fname + "\nLast Name: " + lname + "\nUsername: " + uname
        + "\nBirthdate: " + bdate + "\nPhone Number: " + phone + "\nAddress: " + address + "\nEmail: " + email);
}
var emailRx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function validate(){
    if((document.getElementById("fname").value !== "" && document.getElementById("lname").value !== "") 
    && (document.getElementById("uname").value !== "" && document.getElementById("bdate").value !== "")
    && (document.getElementById("address").value !== "")
    && (emailRx.test(document.getElementById("email").value) && document.getElementById("p1").value !== "")
    && (document.getElementById("p2").value !== "") 
    && document.getElementById("p1").value == document.getElementById("p2").value)
    {
        document.getElementById("register").removeAttribute("disabled");
    }
}