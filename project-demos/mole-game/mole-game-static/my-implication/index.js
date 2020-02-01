
const requestAnimationFrame = window.requestAnimationFrame;

function getNode(key) {
    return document.querySelector(`.hole-${key}`);
}

function getTimesGone() {
    return Date.now() + (Math.floor(Math.random() * 10000) + 2000);// [2,10]
}

const moles = [];

const initialTime = Date.now() + 1000;

for (let i = 0; i < 10; i++) {
    moles.push({
        node: getNode(i),
        status: 'fed',
        next: initialTime,
    });
}

function makeMolesMove(mole) {

    switch (mole.status) {

        case 'sad':
        case 'fed':
            mole.status = 'leaving';
            mole.next = Date.now() + 1000;
            mole.node.children[0].src = '../mole-leaving.png';
            break;
        case 'gone':
            mole.status = 'hungry';
            mole.node.children[0].classList.remove('gone');
            mole.node.children[0].src = '../mole-hungry.png';
            mole.node.children[0].classList.add('hungry');
            mole.next = Date.now() + 2000;
            break;
        case 'hungry':
            mole.status = 'sad';
            mole.next = Date.now() + 1000;
            mole.node.children[0].classList.remove('hungry');
            mole.node.children[0].src = '../mole-sad.png';
            break;
        case 'leaving':
            mole.status = 'gone';
            mole.next = getTimesGone();
            mole.node.children[0].classList.add('gone');
            break;

        default:
        // do nothing
    }
}

function feed(e) {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('hungry')) {
        e.target.src = '../mole-fed.png';

        const mole = moles[+e.target.parentNode.dataset.index];
        mole.status = 'fed';
    }
}

document.body.addEventListener('click', feed);

// make moles move  根据 status 改变背景图片 类名 + css 控制消失与出现
const move = () => {

    // change status of each mole
    for (const mole of moles) {
        if (Date.now() > mole.next) {

            makeMolesMove(mole);
        }
    }
    requestAnimationFrame(move);
};

requestAnimationFrame(move);