//! Own Properties
//? - Own properties are defined directly on the instance object.
//? - Every instance of the object will have its own copy of these properties.
// // --- Example start
// function Bird(name) {
//     this.name = name;
//     //this.numLegs = 2;
// }

// let duck = new Bird("Donald");
// let canary = new Bird("Tweety");

// let ownProps = [];

// for (let property in duck) {
//     if (duck.hasOwnProperty(property)) {
//         ownProps.push(property);
//     }
// }

// console.log(ownProps);
// // --- Example end

//! Prototype properties 
//? - used to reduce duplicate code when intantiating objects.
//? - use prototype to add property and value that will be shared with ALL instances of an object.
// // --- Example start
// Bird.prototype.numLegs = 2;
// // now all instances of Bird will have property numLegs with an automatically set value of 2.

// console.log(duck.numLegs);
// console.log(canary.numLegs);
// // --- Example end

//! Iterate over all properties
//? - The example iterates over all properties separating own properties from prototyped.
//TODO - to make this example work ownProps and this.numLegs needs to be commented out from above examples.
// // --- Example start
// let ownProps = [];
// let prototypeProps = [];
// for (let property in duck) {
//     if (duck.hasOwnProperty(property)) {
//         ownProps.push(property);
//     } else {
//         prototypeProps.push(property);
//     }
// }
// console.log(ownProps);
// console.log(prototypeProps);
// // --- Example end

//! Constructor Property
//? - used to check if an object was created using a certain constructor.
//? - since the constructor property can be overwritten it is better to use the instanceof method instead.
// // --- Example start
// const joinBirdFraternity = (candidate) => {
//     if (candidate.constructor === Bird) {
//         return "Your a bird in the Bird Frat!";
//     } else {
//         return "Your grounded!";
//     }
// }
// console.log(joinBirdFraternity(canary));
// // --- Example end

//! Change prototype to a new object
//? - setting the prototype to a new object is more efficient
// // --- Example start
// Bird.prototype = {
//     numLegs: 2,
//     eat: function() {
//         console.log("nom nom nom");
//     },
//     describe: function() {
//         console.log("My name is " + this.name);
//     }
// };

// let parrot = new Bird("Polly");
// console.log(parrot.eat(), parrot.describe());
// console.log(parrot.constructor === Bird);
// // --- Example end

//! Prototyping + Constructor
//? - when setting the prototype to a new object the constructor property is erased.
//? - To keep the constructor property YOU MUST set the constructor property in the prototype object.
// // --- Example start
// Bird.prototype = {
//     constructor: Bird,
//     numLegs: 2,
//     eat: function() {
//         console.log("nom nom nom");
//     },
//     describe: function() {
//         console.log("My name is " + this.name);
//     }
// };

// let chick = new Bird("Doug");
// console.log(chick.constructor === Bird);
// // --- Example end

//! Locating where an object's prototype comes from
//? - use .isPrototypeOf to query the relationship of an object to a prototype/constructor.
//// --- Example start
// let chickadee = new Bird("Chico");
// console.log(Bird.prototype.isPrototypeOf(chickadee)); // returns true
//// --- Example end
//! Prototype chain
//? - because prototypes are objects, protypes themselves can have prototypes.
//? - this allows methods to be passed along to all subtypes.
//? - the most common example is that the Object.prototype (general JS object prototype) includes the hasOwnProperty method
//? -- this allows all objects (subtypes of the Object.prototype) created in JS to have the hasOwnProperty method.

//! Inheritance to reduce repetition
//? - create supertypes with that include overlapping properties and methods to reduce repetition when creating object prototypes.
//? - creating a supertype will allow other objects to inherit its properties. Method described in next section...
// // --- Example start
// function Animal() { };

// Animal.prototype = {
//     constructor: Animal,
//     describe: function() {
//         console.log("My name is " + this.name);
//     }
// }
// // --- Example end

//! inheriting properties from supertype
//? - ability to reuse properties and methods from supertypes.
// // --- Example start
// // best practice for creating supertypes is not to use:
// let animal = new Animal();

// // rather:
// let animal = Object.create(Animal.prototype);
// // --- Example end
//! setting a child's prototype to an instance of a parent
//? - use the following process to set a child's prototype to be an instance of a parent. i.e bird to inherit animal's properties and methods.
// // --- Example start
// Bird.prototype = Object.create(Animal.prototype);
// // now all instances of bird will have properties and methods inherited from Animal.
// // --- Example end
//! resetting an inherited constructor property
//? - The issue with setting a child's prototype to be an instance of a parent is that they will now show they are constructed by the parent.
//? - You need to manually reset the constructor back to the child.
// // --- Example start
// Bird.prototype.constructor = Bird;
// duck.constructor // will return Bird.
// // --- Example end

//! Adding methods after inheritance
//? - Add methods to a constructor that will only be available to the subtype.
// // --- Example start
// Bird.prototype.fly = function() {
//     console.log("I'm flying!");
// };
// // --- Example end
//! Override Inheritance methods
//? - override by setting a property of the same name to a new value/method.
//? - when searching for a method to execute JS searches from child first and so on and executes the first. i.e duck -> Bird -> Animal -> Object
// // --- Example start
// Bird.prototype.eat = function() {
//     console.log("peck peck peck"); // changes from original "nom nom nom"
// };
// // --- Example end

//! Mixins
//? - takes any object and gives it a new method
// // --- Example start
// let flyMixin = function(obj) {
//     obj.fly = function() {
//         console.log("Flying, woosh!");
//     }
// };

// let bird = {
//     name: "Donald",
//     numLegs: 2
// };

// let plane = {
//     model: "777",
//     numPassengers: 524
// };

// flyMixin(bird); // adds the fly method to bird
// flyMixin(plane); // adds the fly method to plane
// // --- Example end
//! Private properties / closure
//? - make a variable private by creating a variable within a constructor function. 
//? -- This changes the scope of the variable to within the constructor function and not available globally. 
//? -- This way, the variable can only be accessed and changed by methods also within the constructor function.
//? - CLOSURE: A function always has access to the context in which it was created. 
// // --- Example Start
// function Bird() {
//     let hatchedEgg = 10; // private variable only available within the function
//     this.getHatchedEggCount = function() {
//         return hatchedEgg;
//     };
// }

// let ducky = new Bird();
// ducky.getHatchedEggCount(); // returns 10.
// // --- Example End

//! Immediately Invoked Function Expression (IIFE)
//? - A common pattern in JS is to execute a function as soon as it is declared
//? - the function has no name and is not stored in a variable. the () at the end cause it to be immediately executed.
// // --- Example start
// (function () {
//     console.log("Chirp, Chirp!");
// })();
// // --- Example end

//! use IIFE to create a module
//? - IIFE is often used to group related functionality into a single object or module.
//? - In the example below the IIFE returns an object motionModule that contains all the mixin behaviours as properties of the object.
//? -- the advantage of the module pattern is that all motion behaviours can be packaged into a single object that can be used in other parts of your code.
// // --- Example start
// let motionModule = (function () {
//     return {
//         glideMixin: function(obj) {
//             obj.glide = function() {
//                 console.log("Gliding on the water");
//             };
//         },
//         flyMixin: function(obj) {
//             obj.fly = function() {
//                 console.log("Flying, woosh!");
//             };
//         }
//     }
// })();s

// let duck = {
//     name: "Donald"
// };

// motionModule.glideMixin(duck);
// duck.glide();
// // --- Example end

