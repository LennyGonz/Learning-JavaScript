# Closures

Javascript is a synchronous language
When our thread of execution is going line by line saving variables and function definitions to global memory, we will eventually  (maybe) reach a line that executes a function
When we execute that function Javascript creates an execution context specifically to run that function
Inside of that execution context there's a local memory... that local memory, when its done being used isn't deleted or collected by the garbage collector it is packaged away and carried by the return statement



----

[Closure](https://dev.to/papercoding22/how-to-explain-javascript-closure-to-a-5-years-old-kid-4d6n) is like a candy factory
You send the factory an order to make candies for you with your favorite flavor
The factory will pick the right expert for you,
And it send back to you an expert's contact
Now whenever you need, you just call and submit the quantity
That expert will take care all the rest for you

```js
const candyFacaotry = (flavor) => {
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
    return `${quantity} ${flavor} candies are made by ${expertByFlavor}.`
  }
}
```

The factory doesn't want to send you their experts,
Because it may leak their top secret recipe

Instead, they just send you a way to call the expert (as a function)
and waiting for your call to order anytime

Now the factory keeps your flavor and your expert

In conclusion:
Only the inner function can access outer function's scope
Only the factory can directly tell the expert what to do

```js
const chocolateExpert = candyFactory('Chocolate');
const strawberryExpert = candyFactory('Strawberry');

console.log(chocolateExpert(1000));
// 1000 chocolate candies are made by Time

console.log(stawberryExpert(500));
// 500 strawberry candies are made by Alex
```
