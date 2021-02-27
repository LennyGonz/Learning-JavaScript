const candyFactory = (flavor) => {
  const experts = {
    Chocolate: {
      name: 'Tim',
      secretRecipe: 'choco'
    },
    Strawberry: {
      name: 'Alex',
      secretRecipe: 'berry'
    }
  }

  const expertByFlavor = experts[flavor];
  return (quantity) => {
    return `${quantity} ${flavor} candies are made by ${expertByFlavor.name}.`
  }
}

const chocolateExpert = candyFactory('Chocolate');
const strawberryExpert = candyFactory('Strawberry');

console.log(chocolateExpert(1000));
// 1000 chocolate candies are made by Time

console.log(strawberryExpert(500));
// 500 strawberry candies are made by Alex

// ***********************************
// 7 Questions on Javascript Closures
// ***********************************


// 1. Consider the following functions clickHandler(), immediate(), and delayedReload()

/* let countClicks = 0;
button.addEventListener('click', function clickHandler() {
  countClicks++;
});

const result = (function immediate(number) {
  const message = `number is: $(number)`;
  return message;
})(100);

setTimeout(function delayedReload() {
  location.reload();
}, 1000);let countClicks = 0;
*/

// Which of these 3 functions access outer scope variables?
/*
 * clickHandler() if you create an exection context
 * local memory for this function has no declaration of a variable called countClicks
 * so we look for this variable in the Global memory, which is where countClicks is initialized
 * SO - yes clickHandler() has access to outer scope variables
 * 
 * 
 * immediate() doesn't access any variables in the outer scope
 * 
 * delayedReload() access global variable location - location is not a user defined variable, but it's a browser object.
 * So it will always be accessible in the global scope
*/

// 2. What will log to console the following code snippet?

(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // What is logged?
  })(1);
})(0);

// 0 will be logged
// immediateA() is called with the argument 0, thus `a` parameter is 0
// immediateB() function, being nested into immediateA function, is a closure that
// captures `a` variable from the outer `immediateA` scope, where `a` is `0`
// This console.log(a) logs 0


// 3. What will log to console the following code snippet:

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // this will log 1
  }
  console.log(count) // this will log 0
})

// immediate's execution context doesnt have a local variable called count
// so we look in the global scope and thats how we enter the if-statement
// however once we exit we the count we have access to so back the global count which is 
