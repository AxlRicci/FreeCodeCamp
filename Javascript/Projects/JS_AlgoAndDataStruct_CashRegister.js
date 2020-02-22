//! Cash Register

function checkCashRegister(price, cash, cid) {
    // creates a clone for cid array
    const cloner = (items) => items.map(item => Array.isArray(item) ? cloner(item) : item);
    let cidClone = cloner(cid).reverse();
    
    // initiate cash denoms
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

    // initiate empty reciept
    let reciept = {
        'status': 'N/A',
        'change': []
    };
    
    //creates a count value for each denomination of $ and adds to CID
    cidClone.forEach((value) => {
        if (counter.hasOwnProperty(value[0])){
            value.push(Math.round(value[1]/counter[value[0]]),counter[value[0]])
        }
    });
    
    // calculate how much change is needed.
    let change = Math.round(100*(cash - price))/100;
    
    // iterate through CID to see if change can be made.
    for (let i = 0; i < cidClone.length; i++){
        let denomCounter = 0;
        if (change - cidClone[i][3] > -0.01){
            while (change - cidClone[i][3] > -0.01) {
                if (cidClone[i][1] == 0){
                    break;
                }
                change -= cidClone[i][3];
                cidClone[i][1] -= cidClone[i][3];
                denomCounter += cidClone[i][3];
            }
            reciept.change.push([cidClone[i][0], Math.round(100*denomCounter)/100]);
        } else {
            continue;
        }
    }
    
    // get total amount available change left 
    let availableFunds = cidClone.reduce((acc, value) => {
        return Math.round(100*(acc + value[1]))/100;
    },0);

    // determine status depending on outcome of CID iteration.
    if (change > 0){ //? if change remains, CID was unable to cover required amount
        reciept.change = [];
        reciept.status = 'INSUFFICIENT_FUNDS';
        return reciept;
    } else if (availableFunds > 0){
        reciept.status = 'OPEN';
        return reciept;
    } else if (availableFunds == 0) {
        reciept.status = 'CLOSED';
        reciept.change = [...cid];
        return reciept;
    } else {
        return "ERROR";
    }
};