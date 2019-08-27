var inStock = ['apples', 'eggs', 'rice', 'Beans', 'millk', 'loaf bread', 'peanuts', 'goats',
    'tin', 'pizza', 'ice cream', 'cassvita', 'salad'];

var search;

function print(message) {
    document.write('<p>' + message + '</p>');
}

while (true) {
    search = prompt("search for a product in our store. type 'list' to show all the product in our store and quit to exit");
    search = search.toLowerCase();

    if (search === 'quit') {
        break;
    } else if (search === 'list') {
        print(inStock.join(', '));
    } else {
        if (inStock.indexOf(search) > -1) {
            print('Yes, we have ' + search + ' in the store');
        } else {
            print(search + ' is not in stock');
        } 
    }
}