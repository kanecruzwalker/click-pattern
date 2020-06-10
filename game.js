buttonColours = ["red", "blue", "green","yellow"]

nextSequence();

function nextSequence (){
    // random # between 0-3
    var randomNumber = Math.floor(Math.random()*4) ;
    console.log(randomNumber);
    
    // uses button color array $ random number
    // to generate a color picked at random
    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);

}