var mergeTwoLists = function (l1, l2) {
    let head = new ListNode('head')
    let p = head.next;

    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val < l2.val) {
                p = new ListNode(l1.val)
                l1 = l1.next;

            } else {
                p = new ListNode(l2.val)
                l2 = l2.next;
            }

            p = p.next;
        } else if (l1 && !l2) {

            p = new ListNode(l1.val)
            l1 = l1.next;
            p = p.next;

        } else if (l2 && !l1) {
            p = new ListNode(l2.val)
            l2 = l2.next;
            p = p.next;

        }
    }

    return head.next;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const l1 = new ListNode(1, { val: 2, next: null });
const l2 = new ListNode(2, { val: 4, next: null });

mergeTwoLists(l1, l2)



function binarySearch(arr, target) {

    let max = arr.length - 1;
    let min = 0;
    let guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);

        if (arr[guess] === target) {
            return guess;
        } else if (arr[guess] < target) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1,3,4,5100,10000],10000))