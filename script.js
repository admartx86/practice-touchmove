document.getElementById("touchArea").addEventListener("mousemove", handleMouseMove);
document.getElementById("touchArea").addEventListener("touchmove", handleTouchMove);

function handleMouseMove(e) {
    document.getElementById("debugDisplay").innerHTML = "X:" + e.clientX + " Y:" + e.clientY;
    console.log("X:" + e.clientX + " Y:" + e.clientY);
    document.getElementById("debugDisplay2").innerHTML = " e.type: " + e.type;
    console.log(e.type);
}

function handleTouchMove(e) {
    e.preventDefault();
    document.getElementById("debugDisplay").innerHTML = "X:" + e.touches[0].clientX + " Y:" + e.touches[0].clientY;
    console.log("X:" + e.touches[0].clientX + " Y:" + e.touches[0].clientY);
    document.getElementById("debugDisplay2").innerHTML = " e.type: " + e.type;
    console.log(e.type);
}