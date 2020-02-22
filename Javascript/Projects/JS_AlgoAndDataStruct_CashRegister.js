//! Cash Register

function checkCashRegister(price, cash, cid) {
    // creates a clone for cid array.
    const cloner = (items) => items.map(item => Array.isArray(item) ? cloner(item) : item);
    let cidClone = cloner(cid); // new cid clone.
    let counter = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.1,
        'QUARTER': 0.25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100
    };
    // creates a count value for each denomination of $ and adds to CID
    cidClone.forEach((value) => {
        if (counter.hasOwnProperty(value[0])){
            value.push(Math.round(value[1]/counter[value[0]]),counter[value[0]])
        } else {
            console.log('No Property');
        }
    });
    // get total amount of cid
    let availableFunds = cidClone.reduce((acc, value) => {
        return Math.round(100*(acc + value[1]))/100;
       
    },0);
    console.log(availableFunds);
    // calculate how much change is needed.
    let change = Math.round(100*(cash - price))/100;

    // A reversed array of CID to create a filter.
    let cidRev = cidClone.reverse();
    console.log(cidRev);
    // iterate through available funds to see if change can be made with CID.
    let availCoins = cidClone.filter((value)=>{
        if (value[1] > 0){
            return value[1];
        }
    })
    console.log(availCoins);
    let count = 0;
    for (let i = 0; i < availCoins.length; i++){
        if (availCoins[3] > change){
            continue;
        } else {
            for (let j = 0; j < availCoins[2]; j++){
                if(count + availCoins[i][3] > change){
                    break;
                }
                count += availCoins[i][3];
            }
        }
    }

    if (change > availableFunds){ //TODO: needs to filter for availability of change.
        return {'status': 'INSUFFICIENT_FUNDS', change: []}; // throw status of INSUFFICIENT FUNDS if CID < change needed.
    } 
    
    if (change == availableFunds){
        return {'status': 'CLOSED', change: [...cid]}; // throw status of CLOSED if CID == change needed.
    } else {
        let reciept = {'status': 'OPEN', 'change': []};
        
		for (let i = 0; i < cidRev.length; i++){
            let denomCounter = 0;
			if (change - cidRev[i][3] > -0.01){ // check if number can be subtracted using current number 
				while (change - cidRev[i][3] > -0.01){ // subtract until number is gone or cannot be subtracted by current number anymore.
                    if (cidRev[i][1] == 0){ // if the amount of 
                        break;
                    }
                    change -= cidRev[i][3];
                    cidRev[i][1] -= cidRev[i][3];
                    denomCounter += cidRev[i][3];
				}
                reciept.change.push([cidRev[i][0],denomCounter]); 
			} else {
				continue; // if current number is too large to subtract will move on to next in list.
			}
        }
        return reciept;
    }
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));