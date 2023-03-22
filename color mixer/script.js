const showResult = document.getElementById("results");
const color1 = prompt("Enter color 1");
const color2 = prompt("Enter color 2")
// const color1 = "red";
// const color2 = "blue";

if(color1 == "red" && color2 == "blue"){
    showResult.innerHTML = color1 + " + " + color2 + " = Purple";
    showResult.style.color = "purple"
    console.log("Purple")
}
else if(color1 == "red" && color2 == "yellow"){
    showResult.innerHTML = color1 + " + " + color2 + " = orange";
    showResult.style.color = "orange"
    console.log("orange")
}
else if(color1 == "blue" && color2 == "yellow"){
    showResult.innerHTML = color1 + " + " + color2 + " = green";
    showResult.style.color = "green"
    console.log("green")
}
else{
    showResult.innerHTML = "Invalid color combination..!!🤥🤥."
}