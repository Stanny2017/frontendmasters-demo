function addTwoNumbers(l1, l2) {
    let a1 = l1, a2 = l2;

    let v = 0;// 进位数

    let head = new ListNode('head')
    let p = head;

    while (a1 || a2) {
        let v1 = a1.val || 0;
        let v2 = a2.val || 0;
        let n = v1 + v2 + v;

        v = parseInt(n / 10);
        n = n % 10;

        p.next = new ListNode(n);
        p = p.next;

        a1 = a1 && a1.next;
        a2 = a2 && a2.next;
    }

    return head.next;
}

// [2,4,3]
// [5,6,4]
const l1 = getListNodeFromArray([2, 4, 3])
const l2 = getListNodeFromArray([5, 6, 4])

addTwoNumbers(l1, l2)

function getListNodeFromArray(arr) {
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
