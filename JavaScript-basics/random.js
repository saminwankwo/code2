// create a random number creator

var Input = prompt("Please type a number");
var topNumber = parseInt(Input);
console.log(topNumber);
var randomNumber = Math.floor(Math.random() * topNumber) + 1;
var message = "<p>" + randomNumber + " is a number between 1 and " + topNumber + "</p>";
document.write(message);

//ask for twoo numbers
var Input1 = prompt("Please type a number");
var topNumber = parseInt(Input1);

var Input2 = prompt("please type a second number");
var bottomNumber = parseInt(Input2);

// console.log(topNumber);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + "</p>";
document.write(message);
