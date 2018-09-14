//computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//make randomizer
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//variable to keep score
var gameScore = 0;

//variable to track guesses
var guessNumber = 0;

//HTML/DOM elements to display things
var messageHTML = document.getElementById("score");
var messageHTML = document.getElementById("guesses left");
var messageHTML = document.getElementById("guesses taken");

//if statements that determine wins

//key press
document.onkeypress = function(event){
 
 //variable for key press
 var keyPress = event.key;

 if (keyPress === computerGuess){
   gameScore++;

   messageHTML.textContent = "Correct!";
 }
  else {
    misses++;
    messageHTML.textContent = "Incorrect!";
  }
}

