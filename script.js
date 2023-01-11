document.getElementById("touchArea").addEventListener("mousemove", f, {passive:false})
document.getElementById("touchArea").addEventListener("touchmove", f, {passive:false})
function f(e) {
    e.preventDefault()
    document.getElementById("debugDisplay").innerHTML = "X:" + e.pageX + "Y:" + e.pageY
    console.log("X:" + e.pageX + "Y:" + e.pageY)
    document.getElementById("debugDisplay2").innerHTML = e.touches[0] + e.type
    console.log(e.touches, e.type)
} 