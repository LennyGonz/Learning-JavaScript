// The syntax between CLASS and OBJECT may look similar,
// but there is one important method that sets them apart.

// The constructor method:
// JS calls the constructor() method every time it CREATES a new INSTANCE of a class

class Dog {
    constructor(name) {
      this.name = name;
      this.behavior = 0;
    }
  }

// * Dog is the name of our class.
// * JS will invoke the constructor() method every time we create a 
//   new instance of our Dog class 
// * This constructor() method accepts one argument, name
// * Inside of the constructor() method, we use --THIS-- keyword
//   In the context of a class, --this-- refers to an instance of
//   that class. 
//   In the Dog vlass, we use this to set the VALUE of the Dog instance's name property to the NAME argument

// * Under this.name, we create a property called --behavior--, which will keep track of the number of times
//   a dog misbehaves. The behavior property is always initialized to zero

// ----------------------- Inheritance I ----------------------- \\
// Imagine our doggy daycare is so so successful that we decide
// to expand the business and open a kitty daycare. Before the
// daycare opens, we need to create a Cat class so we can quickly 
// generate Cat instances. We know that the properties in our Cat
// class (name,behavior) are similar to the properties in our Dog
// class, though, there will be some differences, because of course,
// cats are not dogs.

// Let's say that our Cat class looks like this:
class Cat{
    constructor(name, usesLitter){
        this._name = name;
        this._usesLitter = usesLitter;
        this._behavior = 0;
    }
    get name(){
        return this._name;
    }
    get usesLitter(){
        return this._usesLitter;
    }
    get behavior(){
        return this._behavior;
    }
    incrementBehavior(){
        this._behavior++;
    }
}

// In the example above, we create a Cat class. It shares a couple of
// properties(_name and _behavior) and a method (.incrementBehavior())
// with the Dog class from earlier exercises. The Cat class also 
// contains one additional property (_usesLitter), that holds a 
// boolean value to indicate whether a cat can use their litter box

// When multiple classes share properties or methods, they become
// candidates for inheritance -- a tool developers use to decrease
// the amount of code they need to write.

// With inheritance, you can create a parent class (also known as a superclass)
// with properties and methods that multiple child classes (also known as subclasses)
// share. The child classes inherit the properties and methods from
// their parent class.

// Let's abstract the shared properties and methods from our Cat and Dog
// classes into a parent class called Animal
class Animal{
    constructor(name){
        this._name = name;
        this._behavior = 0;
    }
    get name(){
        return this._name;
    }
    get behavior(){
        return this._behavior;
    }
    incrementBehavior(){
        this._behavior++;
    }
}
// In the example above, the Animal class contains the properties
// and methods that the Cat and Dog classes share 
// (name, behavior, .incrementBehavior())

/*
//                      Parent Class
//              ________________________________
//              |Animal|                       |
//              |                              |
//              | Properties: name, behavior   |
//              | Methods: .incrementBehavior()|
//              |______________________________|
//      |--------                              --------|
//      |                                              |
//      |                                              |
//   Child Class                                Child Class  
//  ________________________________        _________________________________________
// |Dog|                           |       |Cat|                                    |
// |                               |       |                                        |
// | Properties: name, behavior    |       | Properties: name, behavior, USESLITTER |
// | Methods: .incrementBehavior() |       | Methods: .incrementBehavior()          |
// |_______________________________|       |________________________________________|

// Properties: name and behavior seen in Dog and Cat class are inherited
//             from the parent class

*/