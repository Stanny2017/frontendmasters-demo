
var addTwoNumbers = function (l1, l2) {

    const num1 = getNumFromListNode(l1) || 0;
    const num2 = getNumFromListNode(l2) || 0;

    return getListNodeFromNum(num1 + num2);
};

function getNumFromListNode(headNode) {
    const temp = [];
    let p = headNode;

    while (p && p.val) {
        temp.push(p.val);
        p = p.next;
    }

    return parseInt(temp.reverse().join(''));
}

function getListNodeFromNum(num) {
    const arr = num.toString().split('').reverse();
    const headNode = new ListNode(arr[0]);
    let p = headNode;

    for (let i = 1; i < arr.length; i++) {
        p.next = new ListNode(arr[i]);
        p = p.next;
    }

    return headNode;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

addTwoNumbers({ val: 0, next: null }, { val: 0, next:null })