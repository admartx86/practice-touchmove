//document.querySelector("body").addEventListener("mousedown", f)
document.querySelector("body").addEventListener("mouseover", f)
//document.querySelector("body").addEventListener("mouseup", f)
document.querySelector("body").addEventListener("touchmove", f)
//xPosition = clientX
//yPosition = clientY
function f(e) {
e.preventDefault()
document.getElementById("debugDisplay").innerHTML = "X:" + e.clientX + "Y:" + e.clientY
console.log("X:" + e.clientX + "Y:" + e.clientY)
//document.getElementById("debugDisplay").innerHTML = e.touches + e.type
//console.log(e.touches, e.type)
}
