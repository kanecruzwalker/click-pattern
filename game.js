var buttonColours = ["red", "blue", "green","yellow"];
var gamePattern = [];
var userClickedPattern = [];


// select button's and make them play sounds on click
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});



// generate next color in sequence and play sound 
function nextSequence (){
    // random # between 0-3
    var randomNumber = Math.floor(Math.random()*4) ;
    console.log(randomNumber);
    
    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);

    // animation on buttons, and playing sound
    $("#" + randomChosenColour).fadeOut(120).fadeIn(120);

    playSound(randomChosenColour);
}

// sound function linked to button clicked
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// animates buttons when they are push to go gray
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


// game patterns not being pushed or made
console.log(gamePattern);
console.log(userClickedPattern);
