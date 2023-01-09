document.addEventListener("touchmove", function(event) {
    // Prevent the page from scrolling
    event.preventDefault();
  
    // Get the position of the finger as it moves over the page
    var touch = event.touches[0];
  
    // Get the position of the finger relative to the table
    var rect = event.target.getBoundingClientRect();
    var x = touch.clientX - rect.left;
    var y = touch.clientY - rect.top;
  
    // Find the cell at the finger position
    var cell = document.elementFromPoint(x, y);
  
    // Paint the cell
    if (cell.nodeName == "TD") {
      document.getElementById("mousePosition").innerHTML = toString(x) + "" + toString(y)
        //cell.style.backgroundColor = currentColor;
    }
  });
  