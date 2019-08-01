// generating random numbers using parameters

function alertRandom(upper) {
    var randomNumber = Math.floor(Math.random() * upper) + 1;
    return randomNumber;
}

console.log( alertRandom(9));


/* function to demonstrate the use of multiple parameters
A program to calculate area of a triangle*/

function getArea(width, length, unit) {
    var area = width * length;
    return area + " " + unit;
}
document.write(getArea(6, 5, 'cm'));

/* Generating random numbers between two numbers, lower and higher*/
function getRandom(upperNumber, lowerNumber) {
    var randomNumber = Math.floor(Math.random() * (upperNumber - lowerNumber + 1)) + lowerNumber;
    return randomNumber;
}
document.write(getRandom(2, 5000));
// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
