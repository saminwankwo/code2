
function randomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1; 
}

//  document.write(randomNumber(8));

// var counter = 0;
// while (counter < 1000000000) {
//     ranNum = randomNumber(8);
//     document.write(ranNum + ' ');
//     counter += 1;
// }

//learning about do-while loop
var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}

do {
    guess = prompt('I am thing of a number between 1 and 10, what is it?');
    guessCount += 1;

    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    }

} while (!correctGuess)
document.write('<h1> You guessed the number </h1>');
document.write('It took you ' + guessCount + ' tries to guess the right ' + randomNumber)

// using for loop to add ten div to page
var html = '';

for