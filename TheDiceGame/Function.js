// random number genration 
var randomMumber1 = Math.floor(Math.random() * 7);
var randomMumber2 = Math.floor(Math.random() * 7);
// changing the img on reload (for player one )
if (randomMumber1 === 1) {
    document.querySelector(".d-1").setAttribute("src","dice1.png");
}
else if (randomMumber1 === 2) {
    document.querySelector(".d-1").setAttribute("src","dice2.png");
}
else if (randomMumber1 === 3) {
    document.querySelector(".d-1").setAttribute("src","dice3.png");
}
else if (randomMumber1 === 4) {
    document.querySelector(".d-1").setAttribute("src","dice4.png");
}
else if (randomMumber1 === 5) {
    document.querySelector(".d-1").setAttribute("src","dice5.png");
}

// changing the img on reload (for player two )
if (randomMumber2 === 1) {
    document.querySelector(".d-2").setAttribute("src", "dice1.png");
}
else if (randomMumber2 === 2) {
    document.querySelector(".d-2").setAttribute("src", "dice2.png");
}
else if (randomMumber2 === 3) {
    document.querySelector(".d-2").setAttribute("src", "dice3.png");
}
else if (randomMumber2 === 4) {
    document.querySelector(".d-2").setAttribute("src", "dice4.png");
}
else if (randomMumber2 === 5) {
    document.querySelector(".d-2").setAttribute("src", "dice5.png");
}
// declaring the winner 
if (randomMumber1 < randomMumber2) {
    document.querySelector("h3").innerText = "Player 2 won "
}
else if (randomMumber2 < randomMumber1) {
    document.querySelector("h3").innerText = "player 1 won "
}
else {
    document.querySelector("h3").innerText= "it's a draw"
}