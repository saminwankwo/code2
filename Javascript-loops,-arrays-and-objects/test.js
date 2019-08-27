var playList = [
    'I made it up',
    'sholly',
    'reason',
    'generation',
    'importer',
    'okay na',
    'fertile',
    'cell fellowship'
];

function print(message) {
    document.write(message);
}

function printList( list ) {
    var listHtml = '<ol>';
    for (var i = 0; i < list.length; i += 1) {
        listHtml += '<li>' + list[i] + '</li>';
    }
    listHtml += '</ol>';
    print(listHtml);
}

printList(playList);

//how to use the join method

var daysInWeek = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday', 'sunday'];
var dayString = daysInWeek.join(', ');
document.writeln(dayString);

//using concate method to join two arrays
var currentStudents = ['John', 'flavour', 'Ngozi'];
var newStudents = ['lucky', 'christian', 'lovely'];
var allStudents = currentStudents.concat( newStudents );
document.write(allStudents)


//using the index of method