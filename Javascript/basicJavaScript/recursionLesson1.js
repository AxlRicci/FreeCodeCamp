function sum(arr, n) {
    // Only change code below this line
    console.log(n + "count")
    if (n <= 0 ) {
        //console.log(arr[0] + ' stage 1 exit');
        return arr[0];
    } else {
        //console.log(sum(arr, n-1) + arr[n] + "blue");
        return sum(arr, n-1) + arr[n];
    }
    // Only change code above this line
  }

let testArr = [2,3,4];

console.log(sum(testArr, 1));