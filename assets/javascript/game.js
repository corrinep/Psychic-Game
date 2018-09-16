//computer choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//make randomizer
var computerGuess = function () {

 letters[Math.floor(Math.random() * letters.length)]
 return computerGuess;

}

//variable to keep score
var wins = 0;
var losses = 0;

//variable to track guesses left
var guessesLeft = 9;

//variable to track guesses taken
var guessesTaken = [];

//HTML/DOM elements to for reference
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var guessesLeftHTML = document.getElementById("guesses left");
var guessesTakenHTML = document.getElementById("guesses taken");

//functions to display scores
function printScore(wins, losses){
  scoreHTML.innerHTML = "Wins: " + wins;
  scoreHTML.innerHTML = "Losses: " + losses;
}

//function to print guesses

function printGuesses(guessesLeft, guessesTaken){
  guessesLeft.innerHTML = "Guesses Left: " + guessesLeft;
  guessesTaken.innerHTML = "Guesses taken so far: " + guessesTaken;
}


//key press
document.onkeypress = function(event){
 
 //variable for key press
 var keyPress = event.key;
 guessesTaken.push(keyPress);
 guessesLeft--;
 console.log(keyPress);

//if statements that determine wins
 if (keyPress === computerGuess){
   wins++;
   
 }
  else if (keyPress !== computerGuess) {
    guessesLeft--;
   
  }
   else  (guessesLeft === 0); {

    losses++;

   }


//display
guessesTakenHTML.textContent = "Your Guesses so far: " + keyPress;
winsHTML.textContent = "wins: " + wins;
lossesHTML.textContent = "losses: " + losses;

}
 //reset game function
 function resetGame(){
   guessesLeft = 9;
   guessesTaken = 9;
   guessesSoFar = [];

   document.getElementById("reset").addEventListener("click", resetGame);
 }