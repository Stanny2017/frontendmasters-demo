# [Algorithm with javascript](https://frontendmasters.com/courses/practical-algorithms/)

## conception

1. time complexity:the number of operations that are being excuted
2. space complexity: how much space are we taking up in memory 
3. memoization: one type of cache, if you caching the result of a function, we call that memoization. 
4. recursion: you have to return somewhere.(note how we get loops out,`return recurFunc()`)

## some cases
 
1. doing `shift()` or `unshift()` of array is `O(n)` in TC(time complexity);
## recursion steps

4 steps to write a recursion:

1. Identify base cases.
2. Identify recursive case.
3. Return where appropriate.
4. Write your procedures for each recursion to get closer to base cases.

Recursion can always be implemented as a loop,but in some situations, it's easier to use recursion.


## divide and conquer

1. binary search

```js
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

```

2. merge sort

```js


// Split the array into halves and merge them recursively 
function mergeSort(arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
```

3. bubble sort 

```js

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// basic implementation
function bubbleSortBasic(array) {
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;

    for (var i = 0; i < array.length; i++) {
        countOuter++;
        for (var j = 1; j < array.length; j++) {
            countInner++;
            if (array[j - 1] > array[j]) {
                countSwap++;
                swap(array, j - 1, j);
            }
        }
    }

    return array;
}


// optimized version
function bubbleSort(array) {
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;

    var swapped;
    do {
        countOuter++;
        swapped = false;
        for (var i = 0; i < array.length; i++) {
            countInner++;
            if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
                countSwap++;
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}
```

## greedy algorithm

always make the locally optimal choice!

```js
const coins = [5, 10, 25]

// given a money number, you need to make change with coins in least number
function makeChange(_money) {
    let money = _money;
    let sortedCoins = coins.sort((a, b) => b - a);
    let count = 0;
    let i = 0；

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
```

## brute force

but what if [10, 6, 1]? greedy may not be correct, maybe we need to loop every solution and then memorize the best solution;

```js
const coins = [10, 6, 1];

const makeChange = (value) => {  
    if (value === 0) return 0;  // base case to return
    let minCoins;
    coins.forEach((coin, i) => {
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin);  // recursive case to get closer to base case 
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1; // return where appropriate
};
```

## dynamic programing
(cache values to avoid repeated calculations)
if you have a solution that you can cache, that's dynamic programmig;

there is a couple of ways you can cache your solutions.

1. top-down
2. bottom-up

also the makeChange example above，the brute force loop every solution and repeated lots of calculations， now we will use `cache` to optimize it.

```js
const coins = [10, 6, 1];
const cache = {}

const makeChange = (value) => {  
    // if (value === 0) return 0;  // base case to return
    if(cache[value]) return cache[value];

    let minCoins = -1;
    coins.forEach((coin, i) => {
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin);  // recursive case to get closer to base case 
            if (minCoins === -1 || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });

    cache[value] = minCoins + 1;
    return  cache[value];// return where appropriate
};
```