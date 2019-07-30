//regular functions - name fuction
function alertRandom() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber);
}

// alertRandom();

// function expression, a style of creating functions
// a function expression let you asign a function to a variable
var alertRandom = function () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.write(randomNumber);
};

alertRandom();


function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

alert(getRandomNumber());

// writing a function that have multiple return value
function isEmailEmpty() {
    var field = document.getElementById('email');
    if (field.value === '') {
        return true;
    } else {
        return false;
    }
}
//then test the field by
var fieldTest = isEmailEmpty();
if (fieldTest === true) {
    alert('Please provide your email address');
}