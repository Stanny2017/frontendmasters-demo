// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to the amount, n.
let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange = (value) => {  
    if (value === 0) return 0;  // base case to return
    let minCoins;
    coins.forEach((coin, i) => {
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin);  // recursive case to get closer to base case 
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1; // return where appropriate
};

makeChange(10);


const coins = [10, 6, 1]

function _makeChange(curCoin) {

    if (curCoin === 0) return 0;
    let minCoins = -1;
    coins.forEach(coin => {
        if (curCoin - coins > 0) {
            let res = makeChange(curCoin - coin);
            if (res < minCoins) {
                minCoins = res;
            }
        }
    })

    return minCoins + 1
}