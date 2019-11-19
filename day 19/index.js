const money = 9;

const pumpkinSpice = money => {

    const pumpkinAmt = [0,0,0,0];
    // where index 0 is pie, 1 is latte, 2 is macaron, and 3 is grams of pumpkin

    while (money >= 5) {
        pumpkinAmt[0]++;
        pumpkinAmt[3] += 30;
        money -= 5;
    }

    while (money >= 3) {
        pumpkinAmt[1]++;
        pumpkinAmt[3] +=15;
        money -= 3;
    }

    while (money >= 1) {
        pumpkinAmt[2]++;
        pumpkinAmt[3] += 3;
        money -= 1;
    }

    return pumpkinAmt;

    // or we could complete the function using math, but the hint suggested we use a whileLoop
    // var canBuy = [0,0,0,0];
  
    // var pie = Math.floor(money / 5);
    // var latte = Math.floor((money - (5*pie)) / 3);
    // var macaron = Math.floor((money - (5*pie) - (3*latte)));
    // var grams = 30*pie + 15*latte + 3*macaron;
    
    // canBuy[0] = pie;
    // canBuy[1] = latte;
    // canBuy[2] = macaron;
    // canBuy[3] = grams;
    
    // return canBuy;
}

