/*// make a computer guess a randomNumber
var upper = 10000;
var randomNumber = getRandomNumber(upper);    
var guess;
var attempts = 0; 


function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1; 
}

while (guess !== randomNumber ) {
    guess = getRandomNumber(upper);
    attempts += 1;
}

document.write('<p> The random number was: ' + randomNumber + '</p>');
document.write('<p> It took the computer ' + attempts + ' attempts to get it right </p>');
*/

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}

while(guessCount < 10) {
    guess = prompt('I am thing of a number between 1 and 10, what is it?');
    guessCount += 1;

    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
        break;
    }
 
} 

if ( correctGuess ) {
    document.write('<h1> You guessed the number </h1>');
    document.write('It took you ' + guessCount + ' tries to guess the right ' + randomNumber)
} else {
    document.write("<h1> sorry, you didn't guess the right number<h1>")
}
