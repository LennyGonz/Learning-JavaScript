/******************************************************************************** 
----------------------------------  Iterators  ----------------------------------
********************************************************************************/

// ************************** .forEach() ************************************** \\

// The first iterator method that we're going to learn is .forEach().
// Aptly named ==> .forEach will execute the SAME code on each element of an array
let groceries = ['whole wheat flour','brown sugar','salt','cranberries','walnuts'];
groceries.forEach(function(groceryItem){
  console.log('-'+groceryItem);
});
// the code above will log a nicely formatted list of the groceries to the console
// 1. The first line is an array of grocery items.

// 2. groceries.forEach() calls the .forEach() method on the groceries array

// 3. (function(groceryItem){ creates a function that takes a single parameter,
//    and opens the block of code for that function. Because .forEach() is an
//    iterator method, every element in the groceries array will be passed to this
//    function as an argument in place of groceryItem. Syntactically, the name of the
//    parameter does not matter. However, it is a best practice to give parameters
//    descriptive names so that other developers who read your code can understand it.

// 4. console.log('-'+groceryItem); is the code we wish to execute upon each element
//    in the array. Logging the item to the console with a - in front of it makes
//    the elements look like a list as they're printed out.

// 5. }); closes the function code block and .forEach() method in that order.

// We can simplify that code using arrow function syntax

groceries.forEach(groceryItem => console.log('-'+groceryItem));
// make sure to comment one of the TWO groceries function

// ********************************** .map() ********************************** \\
let numbers = [1,2,3,4,5];

/*
1. The first line is an array of numbers

2. let bigNumbers = numbers.map create a new array, bigNumbers, in which the
   returned values of the of .map() method will be saved and calls the .map()
   method on the numbers array

3. (function(number){ creates a function that takes a single parameter, number,
   and opens the block of code for that function

4. return number*10; is the code we wish to execute upon each element in the array.
   This will save each value from the numbers array, multiplied by 10, to the 
   bigNumbers array.

5. }); closes the function code block and .map() method in that order.
*/

// Arrow function syntax 
let numbers = [1, 2, 3, 4, 5]; 
let bigNumbers = numbers.map(numbers => numbers * 10);

//**********************************************************************************\\
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

let secretMessage = animals.map(animal => animal.charAt(0));

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

let smallNumbers = bigNumbers.map(num => num/100);

// ********************************** .filter() ********************************** \\

/* FILTER returns a NEW ARRAY 
   How .filter() returns certain elements from the original array that evaluates to
   truth based on conditions written in the block of the method
*/
let words = ['chair','music','pillow','brick','pen','door'];
let shortWords = words.filter(function(word){
  return word.length < 6;
});

// 1. let shortWords = declares a new array that will contain the returned elements of 
//    the .filter() method

// 2. words.filter(function(word){ calls the .filter() method on the words array and 
//    creates a function that will take a single VREyeParameters, word. Each element
//    in the words array will be passed to this function as an argument.

// 3. return word.length < 6; is the condition to filter for all elements in the words
//    array that have fewer than 6 characters will be added to thr shortWords array.

// 4. }); closes the code block and .filter() method in that OES_standard_derivatives.

// We can also write that function using ARROW FUNCTION SYNTAX
let shortWords = words.filter(word => word.length < 6); 

// ANOTHER EXAMPLE:

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(number => number < 250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Refactor the code above using arrow function syntax
let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// ********************************** Challenge ********************************** \\
/* 
  There is an array called words. We want to create a new array of interesting words
  The first thing we want to do is check if there are words that are fewer than 6 
  characters long. There is something missing in the words.some() method call. Fix
  this method so that -true- is printed to the console
*/
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// Something is missing in the method call below
console.log(words.some(function(word) {
  // passing in a WORD from WORDS
  // makes it so that the function returns true
  return word.length < 6;
}));
// Use filter to create a new array
let interestingWords = words.filter(word => word.length > 5);
// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every(word => word.length > 5));

// ********************************** Summary ********************************** \\

let wordz = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
let nums = [1, 50, 75, 200, 350, 525, 1000];
// 1. Replace the word method in the firs method call with a method that will do 
//    something to each of the valyes and RETURN --> undefined

//  Choose a method that will return undefined
cities.method(city => console.log('Have you visited ' + city + '?'));
// cities.forEach(city => console.log('Have you visited ' + city + '?'));

// 2. In the second method call, replace the word method with a method that will
//    return a new array with only those elements longer than 7 characters.

// Choose a method that will return a new array
let longCities = cities.method(city => city.length > 7);
// let longCities = cities.filter(city => city.length > 7);

// 3. In the third method call, repalce the word method with a method that will
//    return a new array of numbers returned from the function.

// Choose a method that will return a new array
let smallerNums = nums.method(num => num - 5);
// let smallerNums = nums.map(num => num - 5);

// 4. In the fourth method call, replace the word method with a method that will
//    return a boolean value

// Choose a method that will return a boolean value
nums.method(num => num < 0);
// nums.every(num => num < 0);