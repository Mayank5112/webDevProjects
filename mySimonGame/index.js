
var buttonolor = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];
var gamePattern = [];

var level = 0;
var start = true;

$(document).keypress(function () {
    
    if (start === true) {
        
        nextSequence();
        $("h1").text("level " + level)
 
        start = false;
    }
});

function nextSequence() {
  
    userClickedPattern = [];
    level++;

    $("h1").text("level " + level)

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonolor[randomNumber];
    gamePattern.push(randomChosenColor);
  
    $("#" + randomChosenColor).fadeOut(50).fadeIn(50);;
    
    playSound(randomChosenColor);
    animatePress(randomChosenColor);

    };

$(".btn").click(function () {

    var userhosenColor = $(this).attr("id");
    userClickedPattern.push(userhosenColor);
    
    playSound(userhosenColor);
    animatePress(userhosenColor)

    checkAnswer(userClickedPattern.length - 1);

});

function checkAnswer(currentLevel){

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("sucess");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            },1000)
        }
    }
    else {
        console.log("wrong")

        $("h1").text("Game over presss any key to restart")

        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200)

        playSound("wrong");

        startOver();
    }
}
   
function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}

function animatePress(button) {

    var active = $("#" + button);
   
    active.addClass("pressed")
    setTimeout(function () {
           active.removeClass("pressed");
       }, 100)
}

function startOver() {
    level = 0;
    gamePattern = []; 
    start = true;
}



// function check(arrayOne,arrayTwo) {
    
// do {
//     if (arrayOne[level] === arrayTwo[level]) {
            
        
//         }
//         else {
//             playSound(wrong);
//             $("h1").text("game over");
//         }
//    } while (level ===! 0); 
    
    
// }