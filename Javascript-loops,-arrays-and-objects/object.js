var person = {
    name: "John",
    country: "Nigeria",
    age: 34,
    isAStudenth: true,
    skill:['HTML', 'CSS', 'JS'],

}

//two ways to acess the values inside an object
// alert(person[name]);

// alert(person.name);
// person.love = "none";
// console.log(person.love);

function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}

var message = '<p> Hello, My name is ' + person.name + '</p>';
message += '<p> I live in ' + person.country + '</p>';
person.name = 'Samuel Nwankwo';
message += '<p> But, I wish my name was ' + person.name + '</p>';
person.age += 1;
message += '<p> He is now ' + person.age + '</p>';
message += '<p> I have ' + person.skill.length + ' skills</p>';
message += person.skill.join(' ') +'</p>'
print(message);  