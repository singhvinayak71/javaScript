const container = document.getElementById('js-container');
const hightlight = document.getElementById('js-highlight');
let containerHeight;
 
window.onscroll = function(){
    containerHeight = container.offsetHeight - window.innerHeight;
    containerPosition = container.getBoundingClientRect();
    diffrent = containerHeight + containerPosition.top;
    progressPercenteage = diffrent / containerHeight * 100;
    cssWidth = Math.floor(100 - progressPercenteage)
    hightlight.style.width = cssWidth + "%"
}
