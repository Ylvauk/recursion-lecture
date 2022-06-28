// function printXTimes(n) {
//     // the base case
//     if (n < 0) return;
//     // the action
//     console.log(`${n} more prints to go`);
//     // the recursive call
//     printXTimes(n - 1);
// }

// printXTimes(-4)

// function factorial(n){
//     if (n <= 0) return 1;
//     console.log(`Will return ${n} * factorial(${n - 1})`)
//     return n * factorial(n-1);
// }

// console.log(factorial(4))

function fib(n) {
    if (n <= 1) return n;
    console.log(`I have to add ${n} to the stack`);
    return fib(n - 1) + fib(n - 2);
}

//fib 7
//fib 6+ fib 5
//fib 5 + fib 4 // fib 4 + fib 3
// console.log(fib(20))

// let memo = {};
// function fibMemo(n) {
//     if (n <= 1) return n;
//     if (memo[n]) return memo[n];
//     console.log(`I have to add ${n} to the stack`);
//     let result = fibMemo(n - 1) + fibMemo(n - 2);
//     memo[n] = result;
//     return result;
// }

// console.log(fibMemo(50))