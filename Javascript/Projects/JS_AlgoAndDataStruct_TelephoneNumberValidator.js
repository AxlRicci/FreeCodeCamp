//!Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.
// ** can only be digits, brackts, hyphens.
// 1. is it 10 - 11 digits long
// 2. can use () or -
// 3. when 11 digits a single 1 has to be first
// 4. if brackets are used they must be first and only contain 3 digits
// 5. if hashes are used they must be surrounded by numbers on both sides 

function telephoneCheck(str) {
    let basicCheck = /^[0-9]{3}[ -]*[0-9]{3}[ -]*[0-9]{4}$/;
    let bracketCheck = /^[\(]+[0-9]{3}[\)]+[ ]*[0-9]{3}[ -]+[0-9]{4}/;
    let countryCheck = /^[1]+[ ]*[\()]+[0-9]{3}[\) ]+[ -]*[0-9]{3}[ -]*[0-9]{4}|^[1]+[ ]+[0-9]{3}[ -]*[0-9]{3}[ -]*[0-9]{4}/;
    if (basicCheck.test(str)){
        return true;
    } else if(bracketCheck.test(str)) {
        return true;
    } else if(countryCheck.test(str)) {
        return true;
    } else {
        return false;
    }
  }
  
  telephoneCheck("1 555)555-5555");
  