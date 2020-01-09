var numOfSquare = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resestButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init()

function init() {
    // mode button event listener
    for (var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquare = 3: numOfSquare = 6;
            reset();
        })
    }

    for (var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor
    
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct"
                changeColors(clickedColor)
                h1.style.backgroundColor = clickedColor
                resestButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }

    reset()
}

function reset() {
        colors = generateRandomColor(numOfSquare)
        pickedColor = randomColor()
        colorDisplay.textContent = pickedColor
        messageDisplay.textContent = ""
        resestButton.textContent = "New Colors"

        for (var i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i]
            } else {
                squares[i].style.display = "none"
            }
        }
        h1.style.backgroundColor = "steelblue"
}

resestButton.addEventListener("click",function() {
    reset()
})

function changeColors(color) {
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color
    }
}

/* 
    Generate random color to guess
*/
function randomColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

/*
    Generate a random color array
*/
function generateRandomColor(numberOfColor) {
    var arr = []

    for (var i = 0; i < numberOfColor; i++){
        arr.push(getRandomColor())
    }

    return arr
}

/* 
    Generate random color
*/
function getRandomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")"
}