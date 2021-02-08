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

<hr>

The **`callbacks`**, **`event handlers`**, **`higher-order functions`** can access **outer scope variables** thanks to *`closures`*

You need to understand the fundamental terms: **`scope`** and **`lexical scope`**
Then, after grasping the basics, you'll need just one step to finally understand closures

<div>

1. The Scope
   > When you define a variable, you want it accessible within some boundaries
   >  
   > For example, a `result` variable... it makes sense to want it within a `calculate()` function, as an internal detail
   >
   > Outside of the `calculate()` function, the `result` variable is inaccessible
   >
   > **In JavaScript, a scope is created by a function or code block**
   > 
   > Let's see how the scope affects the availability of a variable `count`.
   > This variable belongs to a scope created by the function `foo():`
   >
   > ```js
   > function foo() {
   >  // The Function foo
   >  let count = 0
   >  console.log(count)
   > }
   >
   > foo();
   > console.log(count); // referenceError: count is not defined
   > ```
   >
   > `count` is freely accessed within the scope of `foo()`
   > 
   > However, outside of the `foo()` scope, `count` is inaccessible.
   > If you try to access `count` from outside anyways,
   > Javascript throws `ReferenceError: count is not defined`
   > 
   > In JavaScript, the scope says: if you've definde a variable inside of a function or code block,
   > then you can use this variable only within that function or code block.
   > The above example demonstrates this behavior
   >
   > The **`scope`** manages variables accessibility
   >
   > ```js
   > function foo() {
   >  // The Function foo
   >  let count = 0
   >  console.log(count)
   > }
   >
   > foo();
   > console.log(count); // referenceError: count is not defined
   > ```
   >
   > **The *`scope`* is a space policy that rules the accessibility of variables**
   >
   > An immediate property arises: the scope *isolates* variables.
   > 
   > That's great because *different scopes can have variables with the same name*
   >
   > You can reuse common variable names (`count`, `index`, `current`, `value`, etc) in different scopes without collions
   >
   > `foo()` and `bar()` function scopes have their own, but same named, variables `count`:
   > ```js
   > function foo() {
   >  // The Function foo
   >  let count = 0
   >  console.log(count)
   > }
   >
   > foo();
   > console.log(count); // referenceError: count is not defined
   > ```
   >
   > ```js
   > function bar() {
   >  // 'bar' function scope
   >  let count = 1
   >  console.log(count); // logs 1
   > }
   > 
   > foo();
   > bar();
   > s
   > `count` variables from `foo()` and `bar()` function scopes do not collide


2. Scopes nesting
3. The Lexical Scope
4. The Closure
5. Closure examples
5.1 Event Handler
5.2 Callbacks
5.3 Functional programming
6. Conclusion

</div>
