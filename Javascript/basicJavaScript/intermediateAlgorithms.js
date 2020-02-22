//! Sum all numbers in a range
// function sumAll(arr) {
    
//     let workingArr = [];
//     arr.sort(function(a,b){
//         return a - b;
//     });
//     let count = arr[0];
//     for (let i = arr[0]; i <= arr[1];i++){
//         workingArr.push(count);
//         //console.log(workingArr);
//         if (count == arr[1]) {
//             return workingArr.reduce((acc,elem,ind,arr) => acc + elem,0)
//         } else {
//             count += 1;
//         }
//     }
//   }
  
// console.log(sumAll([5, 10]));

//! Diff two arrays
// 
// loop through combined list
// check if the value exists in the list
// if it does delete the current index value and the value at the indexOf.
// return list of (hopefully) unique values

// function diffArray(arr1, arr2) {
//     let newArr = [];
//     let fullArr = arr1.concat(arr2);
//     console.log(fullArr);
//     for (let i = 0; i < fullArr.length; i++) {
//       if (arr1.includes(fullArr[i]) && arr2.includes(fullArr[i])) {
//           console.log("both here!")
//       } else {
//         newArr.push(fullArr[i]);
//       }
//   }
//   return newArr;
// }

//! Destrpyer
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// function destroyer(arr) {
//     let workArr = arguments[0];
//     let argArr = [];
//     for (let i = 1; i < arguments.length; i++){
//       argArr.push(arguments[i]);
//     }
//     for (let i = 0; i < argArr.length; i++){
//       for (let j = 0; j < workArr.length; j++){
//         if (argArr[i] == workArr[j]){
//           workArr.splice(j,1);
//           j -= 1;
//         }
//       }   
//     }
//     return workArr;
//   }
  
//   destroyer([3, 5, 1, 2, 2], 2, 3, 5);

//!
// loop through objects
// if the key in arg2 matches any key in collection
// check to see if the value matches as well
// if it does, add the full object to arr


// function whatIsInAName(collection, source) {
//     // What's in a name?
//     var arr = [];
//     // Only change code below this line
//     for (let i = 0; i < collection.length; i++) {
//       let colKeys = Object.keys(collection[i]);
//       let sourceKeys = Object.keys(source);
//       //console.log(colKeys);
//       //console.log(sourceKeys);
//       if (sourceKeys.every(v => colKeys.includes(v) && source[v] == collection[i][v])) {
//         arr.push(collection[i]);
//       } else {
//         console.log("False");
//       }
//     }
//     // Only change code above this line
//     return arr;
//   }
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

// //! Spinal Tap Case
// // Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// function spinalCase(str) {
//   let spineString = str.split(/[_]|(?=[A-Z])|[\s]|[-]/);
//   console.log(spineString);
//   spineString.forEach((v,i,a) => {
//     if (v == ' ' | v == '_' | v == '-') {
//       spineString.splice(i,1);
//     }
//   })
//   let newString = spineString.join('-').toLowerCase();
//   return newString;
// }

// console.log(spinalCase('This_Is_Spinal_Tap'));

// //! search and replace
// // Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// function myReplace(str, before, after) {
//     let strArr = str.split(' ');
//     let repIndex = strArr.indexOf(before);
//     if (strArr[repIndex].charAt(0) === strArr[repIndex].charAt(0).toUpperCase()){
//         let capAfter = after.charAt(0).toUpperCase();
//         let restAfter = after.slice(1);
//         let fullAfter = capAfter.concat(restAfter);
//         strArr[repIndex] = fullAfter;
//     } else {
//         strArr[repIndex] = after;
//     }
//     let outStr = strArr.join(' ');
//     return outStr;
//   }
  
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//! DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//? Tried the for.. of loop and FCC did not recognize. Needed to return to classic for loop.
// function pairElement(str) {
//     let arrDNA = [];
//     let initDNA = str.split('');
//     for (let i = 0; i < initDNA.length; i++) {
//         switch(initDNA[i]) {
//             case initDNA[i] = 'A':
//                 arrDNA.push([initDNA[i],"T"]);
//                 break;
//             case initDNA[i] = 'T':
//                 arrDNA.push([initDNA[i], "A"]);
//                 break;
//             case initDNA[i] = 'G':
//                 arrDNA.push([initDNA[i], "C"]);
//                 break;
//             case initDNA[i] = 'C':
//                 arrDNA.push([initDNA[i], "G"]);
//                 break;
//             default:
//                 console.log("ERROR: No match");
//         }
//     }
//     console.log(arrDNA);
//     return arrDNA;
//   }
  
//   pairElement("CTCTA");

//! Missing Letters
// Find the missing letter in the passed letter range and return it.

// function fearNotLetter(str) {
//     const alpha = "abcdefghijklmnopqrstuvwxyz";
//     const alphaArr = alpha.split('');
//     let strArr = str.split('');
//     let startPoint = alphaArr.indexOf(strArr[0]);
//     let count = -1;
//     console.log(startPoint);
//     for (let i = startPoint; i < strArr.length + startPoint; i++){
//         count += 1;
//         console.log(alphaArr[i],": ",strArr[count]);
//         if (alphaArr[i] != strArr[count]){
//             console.log("found it: ", alphaArr[i]);
//             return alphaArr[i];
//         } else if (count == strArr.length + 1) {
//             console.log("nothing missing");
//             return undefined;
//         }
//     }
//   }
  
//   fearNotLetter("abcdefghijklmnopqrstuvwxyz");

//! Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// function uniteUnique(arr) {
//     const distinct = (value, index, self) => {
//         return self.indexOf(value) === index;
//     }
//     let emptyArr = [];
//     for (let i = 0; i < arguments.length; i++){
//         arguments[i].forEach((value,index,array) => {
//             emptyArr.push(value);
//         });
//     };
//     const finalArray = emptyArr.filter(distinct);
//     return finalArray;
//   }
  
//   uniteUnique([1, 2, 3], [5, 2, 1]);

//! Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// function convertHTML(str) {
//     let strArr = str.split('')
//     for (let i = 0; i <= strArr.length; i++) {
//         switch (strArr[i]) {
//             case '&':
//                 strArr[i] = '&amp;';
//                 break;
//             case '<':
//                 strArr[i] = '&lt;';
//                 break;
//             case '>':
//                 strArr[i] = '&gt;';
//                 break;
//             case '"':
//                 strArr[i] = '&quot;';
//                 break;
//             case '\'':
//                 strArr[i] = '&apos;';
//                 break;
//             default:
//                 break;
//         }
//     }
//     return strArr.join('');
//   }
  
//   convertHTML("abc");

//! sum all odd fibonacci numbers
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// function sumFibs(num) {
//     let fibArray = [1,1];
//     let oddArray = [];
//     for (let i = 1; fibArray[i] <= num; i++ ){
//         let current = fibArray[i] + fibArray[i-1];
//         if (current <= num){
//             fibArray.push(current);
//         };
//     };
//     fibArray.forEach((v) => {
//         if (v % 2 ==! 0) {
//             oddArray.push(v);
//         };
//     });
//     let sum = oddArray.reduce((acc,val) => {
//         return val + acc;
//     });
//     return sum;
//   };
  
//   sumFibs(75025);

//! sum all primes
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// function sumPrimes(num) {
//     let primeArr = [];
//     for (let i = 1; i <= num; i++){
//         let divCount = 0;
//         for (let j = 1; j <= i; j++){
//             if (i % j === 0){
//                 divCount += 1;
//             }
//         }; 
//         if (divCount == 2) {
//             primeArr.push(i);
//         };
//     }
//     let sum = primeArr.reduce((acc,val) => {
//         return acc + val;
//     });
//     return sum;
//   }
  
//   sumPrimes(10);

//! Smallest common multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// function smallestCommons(arr) {
//     let workingArr = [];
//     arr.sort((a,b) => {
//         return a - b;
//     });
//     for (let i = arr[0]; i <= arr[1]; i++){
//         workingArr.push(i);
//     }
//     let divCount = 0;
//     for (let currentNum = 1; divCount < workingArr.length; currentNum++){
//         divCount = 0;
//         for (let i = 0; i < workingArr.length; i++) {
//             if (currentNum % workingArr[i] === 0){
//                 divCount += 1;
//             }
//             if (divCount == workingArr.length){
//                 return currentNum;
//             }
//         }
//     }
//   };
  
//   smallestCommons([23,18]);

//! Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// function dropElements(arr, func) {
//     let outArr = [];
//     for (let i = 0; i < arr.length; i++){
//         if (func(arr[i])){
//             outArr = arr.slice(i);
//             return outArr;
//         };
//     };
//     return outArr;
//   };
  
//   console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5; }));

//! Steamroller <-- STUDY THIS MORE!
// Flatten a nested array. You must account for varying levels of nesting.

// function steamrollArray(arr) {
//     return arr.reduce((explored, toExplore) => {
//         return explored.concat (
//             Array.isArray(toExplore)
//             ? steamrollArray(toExplore)
//             : toExplore
//         );
//     }, []);
//   }

// console.log(steamrollArray([1, [2], [3, [[4]]]]));

//! Binary agents
// Return an English translated sentence of the passed binary string.

// function binaryAgent(str) {
//     let strArr = str.split(' ');
//     return strArr.map((b) => {
//         let parsed = parseInt(b, 2);
//         return String.fromCharCode(parsed);
//     }).join('');
//   }
  
// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

//! Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//? Can also use the .every method.

// function truthCheck(collection, pre) {
//     let trueCount = 0;
//     for (let i = 0; i < collection.length; i++){
//         if (collection[i].hasOwnProperty(pre) && collection[i][pre] ? trueCount += 1 : console.log("missing or false"));
//     }
//     console.log(trueCount);
//     if (trueCount == collection.length){
//         return true;
//     } else {
//         return false;
//     }
//   }

// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));

//! Arguments optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//? solution throws an error but passes the FCC test

// function addTogether(a) {
//     if (arguments.length > 1){
//         if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])){
//             return arguments[0] + arguments[1];
//         } else {
//             return undefined;
//         }
//     }
//     if (Number.isInteger(a)){
//         console.log("ima number");
//         let funB = function(b) {
//             if (Number.isInteger(b)){
//                 return a + b
//             } else {
//                 return undefined;
//             }
//          }
//          return funB;
//     }
//     console.log("Ima letter");
//     return undefined;
//   }
            


// console.log(addTogether("2")(3));

//! Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// function orbitalPeriod(arr) {
//     var GM = 398600.4418;
//     var earthRadius = 6367.4447;
//     for (let i = 0; i < arr.length; i++){
//         let period = Math.round((2 * Math.PI) * Math.sqrt(Math.pow((arr[i].avgAlt + earthRadius),3)/GM));
//         arr[i].orbitalPeriod = period;
//         delete arr[i].avgAlt;
//     }
//     return arr;
//   }

// console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));

