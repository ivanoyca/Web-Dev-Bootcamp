let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []
let level = 0
let startedToToggle = true

$(document).on('keypress', function (event) {
    if (startedToToggle == true) {
        if (event.key === "b") {
            nextSequence()
            startedToToggle = false
        }
    }
})

function nextSequence() {
    userClickedPattern = []
    level++
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColor)
    $("h1").text(`Level: ${level}`)
}

$("div .btn").on("click", function () {
    let userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length - 1)
})

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`)
    audio.play()
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success")
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 1000)
        }
        console.log("success")
    } else {
        console.log("wrong")
        let wrongSound = new Audio('sounds/wrong.mp3')
        wrongSound.play()
        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200)
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}

function startOver() {
    level = 0
    gamePattern = []
    startedToToggle = true
}


