var person = {
    name: "John",
    country: "Nigeria",
    age: 34,
    isAStudenth: true,
    skill:['HTML', 'CSS', 'JS'],

}

for (prop in person) {
    console.log(prop, ': ', person[prop]); 
}

//using array of objects
var questions = [
    {
        question: 'How many States are in Nigeria?',
        answer: '36'
    },
    {
        question: 'How many continents are there?',
        answer: '7'
    },
    {
        question: 'How many legs does an insect have?',
        answer: '6'
    },
]; 

var correctAnswers = 0;
var question;
var answer;
var responses;

function print(message) {
    document.write(message);
}


for (var i = 0; i < questions.length; i += 1) {
    question = questions[i].question;
    answer = questions[i].answer;
    response = prompt(question);
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