// 
const coins = [5, 10, 25]

function makeChange(_money) {
    let money = _money;

    let sortedCoins = coins.sort((a, b) => b - a);
    let count = 0;

    let i = 0

    while (money > 0) {
        if (money > sortedCoins[i]) {
            money -= sortedCoins[i];
            count++;
        } else {
            i++;
        }
    }
}

return count;


