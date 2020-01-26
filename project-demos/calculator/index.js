
const buttons = document.getElementsByClassName('calc-button');

for (const button of buttons) {
    button.addEventListener('click', function (e) {
        const val = e.target.innerText;
        console.log(val);

        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const operates = ['+', '−', '×', '÷'];
        let result = document.querySelector('.screen').innerText;
        if (result === '0') result = '';

        if (numbers.includes(val) || operates.includes(val)) {
            result += val;
            document.querySelector('.screen').innerText = result;
        }

        if (val === '=') {
            console.log(result)
            document.querySelector('.screen').innerText = getResult(result);
        }

        if (val === 'C') {
            document.querySelector('.screen').innerText = '0';
        }

        if (val === '←') {
            result = result.slice(0, result.length - 1);
            if (result === '') result = 0;

            document.querySelector('.screen').innerText = result;
        }
    });
}


function getResult(operates) {

    let result = '';
    let operatesNum;

    if (operates.includes('+')) {
        operatesNum = operates.split('+');
        result = parseInt(operatesNum[0]) + parseInt(operatesNum[1]);
    } else if (operates.includes('-')) {
        operatesNum = operates.split('+');
        result = parseInt(operatesNum[0]) - parseInt(operatesNum[1]);
    } else if (operates.includes('×')) {
        operatesNum = operates.split('×');
        result = parseInt(operatesNum[0]) * parseInt(operatesNum[1]);
    } else if (operates.includes('÷')) {
        operatesNum = operates.split('÷');
        result = parseInt(operatesNum[0]) / parseInt(operatesNum[1]);
    }

    return result;
}