setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime+mtime/2;
    mrotation =6*mtime;
    srotation =6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}, 1000);
let date;
let time;
const option ={weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'};
setInterval(() => {
  date = d.toLocaleDateString(undefined, option);
  time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  document.getElementById('time1').innerHTML = time + " on " +  date ; 
}, 1000);