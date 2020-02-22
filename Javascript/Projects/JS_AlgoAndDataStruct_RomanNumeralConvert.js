const numerals = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

function convertToRoman(num) {
	// split input number into thousands, hundreds, tens, ones.
	// By converting to string and adding correct number of zeros.
    let numArr = num.toString().split('');
    let zeroArr = [];
    for (let i = 0; i < numArr.length; i++){
        const zero = '0';
        let newNum = numArr[i] + zero.repeat(numArr.length - (i+1));
        if (newNum < 10){
            let remainder = newNum % 5;
        }
        zeroArr.push(parseInt(newNum));
	}
	// reverse number and roman numeral arrays to make it easier to loop through.
	let numeralsRev = numerals.reverse();
	let numbersRev = numbers.reverse();
	let outArr = []; // set empty array to push numerals to.
	// loop through split (input number in proper 1000s, 100s, 10s, 1s format)
	for (let i = 0; i < zeroArr.length; i++){
		let number = zeroArr[i];
		for (let j = 0; j < numbersRev.length; j++){
			if (number - numbersRev[j] >= 0){ // check if number can be subtracted using current number 
				while (number - numbersRev[j] >=0){ // subtract until number is gone or cannot be subtracted by current number anymore.
					number -= numbersRev[j];
					outArr.push(numeralsRev[j]);
				}
			} else {
				continue; // if current number is too large to subtract will move on to next in list.
			}
		}
	}
	return outArr.join('');
};

console.log(convertToRoman(99));




























// console.log(zeroArr);
    // let numeralArr = [];
    // for (let i = 0; i < zeroArr.length; i++){
    //     // filter for 1000s
    //     if (zeroArr[i] >= 1000 && zeroArr[i] < 10000){
    //         const M = 'M';
    //         let out = zeroArr[i] / 1000;
    //         if (out == 4){
    //             numeralArr.push('M' + 'BM');
    //             break;
    //         }
    //         numeralArr.push(M.repeat(out));
    //     };
    //     // filter for 500s
    //     if (zeroArr[i] >= 500 && zeroArr[i] < 1000){
    //         const D = 'D';
    //         let out = zeroArr[i] / 500;
    //         if (out == 4){
    //             numeralArr.push('D' + 'C');
    //             break;
    //         }
    //         numeralArr.push(D.repeat(out));
    //     };
    //     // filter for 100s
    //     if (zeroArr[i] >= 100 && zeroArr[i] < 500){
    //         const C = 'C';
    //         let out = zeroArr[i] / 100;
    //         if (out == 4){
    //             numeralArr.push('C' + 'D');
    //             break;
    //         }
    //         numeralArr.push(C.repeat(out));
    //     };
    //     // filter for 50s
    //     if (zeroArr[i] >= 50 && zeroArr[i] < 100){
    //         const L = 'L';
    //         let out = zeroArr[i] / 50;
    //         if (out == 4){
    //             numeralArr.push('L' + 'X');
    //             break;
    //         }
    //         numeralArr.push(L.repeat(out));
    //     };
    //     // filter for 10s
    //     if (zeroArr[i] >= 10 && zeroArr[i] < 50){
    //         const X = 'X';
    //         let out = zeroArr[i] / 10;
    //         if (out == 4){
    //             numeralArr.push('X' + 'V');
    //             break;
    //         }
    //         numeralArr.push(X.repeat(out));
    //     };
    //     // filter for 5s
    //     if (zeroArr[i] >= 5 && zeroArr[i] < 10){
    //         const V = 'V';
    //         const I = 'I';
    //         let out = zeroArr[i] / 5;
    //         let rem = zeroArr[i] % 5;
    //         if (rem > 0){
    //             numeralArr.push('V' + I.repeat(rem));
    //             break;
    //         }
    //         numeralArr.push(V.repeat(out));
    //     };
    //     // filter for 1s
    //     if (zeroArr[i] >= 1 && zeroArr[i] < 5){
    //         const I = 'I';
    //         let out = zeroArr[i] / 1;
    //         if (out == 4){
    //             numeralArr.push('I' + 'V');
    //             break;
    //         }
    //         if (out == 6){
    //             numeralArr.push('V' + 'I');
    //             break;
    //         }
    //         numeralArr.push(I.repeat(out));
    //     };
       