var playList = [
    'I made it up',
    'sholly',
    'reason',
    'generation',
    'importer',
    'okay na',
    'fertile'
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