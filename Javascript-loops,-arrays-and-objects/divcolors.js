var html ='';
var rgbColor;

function randomRgb() {
    return Math.floor(Math.random() * 256); 
}

function randomColor() {
    var color = 'rgb(';
    color += randomRgb() + ',';
    color += randomRgb() + ',';
    color += randomRgb() + ')';
    return color;
}

function print(message) {
    document.write(message);
}
for (let i = 0; i < 10; i++) {
    rgbColor = randomColor();
    html += '<div style = "background-color:' + rgbColor + '">2</div>';
 
}

print(html);

document.write('i am fine');
console.log(rgbColor);
