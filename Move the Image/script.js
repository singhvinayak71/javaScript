function leftArrowPressed() {
    var element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) - 10 + 'px';
}

function rightArrowPressed() {
    var element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) + 10 + 'px';
}

function upArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) - 10 + 'px';
}

function downArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) + 10 + 'px';
}

function moveSelection(event) {                    
    switch (event.keyCode) {
        case 37:
            leftArrowPressed();
        break;

        case 39:
            rightArrowPressed();
        break;

        case 38:
            upArrowPressed();
        break;

        case 40:
            downArrowPressed();
        break;
    }
};

function gameLoop()
{
// change position based on speed
moveSelection();
setTimeout("gameLoop()",10);
}