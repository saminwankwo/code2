// file for learning basic operations in Array data structure

var shoppingList = ['carrot', 'milk', 'eggs'];

// acessing an array
console.log(shoppingList[0]);
console.log(shoppingList[3]);



//number of elements in an array
var home = [1, 2, 6, 8, 8, 3, 4, 2, 9, 'jhjgh'];
home[home.length] = 9;
home[home.length] = 'holes';
home.push('phone ', 'home'); // adding item to the end of an array
home.unshift('6', 'ghkk', 'ggfgf'); //adding items to the beginning of an array;
document.writeln(home);
// document.write(home.length)


// removing an element from an array
home.pop();
document.write(home);
