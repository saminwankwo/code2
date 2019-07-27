var test = "homecoming queen ";
console.log(test.length);
alert(test.length);
document.write(test.length);

//capturing user input
var vistorName = prompt("what is your name?");
alert(vistorName);
var message = "Hello " + vistorName;
message = message + " we are so glad that you came back to visit ";
message = message + "Thank you ";
message += " this requires less typing";
document.write(message);
document.write(message.length);

console.log(test.toLowerCase());
console.log(test.toUpperCase());


//creating a shoutout app
var stringToShout = prompt("what should I shout?");
var shout = stringToShout.toUpperCase();
shout += "!!!!"
alert(shout);

//build a story maker- challenge
var story = prompt("Please type an adjective");
story += "this is a lazy programmer";
var story = prompt("please type a verb");
story += "he is a fine boy"
var story = prompt("please type a noun");
document.write(story);

