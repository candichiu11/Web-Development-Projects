var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

$(document).on("keydown", function() {
    if (gamePattern.length === 0) {
        nextSequence();
    }  
});


$(".btn").on("click", function(event) {
    console.log("gamePattern: " + gamePattern);
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    
    console.log("userClickedPattern: " + userClickedPattern);
    
    playAudio(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

animatePress("red");

function nextSequence() {

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).delay(30).fadeOut().fadeIn('slow');
    $("#" + randomChosenColour).on("click", function() {
         playAudio(randomChosenColour);
    });

    level++;
    $("h1").text("Level " + level);
}

function playAudio(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {

    $(".btn").on("click", function(e) {
        $("." + e.target.id).addClass("pressed");
        setTimeout(function() {
            $("." + e.target.id).removeClass("pressed");
        }, 100)
    });
}

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success");
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }

    } else {
        console.log("Wrong");
        playAudio("wrong");

        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    userClickedPattern = [];
    gamePattern = [];
}