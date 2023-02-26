function rollDice() {
  const rollDiceOne = Math.floor(Math.random() * 6 + 1);
  const rollDiceTwo = Math.floor(Math.random() * 6 + 1);
  const diceOne = document.querySelector("img.img1");
  const diceTwo = document.querySelector("img.img2");
  const winner = document.querySelector("h1");

  diceOne.src = "images/dice" + rollDiceOne + ".png";
  diceTwo.src = "images/dice" + rollDiceTwo + ".png";

  if(rollDiceOne > rollDiceTwo) {
    winner.innerHTML = "Player 1 Wins";
  }
  else if(rollDiceOne < rollDiceTwo) {
    winner.innerHTML = "Player 2 Wins";
  }
  else {
    winner.innerHTML = "Draw!";
  }
}