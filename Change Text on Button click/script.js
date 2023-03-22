function myfunction() {
    const x = document.getElementById("changeText");
    // console.log(x.innerHTML)
    if (x.innerHTML === "The most affordable learning platform") {
      x.innerHTML = "PW Skills";
    } else {
      x.innerHTML = "The most affordable learning platform";
    }
  }