var wins = document.querySelector(".wins");
var losses = document.querySelector(".losses");
var health = document.querySelector(".health");
var myLetter = document.querySelector(".myLetter");

var win = 0;
var lose = 0;
var chance = 9;
var usedLetter=[]


var alphabet = ["A", "B","C","D","E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

var index = Math.floor(Math.random() * alphabet.length);
var compChoice = alphabet[index].toLowerCase();
console.log(compChoice);

window.onkeypress = function (e) {
  if (e.key == compChoice) {
    usedLetter=[]
    win++;
    wins.innerText = win;
    resetGame();
  } else {
   if (usedLetter.includes(e.key)==false) {
    usedLetter.push(e.key)
    myLetter.innerText += ` ${e.key} ,`;
    chance--;
    health.innerText = chance;
    if (chance == 0) {
      usedLetter=[]
      lose++;
      chance = 9;
      losses.innerText = lose;
      resetGame();
    }
   }
  }
};

function resetGame() {
  index = Math.floor(Math.random() * alphabet.length);
  compChoice = alphabet[index].toLowerCase();
  myLetter.innerText = "";
  chance = 9;
  health.innerText = chance;
  console.log(compChoice);
}


