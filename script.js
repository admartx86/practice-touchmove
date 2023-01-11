//document.querySelector("body").addEventListener("mousedown", f)
document.body.addEventListener("mousemove", f, {passive:false})
//document.querySelector("body").addEventListener("mouseup", f)
document.body.addEventListener("touchmove", f, {passive:false})
//xPosition = clientX
//yPosition = clientY
function f(e) {
e.preventDefault()
document.getElementById("debugDisplay").innerHTML = "X:" + e.clientX + "Y:" + e.clientY
console.log("X:" + e.clientX + "Y:" + e.clientY)
//document.getElementById("debugDisplay").innerHTML = e.touches + e.type
//console.log(e.touches, e.type)
}