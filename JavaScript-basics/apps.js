// playing with calculation

var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52; 
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds in a day");  
yearsAlive = 26;
var yearsLived = secondsPerDay * yearsAlive;
document.write("<br>I think i've lived for " + yearsLived + " seconds");


var HTMLBadges = prompt("how many html badges do you have?");
var CSSBadges = prompt("how many css badges do you have?");
var totalBadges = HTMLBadges + CSSBadges;
//convert strings to interger
var testBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
alert("wow you have " + totalBadges + " Badges!");
alert("ok " + testBadges + " badges!!");

//convert to float
var testFloat = parseFloat(HTMLBadges) + parseFloat(CSSBadges);

//math object 
Math.random();
Math.round(7.9);

var test2 = Math.floor(Math.random() * 6) + 1;
document.write(test2);


//create a random number generator
var create = prompt("Please enter a number")