// let person = {
//     _name: 'Lu Xun',
//     _age: 137,
  
    
//     set age(ageIn) {
//       if (typeof ageIn === 'number') {
//         this._age = ageIn;
//       }
//       else {
//         console.log('Invalid input');
//         return 'Invalid input';
//       }
//     },
    
//     get age() {
//       console.log(`${this._name} is ${this._age} years old.`);
//       return this._age;
//     }
  
//   };
//   console.log(person.age);
//   person.age = 'Thirty-nine';
//   person.age = 39;
//   console.log(person.age);


// let restaurant = {
//     _name: 'Italian Bistro',
//     _seatingCapacity: 120,
//     _hasDineInSpecial: true,
//     _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  
//     set seatingCapacity(newCapacity) {
//       if (typeof newCapacity === 'number') {
//         this._seatingCapacity = newCapacity;
//       } else {
//         console.log(`Change ${newCapacity} to a number.`)
//       }
//     },
  
//     get seatingCapacity() {
//       console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
//       return this._seatingCapacity;
//     }
//   }
// console.log(restaurant._seatingCapacity);
// restaurant.seatingCapacity=150;
// const seats = restaurant.seatingCapacity;