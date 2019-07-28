// first look at conditionals
var answer = prompt("what programing language is the name of a gem?");
if (answer.toUpperCase() === 'RUBY') {
    document.write("<p> That's Right </p>");
} else {
    document.write("<p> sorry, wrong answer</p>");
}


//generate a random number and ask the user to quess it
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I am thinking of a number between 1 and 6. what is it?");
if (parseInt(guess) === randomNumber) {
    document.write("you guessed the right number");
} else {
    document.write("sorry, the Number was " + randomNumber + '</p>');
}

/*The random number guessing game 
A random guessing game, that gives a user two attempt */

/* adding booleen value to our game*/
//assume the user didn't quess correctly
var correctGuess = false; 
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I am thinking of a number between 1 and 6. what is it?");
if (parseInt(guess) === randomNumber) {
    correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
    var guessMore = prompt('Please try again. the number I am thinking of is more than ' + guess);
    if (parseInt(guessMore) === randomNumber) {
        correctGuess = true;
    }
} else if (parseInt(guess) > randomNumber) {
    var guessLess = prompt('Please try again. the number I am thinking is less than ' + guess);
    if (parseInt(guessLess) === randomNumber) {
        correctGuess = true;
    }
}
 
if ( correctGuess ) {
    document.write("you guessed the right number")
} else {
    document.write("sorry, the Number was " + randomNumber + '</p>');
}



