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



/*A simpe quiz application
asks 5 questions
keeps track of the number of questions the user answers correctly
tell the user the number of right questions they answered correctly
rank the user(5 questions correctly-gold crown, 3-4 silver crown, 1-2 bronze crown)*/

//quiz begins, no answer is correct
var correct = 0;

//ask the questions
var answer1 = prompt("Name the programing language that's also a gem?");
if (answer1.toUpperCase() === 'RUBY') {
    correct += 1;
}

var answer2 = prompt("Name the programing language that's also a snake?");
if (answer2.toUpperCase() === 'PYTHON') {
    correct += 1;
}

var answer3 = prompt("What is the programing language that you use to style web pages?");
if (answer3.toUpperCase() === 'CSS') {
    correct += 1;
}

var answer4 = prompt('What language do you use in building the structure of a webpage?');
if (answer4.toUpperCase()=== 'HTML') {
    correct += 1;
}

var answer5 = prompt('what language do you use to make a websit interactive?');
if (answer5.toUpperCase() === 'JAVASCRIPT') {
    correct += 1;
}

//output the result
document.write('You got ' + correct + ' out of 5 questions correctly');

//rank and display base on user's grae
if (correct === 5) {
    document.write('<p><strong> You have earned a gold crown</strong></p>');
} else if (correct >= 3) {
    document.write('<p><strong>You have earned a sliver medal</strong></p>');
} else if (correct >= 1) {
    document.write('<p><strong> You have earned a bronze medal</strong></p>');
} else {
    document.write('<p><strong> Sorry, no medal</strong></p>');
}