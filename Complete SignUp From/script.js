console.log("hello")

const userName = document.getElementById("name");
const email = document.getElementById("email")
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function validateForm(){
    // usename validation
    if(userName.value == ""){
        document.getElementById('nameError').innerHTML  = "*Username is empty*";
        return false
    }
    else if(userName.value.length < 5){
        document.getElementById('nameError').innerHTML = "*Username is require minimum 5 charecter*";
        console.log(userName.value)
        return false
    }
    else{
        document.getElementById('nameError').innerHTML = "";
        // return 
    }

    // mobile number validation

    if(mobile.value == ""){
        document.getElementById('mobileError').innerHTML = "*Mobile Number is empty*"
        return false;
    }
    else if(mobile.value.length < 10){
        document.getElementById('mobileError').innerHTML = "*Mobile must be at least 10 charcter*"
        return false;
    }
    else{
        document.getElementById('mobileError').innerHTML = ""
        // return 
    }

    // email validation
    if(email.value == ""){
        document.getElementById('emailError').innerHTML = "Email is empty"
        return false;
    }
    else if(email.value.length < 11){
        document.getElementById('emailError').innerHTML = "Email must be at least 10 charcter"
        return false;
    }
    else{
        document.getElementById('emailError').innerHTML = ""
    }

    // password validation
    if(password.value == ""){
        document.getElementById('passwordError').innerHTML = "*Password is empty*";
        return false
    }
    else if(password.value.length < 6){
        document.getElementById('passwordError').innerHTML = "*Password must be at least 6 charecter*";
        return false
    }
    else if(confirmPassword.value == ""){
        document.getElementById('confirmPasswordError').innerHTML = "*Confirm Password is require*";
        return false
    }
    else if(password.value != confirmPassword.value){
        document.getElementById('confirmPasswordError').innerHTML = "*Password does not match*"
        return false
    }
}
// show or hide password
        check.onclick = togglePassworld;
        function togglePassworld(){
            if(check.checked) password.type = "text";
            else password.type = "password"
        }

        confirmCheck.onclick = confirmTogglePassworld;
        function confirmTogglePassworld(){
            if(confirmCheck.checked) confirmPassword.type = "text";
            else confirmPassword.type = "password"
        }

        