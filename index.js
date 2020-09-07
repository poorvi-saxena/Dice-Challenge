
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1 =  "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", dice1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", dice2);


if (randomNumber1>randomNumber2)
{
document.querySelector("h1").innerHTML="Player 1 wins!";}

else if(randomNumber1<randomNumber2)
{
document.querySelector("h1").innerHTML="Player 2 wins!";
}

else if(randomNumber1===randomNumber2)
{
document.querySelector("h1").innerHTML="Draw!";
}
