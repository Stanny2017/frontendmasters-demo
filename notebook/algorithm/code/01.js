// return false  best  O(1)
// return true   (n-1)+(n-2)+...1 = n*(n-1)/2  O(n^2)
function isUnique(arr) {

    for (let i = 1; i < arr.length; i++) {
        for (j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                return false
            }
        }
    }
    return true;
}

// 以空间换时间 using cache ，in js, read property of obj is O(n)
function isUniqueUseCache(arr) {
    let breadcrumbs = {};

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        if (breadcrumbs[key]) {
            return false
        } else {
            breadcrumbs[key] = true;
        }
    }

    return true;
}


// a unique sort arr
function uniqueSort(arr) {
    let breadcrumbs = {};
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        if (!breadcrumbs[key]) {
            uniqueArr.push(key)
            breadcrumbs[key] = true;
        }
    }

    return uniqueArr.sort((a, b) => (a - b));
}

console.log(uniqueSort([0, 2, 3, 11, 2, 1, 0, 3545, 1]))