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
    if (hasAsset) {
        const coinIndex = wallet.findIndex(coin => coin.asset == name);
        let coinAmount = wallet[coinIndex].amount;
        let coinPrice = wallet[coinIndex].buyPrice;

        console.log("Before update: ", wallet[coinIndex]);

        const totalCost = amount * price;

        coinAmount += amount;
        coinPrice += totalCost;

        wallet[coinIndex].amount == coinAmount;
        wallet[coinIndex].buyPrice == coinPrice;

        return wallet[coinIndex];

    } else {
        return false;
    }
    // 2. if true update the amount and price, then return the updated array
    // 3. if false add a new object to the array, then return the array
}

// console.log('Total Investment: $' + calculateTotalInvestment());

// const currentPrices = { BTC: 60000, ETH: 2800 };
// checkProfitOrLoss(currentPrices);

console.log(addAsset("BTC", 2, 50000));