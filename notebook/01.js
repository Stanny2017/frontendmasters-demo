
const map = {
    '{': '}',
    '[': ']',
    '(': ')'
}

var isValid = function (s) {
    if (!s.length) return true
    if (s.length % 2 !== 0) return false

    const arr = s.split('');
    return fn(arr, 1)

    function fn(arr, i) {
        if (!arr.length) return true
        if (i >= arr.length) return false

        let left = arr[i - 1];
        let right = arr[i];

        if (map[left] === right) {
            // 可以消除
            arr.splice(i - 1, 2);
            fn(arr, i - 1)
        } else {
            return fn(arr, i + 1)
        }
    }

};
console.log(isValid("()"))
