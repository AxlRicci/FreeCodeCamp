// Palindrome Checker!!


function palindrome(str) {
    let regex = /([\W_])/g;
    let newStr = str.replace(regex,'');
    let strArr = newStr.toLowerCase().split('');
    let revArr = [];
    strArr.forEach((value,index,array)=>{
        revArr.unshift(value);
    })
    let compStr = strArr.join('');
    let compRevStr = revArr.join('');
    if (compStr == compRevStr){
        return true;
    } else {
        return false;
    }
  }
  
  

console.log(palindrome("eye"),"// true");
console.log(palindrome("_eye"),"// true");
console.log(palindrome("race car"),"// true");
console.log(palindrome("not a palindrome"), "// false");
console.log(palindrome("A man, a plan, a canal. Panama"),'// true');
console.log(palindrome("never odd or even"), '// true');
console.log(palindrome("nope"),'// false');
console.log(palindrome("almostomla"),'// false');
console.log(palindrome("My age is 0, 0 si ega ym."),'// true');
console.log(palindrome("1 eye for of 1 eye."), '// false');
console.log(palindrome("0_0 (: /-\ :) 0-0"), '//true');
console.log(palindrome("five|\_/|four"), '// false');

