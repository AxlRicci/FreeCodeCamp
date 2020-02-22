function rot13(str) {
    let strLength = str.length;
    let charArr = [];
    let regex = RegExp(/[\W]/);
    for (let i = 0; i < str.length; i++){
        let keycode = str.charCodeAt(i);
        if (regex.test(str.charAt(i))){
            charArr.push(str.charAt(i));
        } else if (keycode + 13 > 90) {
           let newCode = 65 + (12 - (90-keycode))
           charArr.push(String.fromCharCode(newCode));
        } else {
            charArr.push(String.fromCharCode(keycode+13))
        }
    }
    return charArr.join('');
  }
  

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
  