var  n = Math.random();
n=n*6;
randomNumber = Math.floor(n)+1;
var randomDiceImage = "images/dice"+randomNumber+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

var  m = Math.random();
m=m*6;
randomNumber2 = Math.floor(m)+1;
var randomDiceImage2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);


if(randomDiceImage>randomDiceImage2)
{
    document.querySelector("h1").innerHTML=" Player 1 Wins!,suck ass";
}