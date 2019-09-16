var questions = [
    ['How many States are in Nigeria?', '36'],
    ['How many continents are there?', '7'],
    ['How many legs does an insect have?', '6'],
]; 

var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(arr) {
    listHtml = '<ol>';
    for (var i = 0; 1 < arr.length; i += 1){
        listHtml += '<li>' + arr[i] + '</li>';
    }
    listHtml += '</ol>';
    return listHtml;
}

for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    
    if (response === answer) {
        correctAnswers += 1;
        correct.push(question);
    } else {
        wrong.push(question);
    }
}

html = 'You got ' + correctAnswers + ' question(s) right';
html += 'You got these questions correct';
html += buildList(correct);

html += 'You got these questions wrong';
html += buildList(wrong);
print(html)