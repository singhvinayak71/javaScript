console.log("javascript enable")
const username = document.getElementById('name');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const password = document.getElementById('password');

function validateForm(){
    // username validation
    if(username.value == ""){
        document.getElementById("userError").innerHTML = "Username is empty";
        return false
    }else if(username.value.length < 3){
       document.getElementById("userError").innerHTML = "Username must be at least 3 char" 
        return false
    }else {
        document.getElementById("userError").innerHTML = ""
        return true
    }

    // password validation
    if(password.value == ""){
        document.getElementById("passwordError").innerHTML = "Password is empty"
        return false
    }else if(password.value.length < 6){
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 char"
        return false
    }
    else{
        document.getElementById("passwordError").innerHTML = ""
    }

}