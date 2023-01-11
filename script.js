//document.querySelector("body").addEventListener("mousedown", f)
//
document.getElementById("touchArea").addEventListener("mousemove", f, {passive:false})
//document.querySelector("body").addEventListener("mouseup", f)
document.getElementById("touchArea").addEventListener("touchmove", f, {passive:false})
//xPosition = clientX
//yPosition = clientY
function f(e) {
e.preventDefault()
document.getElementById("debugDisplay").innerHTML = "X:" + e.pageX + "Y:" + e.pageY
console.log("X:" + e.pageX + "Y:" + e.pageY)
//document.getElementById("debugDisplay").innerHTML = e.touches + e.type
//console.log(e.touches, e.type)
}