
var randomNumber1 = Math.floor(Math.random() * 6 ) +1;

var randomDiceImages = "dice" + randomNumber1 + ".png";

var randomSources = "images/" + randomDiceImages ;

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src", randomSources);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomSources2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll ("img")[1].setAttribute("src",randomSources2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩player 1 Wins!"
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").innerHTML= "Draw!"
}
