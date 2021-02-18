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

