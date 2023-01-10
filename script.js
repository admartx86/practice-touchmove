function mouseCoordinates(e) {
    document.getElementById("mousePosition").innerHTML = "X" + e.clientX + "Y" + e.clientY
}

document.addEventListener("mousemove", mouseCoordinates)

document.addEventListener("touchstart", mouseCoordinates)
document.addEventListener("touchmove", mouseCoordinates)
