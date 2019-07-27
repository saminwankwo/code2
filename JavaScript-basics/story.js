"<h2> There once was a[adjective] programmer who wanted to use JavaScript to[verb] a [noun] </h2>"
var question = 3;
'[3 questions left]'
var questionLeft = '[ ' + question + 'question left ]'; 
var adjective = prompt("please type an adjective" + questionLeft);

question -= 1;
var questionLeft = '[ ' + question + 'question left ]';
var verb = prompt("Please type a verb" + questionLeft);

question -= 1;
var questionLeft = '[ ' + question + 'question left ]';
var noun = prompt("please type a noun" + questionLeft);

var sentence = "<h2> There once was a " + adjective;
alert("All done. Ready for the message?");
sentence += " programmer who wanted to use JavaScript to " + verb;
sentence += " a " + noun + "</h2>";
document.write(sentence);