let randomNumber1 = Math.floor((Math.random() * 6) + 1); //random no between 1 & 6

let randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png = dice6.png

let randomImageSource = "images/" + randomDiceImage;  //images/dice.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource)

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)