/*************************************************************** 
 * Arrays are lists and are a way to store data in JavaScript
 * Arrays are created with brackets []
 * Each item inside of an array is at a numbered position, starting at 0
 * We can access one item in an array using its numbered position, with syntax like: myArray[0]
 * We can also change an item in an array using its numbered position, with syntax like myArray[0] = 'new string';
 * Arrays have a length property, which allows you to see how many items are in an array
 * Arrays have their own methods, including .push() and .pop(), which add and remove items from an array
 * Arrays have many other methods that perform different functions .slice() and .shift().
 * Variables that contain array can be declared with let or const.
 * Even when declared with const, arrays are still mutable; they can be changed
 * However a variable declared with const cannot be reassigned
*/

let groceryList = ['orange juice','bananas','coffee beans','brown rice','pasta','coconut oil','plantains'];
groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1,4));
console.log(groceryList);