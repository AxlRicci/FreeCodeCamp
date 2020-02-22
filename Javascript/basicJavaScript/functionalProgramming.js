//! Functional Programming
//? - An approach to software development based around the evaluation of functions.
//? - Breaks a program into small testable parts
//? - Functional programming core principles:
//? 1. Functions are independent from the state of the program or global variables.
//? -- They only depend on arguments passed into them to make a calculation.
//? 2. Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data.
//? 3. Functions have minimal side effects in the program.


//! More about Functional Programming
//? 1. Isolated functions - there is no dependance on the state of the program, which includes global variables that are subject to change.
//? 2. Pure functions - the same input always gives the same output.
//? 3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled.

//! Terminology
//? - Callbacks: functions that are passed into another function to diceide the invocation of that other function.
//? - First class functions: Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value.
//? - Higher order functions: Functions that take a function as an argument or return a function as a return value.
//? - Lambda: When functions are passed into another function or returned from another function.

//! Side effects
//? - When a small piece of code (i.e method) is wrong, it can ruin the entire program and make it hard to debug.
//* - Avoid mutations (changing the original value/list), instead copying and modifying the new variable. A mutation is a side effect.

//! Dependancies
//? - Always declare dependancies explicitly. If a function depends on a variable, pass it in as a argument.
//? - This makes functions that are easier to test, you know exactly what input it takes, and the function will not depend on anything else in your program.
//? - Additionally, the function will always produce the same output with the same inputs (as external variables (that may be unknowingly changed)) are not used.

//! Callback functions
//? - functions that are called as arguments in other functions. 
//? - This allows functions to be passed into other functions to change a functions output.
// // -- Example Start
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback){
//   var newArray = [];
//   this.forEach(item => newArray.push(callback(item)));
//   return newArray;
// };

// var new_s = s.myMap(function(item){
//   return item * 2;
// });
// console.log(new_s);
// // -- Example End

//! Map()
//? - A pure function that is useful when working with arrays.
//? - It does not alter the orginal array (as long as the callback function doesn't)
//* - When callback is used it passes three arguments (the current element, the index of that element, the array upon which the map method was called)
// // -- Example Start
// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
//   ];

// // the variable names has been assigned to a function that iterates through all users in the list
// // and outputs their names. Therefore, names is an array of the user's names. 
// const names = users.map(user => user.name);
// console.log(names); // ["John", "Amy", "CamperCat"]
// // -- Example end

//! Filter()
//? - Filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true.
//? - Basically, it filters an array based on the function passed to it.
// // -- example start
// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
//   ];

// const usersUnder30 = users.filter(user => user.age < 30);
// console.log(usersUnder30);
// // -- example end

//! slice()
//? - returns a copy of certain elements of an array.
//? - takes two arguments (start index, end index). the start index is inclusive while the end is exclusive.
//? - When following functional programming principles, it is better to use .slice() to remove elements from an array 
//? -- as it makes a copy of the array rather than the .splice() method.
// // -- Example Start
// var arr = ["Cat", "Dog", "Tiger", "Zebra"];
// var newArray = arr.slice(1,3);
// console.log(newArray); // ["Dog", "Tiger"]
// // -- Example end

//! concat()
//? - joins items (strings/arrays)
//* - Can be used to add items to the end of an array instead of .push() (better practice for functional programming)
// // -- Example start
// let array1 = [1,2,3];
// let array2 = [4,5,6];
// console.log(array1.concat(array2)); // [1,2,3,4,5,6]
// // -- Example end

//! reduce()
//? - The most general of all array operations in JS. almost all array processing problems can be solved using reduce
//? - Reduce iterates over each item in an array and returns a single value (string, number, object, array) using a callback function called on each iteration.
//? - **An inital value for the accumulator can be added in addition to the callback function.
//? - the callback function accepts 4 arguments:
//? 1. Accumulator - the return value of the callback function from the previous iteration
//? 2. Current element being processed
//? 3. Index of the current element
//? 4. Array on which reduce was called
//? - **An inital value for the accumulator can be added in addition to the callback function.
// // -- Example start
// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
//   ];
// // shows how the accumulator can be used to calculate values. 
// const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
// console.log(sumOfAges);

// //shows how reduce can create a new object using values from another object.
// const usersObj = users.reduce((obj, user) => {
//     obj[user.name] = user.age;
//     return obj;
// }, {});
// console.log(usersObj);
// // -- Example end

//! sort()
//? - as the sort function's default sorting method is by string unicode, it may return unexpected results.
//? - use a callback function (or compare function) as the elements are sorted according to the return value of the function.
//* - if compareFunction(a,b) returns less than 0 for two elements a and b, then a will come before b.
//* - if compareFunction(a,b) returns greater than 0 for two elements a and b, then b will come before a.
//* - if compareFunction(a,b) returns 0 for two elements a and b, then a and b will remain unchanged.
// // -- Example start
// function ascendingOrder(arr) {
//     return arr.sort(function(a,b){
//         return a - b;
//     });
// }
// console.log(ascendingOrder([1,5,2,3,4])); // returns [1,2,3,4,5]

// function reverseAlpha(arr) {
//     return arr.sort(function(a,b){
//         return a === b ? 0 : a < b ? 1 : -1;
//     });
// }
// console.log(reverseAlpha(['l', 'h', 'z', 'b', 's'])); // returns ['z', 's', 'l', 'h', 'b']
// // -- Example End

//! split()
//? - splits a string into an array of strings
//? - takes one argument == a delimiter or a regular expression (used to break up the string)
// // -- Example start
// let str = "Hello World";
// let bySpace = str.split(" "); // returns ["hello", "world"]

// let otherString = "How9are7your2today";
// let byDigits = otherString.split(/\d/); // returns ["How", "are", "you", "today"]
// // -- Example end

//! join()
//? - used to join the elements of an array together to create a string
//? - takes one argument == a delimiter that is used to separate the array elements.
// // -- Example Start
// var arr = ["Hello", "World"];
// var str = arr.join(" ");
// // Sets str to "Hello World"
// //-- Example End

//! every()
//? - checks if every element in an array passes a particular test. 
//? - returns a boolean if all the values meet (or don't) the criteria
// // -- Example start
// let numbers = [1,5,8,0,10,11];
// numbers.every(function(currentValue){
//     return currentValue < 10; // returns false
// });
// //-- Example end

//! some()
//? - checks if any element in an array passes a particular test.
//? - returns a true if one of the values meets the criteria, false if none do.
// // -- Example start
// var numbers = [10, 50, 8, 220, 110, 11];
// numbers.some(function(currentValue) {
//   return currentValue < 10;
// });
// // Returns true
// // -- Example end

//! Currying and Partial Application
//? - arity of a function is the number of arguments it requires.
//? - currying a function means to convert a function to N arity into N functions of arity 1.
//* - in other words... Restructures a function so it takes one argument, then returns another function that takes the next arguement and so on.
// // -- Example Start
// //Un-curried function
// function unCurried(x, y) {
//     return x + y;
//   }
  
//   //Curried function
//   function curried(x) {
//     return function(y) {
//       return x + y;
//     }
//   }
//   //Alternative using ES6
//   const curried = x => y => x + y
  
//   curried(1)(2) // Returns 3

// // -- Example End










