
const screen = document.querySelector('.screen')
let screenResult = '0';
let prevOperate = null;
let operateResult = 0;

init();

function init() {
    // addEventListener 绑定 父 div 事件代理 
    document
        .querySelector('.calc-buttons')
        .addEventListener('click', function (event) {
            const clickedButton = event.target;  // event.currentTarget is the .calc-buttons section
            handleButtonClick(clickedButton.innerText);
        });
}

function handleButtonClick(value) {
    if (isNaN(value)) {
        // not a number
        handleSymbol(value);
    } else {
        // is number
        handleNumber(value);
    }

    screen.innerText = screenResult;
}

function handleSymbol(symbol) {

    switch (symbol) {
        case 'C':
            screenResult = '0';
            break;
        case '←':
            handleBack();
            break;
        case '=':
            flushOperation();
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleOperate(symbol);
            break;
        default:
        // do nothing
    }
}

function handleOperate(symbol) {
    operateResult = parseInt(screen.innerText);
    prevOperate = symbol;
    screenResult = '0';
}

function flushOperation() {
    if (!prevOperate) return;

    const currNumber = parseInt(screen.innerText);
    switch (prevOperate) {
        case '+':
            operateResult += currNumber;
            break;
        case '−':
            operateResult -= currNumber;
            break;
        case '×':
            operateResult *= currNumber;
            break;
        case '÷':
            operateResult /= currNumber;
            break;
        default:
        //do nothing
    }

    prevOperate = null;
    screenResult = operateResult.toString();
}

function handleBack() {
    const v = screen.innerText;
    if (v.length === 1) {
        screenResult = '0';
    } else {
        screenResult = v.substring(0, v.length - 1);
    }
}

function handleNumber(stringNumber) {

    if (screenResult === '0') {
        screenResult = stringNumber;
    } else {
        screenResult += stringNumber;
    }
}
