// Get all the windows
var windows = document.querySelectorAll(".window");

// Get the list of closed windows
var closedWindows = document.getElementById("closed-windows");

// Get the height of the navbar
var navbarHeight = document.querySelector(".navbar").offsetHeight;

// Loop through each window
windows.forEach(function(window) {
  // Set the starting position of the window
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var header = window.querySelector(".window-header");

  // Move the window when the header is clicked and dragged
  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // Get the mouse cursor position at startup
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // Call a function whenever the cursor moves
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // Calculate the new cursor position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Set the element's new position
    window.style.top = Math.max(window.offsetTop - pos2, navbarHeight) + "px";
    window.style.left = Math.max(window.offsetLeft - pos1, 0) + "px";
  }

  function closeDragElement() {
    // Stop moving when mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;
  }

  // Add the window to the closed windows list when closed
  var closeButton = window.querySelector(".close-button");
  closeButton.addEventListener("click", function() {
    window.style.display = "none";
    var windowTitle = window.querySelector("h2").textContent;
    var listItem = document.createElement("li");
    // add navbar-item class to li
    listItem.classList.add("navbar-item");
    listItem.textContent = windowTitle;
    closedWindows.appendChild(listItem);
  });
});

// Restore a closed window when its list item is clicked
closedWindows.addEventListener("click", function(e) {
  if (e.target && e.target.nodeName == "LI") {
    var windowTitle = e.target.textContent;
    windows.forEach(function(window) {
      if (window.querySelector("h2").textContent == windowTitle) {
        window.style.display = "block";
      }
    });
    e.target.remove();
  }
});
