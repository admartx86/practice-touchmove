//document.getElementById("mousePosition")

function mouseCoordinates() {
    document.getElementById("mousePosition").innerHTML = "X" + e.clientX + "Y" + e.clientY
}

document.addEventListener("mousemove", mouseCoordinates)

document.addEventListener("touchmove", function(event) {
    mouseCoordinates(event);
  });
  