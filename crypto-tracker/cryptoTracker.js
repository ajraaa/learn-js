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

console.log('Total Investment: $' + calculateTotalInvestment());

const currentPrices = { BTC: 60000, ETH: 2800 };
checkProfitOrLoss(currentPrices);