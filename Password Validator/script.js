function verifyPassword() {
  const pw = document.getElementById("password" ).value;
  const cpw = document.getElementById("cnfPassword").value;
  const massage = document.getElementById('massage')


  //check empty password field
  if (pw == "") {
    console.log("**Fill the password please!");
    return false;
  }
  // check wrong password
  else if (pw != cpw) {
    console.log("Password didn't match, Password validation unsuccessfull");
    massage.innerHTML = "Password didn't match, Password validation unsuccessfull"
    massage.style.color = "red"
  }
  // check right password
  else if (pw == cpw) {
    // document.getElementById("message").innerHTML = "password matched"
    console.log("Password matched , Password validation successful");
    massage.innerHTML = "Password matched , Password validation successful"
    massage.style.color = "green"
    return true;
  }
}

function toggle(){
  document.getElementById('massage').style.display = "none"
}