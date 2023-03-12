//grab the div called clock and update the text inside it with the current time
function updateClock() {
    var clock = document.getElementById('time');
    var amOrPm = document.getElementById('amPm');
    var time = new Date().toLocaleTimeString();
    var amPm = time.slice(-2);
    amOrPm.innerText = amPm;
    clock.innerText = time.slice(0, -3);

    }
//on load, call updateClock every 1000ms (1 second)
window.onload = function() {
    setInterval(updateClock, 1000);
    
    }

// createa a fucntion that allows me to drag divs around the screen
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        // update the p tag  inside this element with the new position
        //elmnt.children[1].innerText = "top: " + (elmnt.offsetTop - pos2) + "px; left: " + (elmnt.offsetLeft - pos1) + "px;";

    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function moveToPosition(elmId , top, left) {
    document.getElementById(elmId).style.top = top+"px";
    document.getElementById(elmId).style.left = left+"px";

}

// make the div element draggable
dragElement(document.getElementById("kristo"));
dragElement(document.getElementById("Stats"));
// move the divs into the correct position
moveToPosition("kristo", 64, 1258);
moveToPosition("Stats", 167, 113);