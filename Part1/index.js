function play() {
    console.log("Square was clicked")
    const squares = document.querySelectorAll("#square").value;
    for (square of squares) {
        square.addEventListener("click", play);
    }
}

