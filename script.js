function mouseCoordinates(e) {
    //e.preventDefault()
    document.getElementById("mousePosition").innerHTML = "X" + e.clientX + "Y" + e.clientY
}

document.ontouchstart = mouseCoordinates(e)

//document.addEventListener("mousemove", mouseCoordinates)
//document.addEventListener("touchend", mouseCoordinates)
//document.addEventListener("touchstart", mouseCoordinates)
//document.addEventListener("touchmove", mouseCoordinates)
