var dice1 = Math.random();
var dice2 = Math.random();
dice1 = Math.floor(dice1 * 6) + 1;
dice2 = Math.floor(dice2 * 6) + 1;

var image1 = "Dice Images/dice" + dice1 + ".png";
document.querySelectorAll(".img1")[0].setAttribute("src", image1);

var image2 = "Dice Images/dice" + dice2 + ".png";
document.querySelectorAll(".img2")[0].setAttribute("src", image2);

if (dice1 > dice2) {
  document.getElementById("results").textContent = "Player 1 wins 🎉🎉";
} else if (dice2 > dice1) {
  document.getElementById("results").textContent = "Player 2 wins 🎉🎉";
} else {
  document.getElementById("results").textContent = "Sorry, it's Draw...Better luck next time 👍👍";
}
