var inStock = ['apples', 'eggs', 'rice', 'Beans', 'millk', 'loaf bread', 'peanuts', 'goats',
    'tin', 'pizza', 'ice cream'];

var search;

function print(message) {
    document.write('<p>' + message + '</p>');
}

while (true) {
    search = prompt("search for a product in our store. type 'list' to show all the product in our store and quit to exit")

    if (search === 'quit') {
        break;
    } else if (search === 'list') {
        print(inStock.join(', '));
    } else {
        if (inStock.indexOf(search) > -1) {
            print('');
        } else {
            print('');
        } 
    }
}