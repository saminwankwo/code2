"<h2> There once was a[adjective] programmer who wanted to use JavaScript to[verb] a [noun] </h2>"

var adjective = prompt("please type an adjective");
var verb = prompt("Please type a verb");
var noun = prompt("please type a noun");
var sentence = "<h2> There once was a " + adjective;
alert("All done. Ready for the message?");
sentence += " programmer who wanted to use JavaScript to " + verb;
sentence += " a " + noun + "</h2>";
document.writeln(sentence);