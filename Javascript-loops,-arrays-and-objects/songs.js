var playList = [
    ['chandelier', 'Sia'],
    ['From now on', 'Greatest showman'],
    ['chinedu', 'mercy chinwo'],
];

function print(message) {
    document.write(message);
}

function printSongs( songs ) {
    var listHtml = '<ol>';
    for (var i = 0; i < songs.length; i += 1) {
        listHtml += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
    }
    listHtml += '</ol>';
    print(listHtml);
}

printSongs(playList);