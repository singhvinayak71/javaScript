const validatePassword = () =>{
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value
    const passMassage = document.getElementById('passMassage');

    // emailvalidate
    const emailValidate = userEmail.includes("@")

    // password length validate
    const passwordLength = userPassword.length
    console.log(passwordLength)
    if(emailValidate == true && passwordLength >= 8){
        passMassage.innerHTML = "Valid email and password!"
        passMassage.style.color = "green"
    }
    else{
        passMassage.innerHTML = "Invalid email or password!"
        passMassage.style.color = "red"
    }
}