// function largestOfFour(arr) {
//   let outArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let highest = -9999999999999999999999999999999999999;
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > highest) {
//         highest = arr[i][j];
//       }
//     }
//     outArr.push(highest);
//   }
//   return outArr;
// }

// function confirmEnding(str, target) {
//   let targetLength = target.length;
//   let indexEnd = str.length;
//   let indexStart = indexEnd - targetLength;
//   console.log(indexStart,indexEnd,targetLength);
//   if (str.substring(indexStart,indexEnd) == target) {
//     console.log(str.substring(indexStart,indexEnd));
//     return true;
//   } else {
//     console.log(str.substring(indexStart,indexEnd));
//     return false;
//   }
// }

// function repeatStringNumTimes(str, num) {
//   let outStr = "";
//   for (let i = 0; i < num; i++) {
//     outStr += str;
//   }
//   return outStr;
// }

