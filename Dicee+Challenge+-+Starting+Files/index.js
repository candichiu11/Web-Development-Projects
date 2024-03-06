var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);

var leftImage = document.querySelector(".img1"); 
// document.querySelectorAll("img")[0];
leftImage.setAttribute("src", "./images/dice" +randomNumber1+".png");

var rightImage = document.querySelector(".img2");
rightImage.setAttribute("src", "./images/dice" +randomNumber2+".png");

var h1Element = document.querySelector("h1");

if (randomNumber2 > randomNumber1) {
    h1Element.textContent = "Player 2 Wins! 🚩";
} else if (randomNumber2 < randomNumber1) {
    h1Element.textContent = "🚩 Player 1 Wins!";
} else {
    h1Element.textContent = "Draw!";
}