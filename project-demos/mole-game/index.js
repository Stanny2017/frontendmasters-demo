const MAX_INTERVAL = 10000;
const MIN_INTERVAL = 2000;
const FED_INTERVAL = 1000;
const HUNGRY_INTERVAL = 3000;
const MAX_SCORE = 5;
let score = 0;

const getSadlInterval = () => Date.now() + FED_INTERVAL;
const getHungeryInterval = () => Date.now() + HUNGRY_INTERVAL;
const getGoneInterval = () => Date.now() + (Math.floor(Math.random() * MAX_INTERVAL) + MIN_INTERVAL);// [2,10]

// 对十个 moles 建立关联状态对象，包含: 
// 1. 节点引用 2. 当前状态 3. 下一次状态改变的时间间隔
const moles = [];
for (let i = 0; i < 10; i++) {
    moles.push({
        node: document.querySelector(`.hole-${i}`),
        status: 'fed',
        next: getSadlInterval(),
    });
}

const getNextStatus = (mole) => {
    switch (mole.status) {
        case 'sad':
        case 'fed':
            mole.status = 'leaving';
            mole.next = getSadlInterval();
            mole.node.children[0].src = './asserts/mole-leaving.png';
            break;
        case 'gone':
            mole.status = 'hungry';
            mole.node.children[0].classList.remove('gone');
            mole.node.children[0].src = './asserts/mole-hungry.png';
            mole.node.children[0].classList.add('hungry');
            mole.next = getHungeryInterval();
            break;
        case 'hungry':
            mole.status = 'sad';
            mole.next = getSadlInterval();
            mole.node.children[0].classList.remove('hungry');
            mole.node.children[0].src = './asserts/mole-sad.png';
            break;
        case 'leaving':
            mole.status = 'gone';
            mole.next = getGoneInterval();
            mole.node.children[0].classList.add('gone');
            break;
        default:
        // do nothing
    }
};

const nextFrame = () => {
    for (const mole of moles) {
        if (Date.now() > mole.next) {
            getNextStatus(mole);
        }
    }
    window.requestAnimationFrame(nextFrame);
};
window.requestAnimationFrame(nextFrame);

const win = () => {
    document.querySelector('.app-wrapper').classList.add('hide');
    document.querySelector('.win-wrapper').classList.add('show');
};

const feed = (e) => {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('hungry')) {
        e.target.src = './asserts/mole-fed.png';
        const mole = moles[+e.target.dataset.index];
        mole.status = 'fed';

        score++;
        document.querySelector('.score-container').style.width = ` ${score / MAX_SCORE * 100}%`;
        if (score >= MAX_SCORE) {
            win();
        }
    }
};
document.body.addEventListener('click', feed);