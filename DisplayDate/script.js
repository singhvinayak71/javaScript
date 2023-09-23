console.log("javaScript is running");

const dDate = document.getElementById('dDate')
const dTime = document.getElementById('dtime')

const cDate = new Date().toLocaleDateString();
const cTime = new Date().toLocaleTimeString();
console.log(cDate)
dDate.innerHTML= cDate;
dTime.innerHTML= cTime;


