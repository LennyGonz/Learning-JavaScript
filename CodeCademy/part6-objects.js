/******************************************************************************** 
----------------------------------  Objects  ----------------------------------
********************************************************************************/

/* Objects can hold data and functions, which we can use to represent real-world
   things in JavaScript.
*/

// THE WRONG WAY TO DO IT:
const restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese','Chicken Cacciatore','Linguine pesto'],
    openRestaurant(){
      if(hasDineInSpecial){ // source of the error -- out of the method's scope
        return 'Unlock the door, post the special on the board, then flip the open sign.';
      }
      else{
        return 'Unlock the door, then flip the open sign.';
      }
    }
  };
  console.log(restaurant.openRestaurant());
  // The output would be: ReferenceError: hasDineInSpecial is not defined
  // The error above doesn't work because hasDineInSpecial is out of the
  // .openRestaurant() method's scope.
  
  // To address this scope issue, we can use this 'THIS' keyword to access
  // properties inside of the same object
  // We can utilize THIS in the openRestaurant() function as such:
  const restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese','Chicken Cacciatore','Linguine pesto'],
    openRestaurant(){
      if(this.hasDineInSpecial){ // THIS allows us to access properties inside of the same object
        return 'Unlock the door, post the special on the board, then flip the open sign.';
      }
      else{
        return 'Unlock the door, then flip the open sign.';
      }
    }
  };
  console.log(restaurant.openRestaurant());
  
  // **************************** Getters and Setters **************************** \\
  
  // A common object design paradigm is to include GETTER and SETTER methods as ATTRIBUTES
  
  // Getter and setter methods get and set the properties inside of an object. There are a
  // couple of advantages to using these methods for getting and setting properties directly:
  
  // * You can check if new data is valid before setting a property
  // * You can perform an action on the data while you are getting or setting a property
  // * You can control which properties can be set and retrieved.
  
  // Let's consider our `restaurant` object
  let restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese','Chicken Cacciatore','Linguine Pesto']
  }
  // In the example above, the seatingCapacity key holds the number 120. Let's
  // imagine that the restaurant managers like that this value is a number because they can use
  // it to calculate the number of available seats at any given time during the evening
  
  // Available seats = Capacity - Seats Taken
  
  // Imagine the restaurant adds an extra room to increase the seating capacity by thirty people
  // and the managers must change the seatingCapacity value in the restaurant object.
  
  // A good developer would anticipate seatingCapacity as something that could change. To 
  // address this change, they would write code that checks if they newly set seatingCapacity
  // value is valid. For example, the method should check if the seatingCapacity field is a 
  // number like 150, not the string 'one hundred fifty'.
  
  // We can write this into a settler method as follows:
  let restaurant = {
    _name: 'Italian Bistro',
    _seatingCapacity: 120,
    _hasDineInSpecial: true,
    _entrees: ['Penne alla Bolognese','Chicken Cacciatore','Linguine Pesto'],
    set seatingCapacity(newCapacity){
      if(typeof newCapacity==='number'){
        this._seatingCapacity=newCapacity;
        console.log(`${newCapacity} is a valid input.`);
      }
      else{
        console.log(`Change ${newCapacity} to a number`);
      }
    }
  }
  
  // Let's consider the new information in this example step-by-step
  
  // * We prepended the property names with underscores (_). Developers use
  //   an underscore before a property name to indicate a property or value should not
  //   be modified directly by other code. We recommend prepending all properties with
  //   an underscore, and creating setters for all attributes you want to access later
  //   in your code.
  
  // * The set seatingCapacity() setter method accepts newCapacity as a variable
  //   The newCapacity variable holds the new value that we will store in _seatingCapacity
  
  // * Inside of the .seatingCapacity() setter we use a conditional statement to check
  //   if the newCapacity variable (our new value is a number).
  
  // * If the input value is a number(valid input), then we use this._seatingCapacity
  //   to change the value assigned to _seatingCapacity. If it is not valid, then we
  //   output a message to the user.
  
  // ----------------------------------- EXAMPLE ------------------------------------ *\
  
  // 1. Let's consider a new person object we want to add a setter method that changes
  //    the age of person
  //    Notice, we already prepended the _age property with an underscore
  //    Start by adding an empty .age() setter method
  
  // 2. Inside of the setter we want to check if the user's input is valid
  //    Create a conditional statement to check if a user's input is a number
  //    If the input is a number, set the _age property to the input value. If 
  //    the input is not a number, return the string, 'Invalid input'.
  let person = {
    _name: 'Lu Xun',
    _age: 137,
  
    
    set age(ageIn) {
      if (typeof ageIn === 'number') {
        this._age = ageIn;
      }
      else {
        console.log('Invalid input');
        return 'Invalid input';
      }
    },
    
    get age() {
      console.log(`${this._name} is ${this._age} years old.`);
      return this._age;
    }
  
  };
  person.age = 'Thirty-nine';
  person.age = 39;
  console.log(person.age);

  // ----------------- GETTERS AND SETTERS PART II ----------------- \\
  
  // 1. Under your object, use dot notation to try changing the value of age to
  //    the string, 'Thirty-nine'
  // 2. Now, use dot notation to set age to 39
  let person = {
    _name: 'Lu Xun',
    _age: 137,
    
    set age(ageIn) {
      if (typeof ageIn === 'number') {
        this._age = ageIn;
      }
      else {
        console.log('Invalid input');
        return 'Invalid input';
      }
    },
    
    get age() {
      console.log(`${this._name} is ${this._age} years old.`);
      return this._age;
    }
  
  };
  person.age = 'Thirty-nine';
  person.age = 39;
  console.log(person.age);
  
  // ----------------- More Getters and Setters PART III ----------------- \\
  
  // Once you've set the properties, you need a way to access them. 
  // Getters are used to get the property values inside of an object
  let restaurant = {
    _name: 'Italian Bistro',
    _seatingCapacity: 120,
    _hasDineInSpecial: true,
    _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  
    set seatingCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
      } else {
        console.log(`Change ${newCapacity} to a number.`)
      }
    },
  
    get seatingCapacity() {
      console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
      return this._seatingCapacity;
    }
  }
  // In the example above, the getter method (get seatingCapacity()) logs something to
  // the console and returns the value saved to _seatingCapacity. We call the getter 
  // method the same way we would access a property without a method:
  
  console.log(restaurant._seatingCapacity); // this demonstrates the original seating capacity 
  restaurant.seatingCapacity=150; // we increase the capacity
  const seats = restaurant.seatingCapacity; // we GET the seating capacity and 
  // print the line "There are 150 seats at Italian Bistro"
  
  // In this example we set the seatingCapacity to 150, then call the getter method using
  // restaurant.seatingCapacity and save the result to a variable called seats. The getter
  // will also log the following line of code to the console.
  // "There are 150 seats at Italian Bistro"
  
  // EXAMPLE
  // 1. Create a getter method for your _age property. Inside the method log the following
  //    string and return the value saved to _age:
  //    "NAME is AGE years old"
  //    Use the values saved to _name and _age in place of NAME and AGE in the string above
  
  // 2. Use dot notation inside of a console.log() to get the value saved to your _age 
  //    property and print it to the console
  let person = {
    _name: 'Lu Xun',
    _age: 137,
    
    set age(ageIn) {
      if (typeof ageIn === 'number') {
        this._age = ageIn;
      }
      else {
        console.log('Invalid input');
        return 'Invalid input';
      }
    },
    get age() {
      console.log(`${this._name} is ${this._age} years old.`);
      return this._age;
    }
  };
  person.age = 'Thirty-nine';
  person.age = 39;
  console.log(person.age);
  
  /************************************Summary********************************** *\
   * Objects store key-value pairs and let us represent real-world things in JS
   * Properties in objects are separated by commas. Key-value pairs are always separated by a colon
   * You can add or edit a property within an object with dot notation
   * A method is a function in an object
   * "this" -- helps us scope inside of object methods. "this" is a dynamic variable that can change depending on the object that is calling the method
   * Getter and Setter methods allow you to process data before accessing or setting property values.
   * 
*/  