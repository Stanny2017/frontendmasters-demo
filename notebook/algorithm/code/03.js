
const fib = (n) => {
    const res = [0, 1]

    for (let i = 2; i <= n; i++) {
        let v = res[n - 1] + res[n - 2];
        res.push(v)
    }

    console.log(res)

    return res[n]
}

console.log(fib(45))
