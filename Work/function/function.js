// Fibonacci Series 1 1 2 3 5 8 13 21 .....

let Fibonacci = (n) => {
    let a = 0;
    let b = 1;
    let c = 0;

    if (n == 0) {
        return a;
    } else if (n == 1) {
        return b;
    } else {
        for (let i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
    }
}
console.log(Fibonacci(50));