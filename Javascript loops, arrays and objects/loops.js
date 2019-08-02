
function randomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1; 
}

// document.write(randomNumber(8));

var counter = 0;
while (counter < 1000000000) {
    ranNum = randomNumber(8);
    document.write(ranNum + ' ');
    counter += 1;
}

// make a computer guess a randomNumber
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
document.write('<p> It took the computer ' + attempts + 'attempts to get it right </p>');