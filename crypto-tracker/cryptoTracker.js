const wallet = [
    { asset: "BTC", amount: 0.5, buyPrice: 45000 },
    { asset: "ETH", amount: 2.0, buyPrice: 3000 },
];

function calculateTotalInvestment() {
    let total = 0;
    wallet.forEach((coin) => {
        let x = coin.amount * coin.buyPrice;
        total += x;
    });
    return total;
}

function checkProfitOrLoss(currentPrices) {
    wallet.forEach((coin) => {
        let pnl;
        if (currentPrices.hasOwnProperty(coin.asset)) {
            pnl = (currentPrices[coin.asset] - coin.buyPrice) * coin.amount;
        } else {
            pnl = 'Current Price Not Found.';
        }
        console.log('PNL ' + coin.asset + ': ' + pnl);
    });
}

function addAsset(name, amount, price) {
    // 1. check if asset exist or not
    const hasAsset = wallet.some(coin => coin.asset === name);
    // 	2. if true:
    if (hasAsset) {
        //    2.1 insert the targeted asset to a variable
        const coinIndex = wallet.findIndex(coin => coin.asset == name);
        //    2.2 add the old amount to a variable
        let coinAmount = wallet[coinIndex].amount;
        //    2.3 add the old price to a variable
        let coinPrice = wallet[coinIndex].buyPrice;
        //    2.4 calculate the total cost to accumulate the new amount of asset (amount * price) and assign it to a new variable
        const totalCost = (coinAmount * coinPrice) + (amount * price);
        //    2.5 add the new amount to the old amount variable
        coinAmount += amount;
        //    2.6 calculate the avg price and assign to a variable
        const avgPrice = totalCost / coinAmount;

        //    2.7 add the amount and avgprice to the object
        wallet[coinIndex].amount = coinAmount;
        wallet[coinIndex].buyPrice = avgPrice;

        //    2.8 return the object
        return wallet[coinIndex];

        // if false
    } else {
        const newAsset = { asset: name, amount: amount, buyPrice: price };
        wallet.push(newAsset);
        return wallet;
    }
}

// console.log('Total Investment: $' + calculateTotalInvestment());

// const currentPrices = { BTC: 60000, ETH: 2800 };
// checkProfitOrLoss(currentPrices);

console.log(addAsset("SOL", 2, 70));