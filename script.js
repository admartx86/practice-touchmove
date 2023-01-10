//document.getElementById("mousePosition")

function mouseCoordinates(e) {
e.preventDefault()
    document.getElementById("mousePosition").innerHTML = "X" + e.clientX + "Y" + e.clientY

}

document.addEventListener("mousemove", mouseCoordinates)
document.addEventListener("touchmove", mouseCoordinates)

  