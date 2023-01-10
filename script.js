document.querySelector("body").addEventListener("touchstart", f)
document.querySelector("body").addEventListener("touchmove", f)
document.querySelector("body").addEventListener("touchend", f)

function f(e) {
document.getElementById("debugDisplay").innerHTML = e.touches + e.type
console.log(e.touches, e.type)
}
