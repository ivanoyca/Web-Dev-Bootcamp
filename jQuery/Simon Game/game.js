let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []
let level = 0
let startedToToggle = true

$(document).on('keypress', function (event) {
    if (startedToToggle == true) {
        if (event.key === "a") {
            nextSequence()
            startedToToggle = false
        }
    }
})

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColor)
    level++
    $("h1").text(`Level: ${level}`)
    console.log(gamePattern)
}

$("div .btn").on("click", function () {
    let userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    nextSequence()
    checkAnswer()
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


}


