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

    if(emailRx.test(document.getElementById("email").value) == false && document.getElementById("email").value !== ""){
        document.getElementById("errEmail").innerHTML = "Invalid email address";
        return false;
    } else {
        document.getElementById("errEmail").innerHTML = "";
    } 
    
    if ((document.getElementById("p1").value !== document.getElementById("p2").value) && document.getElementById("p2").value !== ""){
        document.getElementById("errPassword").innerHTML = "Please match your password.";
        return false;
    } else {
        document.getElementById("errPassword").innerHTML = "";
    }
}

function resultValidate() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var uname = document.getElementById("uname").value;
    var bdate = document.getElementById("bdate").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    alert("Registered Successfully. \n\nFirst Name: " + fname + "\nLast Name: " + lname + "\nUsername: " + uname
        + "\nBirthdate: " + bdate + "\nAddress: " + address + "\nEmail: " + email);
}